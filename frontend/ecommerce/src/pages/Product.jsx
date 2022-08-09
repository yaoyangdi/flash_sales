import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Container = styled.div`

`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  width: 50%;
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 00;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;

`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width:50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;

  &:hover{
    background-color: black;
    color: white;
    border: 2px solid white;
  }
`;

const Product = ({}) => {

  const [productList, setProductList] = useState(null);
  const [amount, setAmount] = useState(0);
  const [size, setSize] = useState("");
  // GET request using fetch 
  const fetchData =  () => fetch('http://localhost:8080/product/')
  .then(response => response.json())
  .then(data => {
    const result = []
    data.forEach((product)=> {
      result.push(product);
    })
    setProductList(result);
    // setProductList(data)  // store the product list
  });

  /* UseEffect (ComponentDidMount) */
  useEffect(() => {
    fetchData();
  }, []); // empty dependency array means this effect will only run once (like componentDidMount in classes)


  const params = useParams();
  const id = params.id-1;
  const product = productList!=null && productList[id];



  /* Method for amount var */
  const onInc = () => {
    setAmount(amount+1)
  }
  const onDec = () => {
    if (amount>0){
      setAmount(amount-1)
    }
  }


  const onAddToCart = () => {
    fetch("http://localhost:8080/addToCart", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(Object.fromEntries({"productId": product.id, "qty": amount, "size": size.value}))
    })
    .then((response) => {
      console.log(response); // returns empty string
    })
  }
  
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img_url}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Price>$ {product.price}</Price>
          <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black"/>
            <FilterColor color="darkblue"/>
            <FilterColor color="gray"/>
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize  ref={ (input)=> {setSize(input);}} >
              <FilterSizeOption value="XS">XS</FilterSizeOption>
              <FilterSizeOption value="S">S</FilterSizeOption>
              <FilterSizeOption value="M">M</FilterSizeOption>
              <FilterSizeOption value="L">L</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <RemoveIcon onClick={onDec} style={{cursor:"pointer"}}/>
            <Amount>{amount}</Amount>
            <AddIcon onClick={onInc} style={{cursor:"pointer"}}/>
          </AmountContainer>
          <Button onClick={onAddToCart}>ADD TO CART</Button>
        </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product
