import {useEffect, useRef,  useState } from "react";
import styled from "styled-components"
import { flashsales } from "../assets/data.js";
import Countdown from "./Countdown.jsx";
import Product from "./Product";

const Container = styled.div`
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 50px;
    width: 100%;
    text-align: start;
`; 
const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CountdownContainer = styled.div`
    display: flex;
    width: 100%;
`;

const Flashsale = () => {
    const [id, setId] = useState(0);
    const handleClick =()=> (e) => {
        if(flashsales[e].status === 1){
            setId(e);
        }
    }


  return (
    <Container>
      <Title>Flash Sales</Title>
      <CountdownContainer>
        {flashsales.map((flashsale) => (
            flashsale.status === 1 
            ? (
                <Countdown handleClick={handleClick()} 
                key={flashsale.id} 
                id={flashsale.id} 
                startTime={flashsale.startTime} 
                endTime={flashsale.endTime}/>
                )
            : (
                null
            )
                 
            ))}
      </CountdownContainer>

      <Products>
        {
            flashsales[id].products.map((prod)=>(
                <Product prod={prod} key={prod.id}/>
            ))
        }
      </Products>

    </Container>
  )
}


export default Flashsale
