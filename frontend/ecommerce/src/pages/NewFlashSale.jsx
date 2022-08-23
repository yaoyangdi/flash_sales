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


const NewFlashSale = () => {
    // use useRef to avoid re-rendering
    const productIdRef = useRef();
    const priceRef = useRef();
    const totalStockRef = useRef();
    const startTimeRef = useRef();
    const endTimeRef = useRef();

    const [values, setValues] = useState({   // use JSON object instead of using useState hook multiple times
        productId: "",
        newPrice: "",
        totalStock: "",
        startTime: "",
        endTime: "",
    });

    // Handle multiple inputs
    const inputs = [
        {
            id: 1,
            name: "productId",
            type: "text",
            placeholder: "Product ID",
            refer: productIdRef,
            label: "Product ID",
            required: true,
        },
        {
            id: 2,
            name: "newPrice",
            type: "text",
            placeholder: "Price",
            refer: priceRef,
            label: "Price",
            required: true,
        },
        {
            id: 3,
            name: "totalStock",
            type: "number",
            placeholder: "Total Stock",
            refer: totalStockRef,
            label: "Total Stock",
            required: true,
        },
        {
            id: 4,
            name: "startTime",
            type: "datetime-local",
            placeholder: "Start Time",
            refer: startTimeRef,
            label: "Start Time",
            required: true,
        },
        {
            id: 5,
            name: "endTime",
            type: "datetime-local",
            placeholder: "End Time",
            refer: endTimeRef,
            label: "End Time",
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
        console.log(Object.fromEntries(data.entries()))


        fetch("https://flashsales-api.herokuapp.com/flashsale", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(Object.fromEntries(data.entries()))
        })
        .then(
            response => response.json()
        )
        .then(
            res => res.success ? onSuccessSubmit() : alert(res.message)
        )
    }
    
    const onSuccessSubmit = ()  => {
        /*
        setValues({   // use JSON object instead of using useState hook multiple times
            productId: "",
            newPrice: "",
            totalStock: "",
            startTime: "",
            endTime: "",
        })
        */
        alert('Product created successfully!');
    }

    return (
        <Container>
            <Wrapper>
                <Title>NEW FLASH SALE INFO</Title>
                <Form onSubmit={handleSubmit} >
                    {inputs.map((input)=>(
                        <FormInput key={input.id} {...input} width="60%" value={values[input.name]} onChange={onChange}/>
                    ))}
                    <Button type="submit">CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default NewFlashSale
