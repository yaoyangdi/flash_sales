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
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Title = styled.h1`
    margin-left: 70px;
    font-size: 30px;
    font-weight: 300;
`;

const Button = styled.button`
    width: 50%;
    border: none;
    padding: 15px 20px;
    margin-top: 40px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;
const ErrorMessage = styled.span`
    margin-left: 70px;
    font-size: 14px;
    font-weight: bold;
    color: red;
    font-weight: 400;
`;

const NewProduct = () => {
    // use useRef to avoid re-rendering
    const TitleRef = useRef();
    const priceRef = useRef();
    const DesciptionRef = useRef();
    const DisplayPictureRef = useRef();

    const [values, setValues] = useState({   // use JSON object instead of using useState hook multiple times
        title: "",
        price: "",
        description: "",
        image: undefined
    });
    const [errorMessage, setErrorMessage] = useState(null); 
    // Handle multiple inputs
    const inputs = [
        {
            id: 1,
            name: "title",
            type: "text",
            placeholder: "Title",
            refer: TitleRef,
            label: "Title",
            required: true,
        },
        {
            id: 2,
            name: "price",
            type: "number",
            step: "0.01",
            placeholder: "Price",
            refer: priceRef,
            label: "Price",
            required: true,
        },
        {
            id: 3,
            name: "description",
            type: "text",
            placeholder: "Description",
            ref: DesciptionRef,
            label: "Description",
            required: false,
        },
        {
            id: 4,
            name: "image",
            type: "file",
            placeholder: "Display picture",
            ref: DisplayPictureRef,
            label: "Display Picture",
            required: false,
        }
        ];

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    

    // Handle submit
    const handleSubmit = (e) =>{
        e.preventDefault();  // prevent refresh the page by default
        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()))
        try{
            fetch("https://flashsales-api.herokuapp.com/product", {
                method: "POST",
                body: data
            })
            .then(
                response => response.json(),
            )
            .then(
                res => res.success ? onSuccessSubmit() : setErrorMessage(res.message)
            )
        }
         catch(err) {
            console.log(err)
        }
    }

    const onSuccessSubmit = ()  => {
        setErrorMessage("");
        setValues({   // use JSON object instead of using useState hook multiple times
            title: "",
            price: "",
            description: "",
            image: ""
        })
        alert('Product created successfully!');
    }
    
    return (
        <Container>

            <Wrapper>
                <Title>NEW PRODUCT</Title>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <Form onSubmit={handleSubmit} >
                    {inputs.map((input)=>(
                        <FormInput key={input.id} {...input} width="60%" value={values[input.name]} onChange={onChange}/>
                    ))}
                    <Button type="submit">ADD A PRODUCT</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default NewProduct
