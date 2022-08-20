import styled from "styled-components"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    border: ${props=>props.type==="filled" &&"none"};
    background-color: ${props=>props.type==="filled" ? "black" : "transparent"};
    color: ${props=>props.type==="filled" &&"white"};

`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 40px 0px;
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 170px;
    height: 220px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice = styled.span`
    font-size: 25px;
    font-weight: 200;
`;

const ProductSize = styled.span``;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    width: 90%;
    margin: 20px 0px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 55vh;
`;
const SummaryTitle = styled.h1`
    font-weight: 400;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
`;


const Cart = () => {
    const [cartList, setCartList] = useState([]);

    const fetchData =  () => fetch('http://localhost:8080/cart?token=4028b881828388fb0182838cfc2b0003')
    .then(response => response.json())
    .then(data => {
      const result = []
      data.message.forEach((product)=> {
        result.push(product);
      })
      setCartList(result);
      // setProductList(data)  // store the product list
    });
    
    /* UseEffect (ComponentDidMount) */
    useEffect(() => {
      fetchData();
    }); // empty dependency array means this effect will only run once (like componentDidMount in classes)

    let cartAmount = cartList!==[] && cartList.reduce((acc, curr) => acc+curr.qty, 0);
    let subtotal = cartList!==[] && cartList.reduce((acc, curr) => acc+curr.qty*curr.cartProduct.price, 0).toFixed(2);




    /* Method for amount var */
    const onInc = (id) => {
        fetch(`http://localhost:8080/cart/increase?token=4028b881828388fb0182838cfc2b0003&id=${id}`,
        {
            method: "PUT",
        })
    };

    const onDec = (itemAmount, id) => {
        if (itemAmount>1){
            fetch(`http://localhost:8080/cart/decrease?token=4028b881828388fb0182838cfc2b0003&id=${id}`,
            {
                method: "PUT",
            })
        } else {
            // decrease
            fetch(`http://localhost:8080/cart/decrease?token=4028b881828388fb0182838cfc2b0003&id=${id}`,
            {
                method: "PUT",
            });

            // delete
            fetch(`http://localhost:8080/cart?token=4028b881828388fb0182838cfc2b0003&id=${id}`,
            {
                method: "DELETE",
            })
        };
    }

    return (
        <Container>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <a href="/"><TopButton >CONTINUE SHOPPING</TopButton></a>
                    
                    <TopTexts>
                        <TopText>Shopping Bag({cartAmount})</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton  type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {
                            cartList.map((product) => (
                                <>
                                    <Product>
                                        <ProductDetail>
                                            <Image src={product.cartProduct.img_url}></Image>
                                            <Details>
                                                <ProductName><b>Product: </b>{product.cartProduct.title}</ProductName>
                                                <ProductId><b>ID: </b>{product.cartProduct.id}</ProductId>
                                                <ProductColor color="black"></ProductColor>
                                                <ProductSize><b>Size:</b>9.5</ProductSize>
                                            </Details>
                                        </ProductDetail>
                                        <PriceDetail>
                                            <ProductAmountContainer>
                                                <RemoveIcon onClick={() => onDec(product.qty, product.id)} style={{cursor:"pointer"}}/>
                                                <ProductAmount>{product.qty}</ProductAmount>
                                                <AddIcon  onClick={() => onInc(product.id)} style={{cursor:"pointer"}}/>
                                            </ProductAmountContainer>
                                            <ProductPrice>$ {product.cartProduct.price}</ProductPrice>
                                        </PriceDetail>
                                    </Product>
                                    <Hr></Hr>
                                </>
                                )
                            )
                        }

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {subtotal}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {subtotal}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>PAY NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart
