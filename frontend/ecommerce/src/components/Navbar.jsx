import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { useEffect, useState } from 'react';
import {CART_API} from "../assets/data";

const Container = styled.div`
    height: 70px;
    background-color: white;
`;
const Wrapper = styled.div`
    padding: 0px 30px;
    display: flex;
    align-items: center;

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const SearchContainer = styled.div`
    width: 70%;
    border: 0.5px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    height: 34px;
`;

const Input = styled.input`
    border: none;
    background-color: transparent;    
    flex: 9;
    padding: 11px;
`;
const Logo = styled.a`
    margin: 10px 0px;
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    color: black;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;    

`;
const Navbar = () => {
    const handleSearch = () => {};
    const [cartList, setCartList] = useState([]);

    const fetchData =  () => fetch(CART_API)
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
    //   fetchData();   TODO
    },[]); // empty dependency array means this effect will only run once (like componentDidMount in classes)

    let cartAmount = cartList!==[] && cartList.reduce((acc, curr) => acc+curr.qty, 0);
  
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <SearchIcon style={{color: "gray", flex: 1, cursor:"pointer"}} onClick={handleSearch()}/>
                    </SearchContainer>
                </Left>
                <Center><Logo href='/'>XYZ.</Logo></Center>
                <Right>
                    <MenuItem  href='/register'>REGISTER</MenuItem>
                    <MenuItem  href='/login'>LOGIN</MenuItem>
                    <MenuItem  href='/cart'>
                        <Badge badgeContent={cartAmount} color="primary">
                            <ShoppingCartOutlinedIcon/>
                        </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
        </Container>
  )
}

export default Navbar