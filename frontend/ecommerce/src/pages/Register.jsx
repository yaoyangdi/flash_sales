import { useRef, useState } from "react";
import styled from "styled-components"
import FormInput from "../components/FormInput";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
`;
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2sem;
`;
const Logo = styled.a`
    margin: 10px 0px;
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    color: black;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
    // use useRef to avoid re-rendering
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmRef = useRef();

    const [values, setValues] = useState({   // use JSON object instead of use useState hook multiple times
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmedPassword: ""
    });

    // Handle multiple inputs
    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            refer: usernameRef,
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            errorMessage: "Username should be 3-16 characters and should't include any special character!",
            required: true,
        },
        {
            id: 2,
            name: "firstname",
            type: "text",
            placeholder: "First name",
            refer: firstnameRef,
            label: "First name",
            required: true,
        },
        {
            id: 3,
            name: "lastname",
            type: "text",
            placeholder: "Last name",
            refer: lastnameRef,
            label: "Last name",
            required: true,
        },
        {
            id: 4,
            name: "email",
            type: "email",
            placeholder: "Email",
            refer: emailRef,
            label: "Email",
            errorMessage: "Invalid email address!",
            required: true,
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Last name",
            refer: passwordRef,
            label: "Password",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            errorMessage: "Password should be 8-20 characters and include at least one number and one character and one special character",
            required: true,
        },
        {
            id: 6,
            name: "confirmedPassword",
            type: "password",
            placeholder: "Confirm password",
            refer: confirmRef,
            label: "Confirmed Password",
            pattern: values.password,
            errorMessage: "Password not match!",
            required: true,
        },
     ];

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    // Handle submit
    const handleSubmit = (e) =>{
        e.preventDefault();  // prevent refresh the page by default
        const data = new FormData(e.target);
        
        fetch("http://localhost:8080/api/user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(Object.fromEntries(data.entries()))
        }).then(()=>{
            console.log("new account added")
        })
    }

    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <Logo href="/" >XYZ.</Logo>
                </LogoContainer>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleSubmit} >
                    {inputs.map((input)=>(
                        <FormInput key={input.id} {...input} width="40%" value={values[input.name]} onChange={onChange}/>
                    ))}
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button type="submit">CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
