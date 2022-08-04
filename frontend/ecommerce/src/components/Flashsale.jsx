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

let start_time = new Date(flashsales[id].startTime).getTime();
const curr = new Date().getTime();


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
            ( ( curr - start_time) >= 0 ) ?
            flashsales[id].products.map((prod)=>(
                <Product prod={prod} key={prod.id}/>
            )) : null
        }
      </Products>

    </Container>
  )
}


export default Flashsale
