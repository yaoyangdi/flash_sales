import styled from "styled-components"
import { flashsales } from "../assets/data.js";
import Countdown from "./Countdown.jsx";
import Product from "./Product";

const Container = styled.div`
    padding: 0px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 50px;
    width: 100%;
    text-align: start;
`; 

const CountdownContainer = styled.div`
    display: flex;
    width: 100%;
`;

const Flashsale = () => {
  return (
    <Container>
      <Title>Flash Sales</Title>
      <CountdownContainer>
        {flashsales.map((flashsale) => (
                <Countdown endTime={flashsale.endTime} status={flashsale.status}/>
            ))}
      </CountdownContainer>
        {flashsales.length < 2  ? flashsales.map((flashsale) => {
            return (
                flashsale.products.map((prod)=>(
                    <Product prod={prod} key={prod.id}/>
                ))
            )
        }) : flashsales[1].products.map((prod)=>(
            <Product prod={prod} key={prod.id}/>
        ))
        }
    </Container>
  )
}

export default Flashsale
