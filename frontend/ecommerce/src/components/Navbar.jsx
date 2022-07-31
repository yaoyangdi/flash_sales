import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

const Container = styled.div`
    height: 80px;
`;
const Wrapper = styled.div`
    padding: 10px 30px;
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
    display: flex;
    align-items: center;
    height: 30px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    flex: 9;
    height: 100%;
`;
const Logo = styled.a`
    margin: 10px 0px;
    font-size: 35px;
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
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <SearchIcon style={{color: "gray", flex: 1}}/>
                </SearchContainer>
            </Left>
            <Center><Logo href='/'>XYZ.</Logo></Center>
            <Right>
                <MenuItem href='/register'>REGISTER</MenuItem>
                <MenuItem href='/login'>LOGIN</MenuItem>
                <MenuItem href='cart'>
                    <Badge badgeContent={2} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItem>

            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar