import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    margin:15px;
    width: 250px;
    height:400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    position: relative;
`;

const Image = styled.img`
    margin-top: 1em;
    width: 100%;
`; 

const Hover = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    &:hover{
        opacity: 1;
    }
`; 
const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.7s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`; 

const Discount = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    left:0;
    padding: 10px 5px;
    background-color: #facf19;
    font-weight: bold;
    font-size: 20px;
`;
const Info = styled.div`
    width: 100%;
`;
const Title= styled.p`
    color: #999;
    font-size: 13px;
    font-weight: 400;
    line-height: 13px;
`;
const PriceContainer = styled.div`
    margin-top: -5px;
    align-items: end;
`;
const Price = styled.span`
    font-weight: 700;
    font-size: 25px;
    color: rgb(255, 76, 58);
`;
const PrevPrice = styled.span`
    margin-left: 5px;
    font-weight: 400;
    color: #999;
    text-decoration: line-through;
`;

const Product = ({prod}) => {
    const navigate = useNavigate();
  return (
    <Container onClick={()=> navigate(`product/${prod.product.id}`)}>
        <Discount><FlashOnIcon style={{fontSize: "25px"}}/>{-Math.round((prod.prevPrice-prod.price)*100/prod.prevPrice)}%</Discount>
        <Image src={prod.product.img_url} />
        <Hover>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Hover>
        <Info>
            <Title>{prod.product.title}</Title>
            <PriceContainer>
                <Price>AU${prod.price}</Price>
                <PrevPrice>AU${prod.prevPrice}</PrevPrice>
            </PriceContainer>
            <Progress percent={Math.round(prod.availableStock*100/prod.totalStock)}/>
        </Info>
    </Container>
  )
}

const ProgressContainer = styled.div`
    width: 90%;
    height: 15px;
    border-radius: 10px;
    background-color: #d8d8d8;
`;
const Progressfill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0%;
    height: 15px;
    border-radius: 10px;
    opacity: 0;
    transition: 1s ease;
    
    font-size: 15px;
    font-weight: 500;
`;

const Progress = ({percent}) => {
    const [style, setStyle] = useState({});
    setTimeout(()=>{
        const newStyle = {
            opacity: 1,
            width: `${percent}%`,
            backgroundColor: "#facf19"
        }

        setStyle(newStyle);
    }, 1000);

    return (
        <ProgressContainer>
            <Progressfill style={style}>{`${percent}%`}</Progressfill>
        </ProgressContainer>
    )

}

export default Product
