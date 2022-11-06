import {useEffect, useRef,  useState } from "react";
import styled from "styled-components"
// import { flashsales } from "../assets/data.js";
import Countdown from "./Countdown.jsx";
import Product from "./Product";
import { sortByStartTime } from "../helpers/index.js";
import { FLASHSALE_API } from "../assets/data.js";

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

const Flashsale = ({setLoading, setProgress}) => {
    const [id, setId] = useState(0);
    const [flashsaleList, setFlashsaleList] = useState(null);


    const handleClick =()=> (e) => {
        console.log(e);
        if(flashsaleList!== null && flashsaleList[e].status === 1){
            setId(e);
        }
    }

let start_time = new Date(flashsaleList !== null && flashsaleList[id].startTime).getTime();
const curr = new Date().getTime();

const fetchData =  () => 
{
  setLoading(true); // on loading

  fetch(FLASHSALE_API)
    .then(response => response.json())
    .then(data => {
      const result = []
      data.message.forEach((product)=> {
        result.push(product);
      })
      setFlashsaleList(sortByStartTime(result));
    })
    .finally(() => {
      setLoading(false);
    })
  };

/* UseEffect (ComponentDidMount) */
useEffect(() => {
  fetchData();
  const timer = setInterval(() => {
    setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
  }, 800);
  return () => {
    clearInterval(timer);
  };
},[]); // empty dependency array means this effect will only run once (like componentDidMount in classes)
  console.log(flashsaleList)
  return (
    <Container>
      <Title>Flash Sales</Title>
      <CountdownContainer>
        {flashsaleList!==null && flashsaleList.map((flashsale, index) => (
            flashsale.status === 1 
            ? (
              <Countdown handleClick={handleClick()} 
                  key={flashsale.id} 
                  id={index} 
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
            flashsaleList!==null && flashsaleList[id].products.map((prod, index)=>(
                <Product prod={prod} key={prod.id} id={index}/>
            )) : null
        }
      </Products>

    </Container>
  )
}


export default Flashsale
