import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
    display: flex;
    background-color: #F7F1F1;
`;
// Left section
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 40px;
`;

const Title = styled.h4`
    margin-bottom: 20px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    font-size: 13px;
    width: 35%;
    margin-bottom: 10px;
    cursor: pointer;
`;

// Cenetr section
const Center = styled.div`
    flex: 1;
    color: black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.a`
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    padding: 20px;
    line-height: 15px;
    color: black;

`;
const Desc = styled.p`
    margin-bottom: 10px;
`;
const SocialContainer = styled.div`
    display: flex;
    align-items: center;

`;
const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white; 
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`;

// Right section
const Right = styled.div`
    flex: 1;
    padding: 20px;
    margin-left: 100px;
`;

const ContactItem = styled.div`
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    font-size: 13px;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Assessories</ListItem>
                <ListItem>My account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Left>
        <Center>
            <Logo href="/">XYZ.</Logo>
            <Desc>For more information, find us on </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><RoomIcon style={{marginRight:"10px"}}/>622 Duxie Path, South Melbourne 3076</ContactItem>
            <ContactItem><PhoneIcon style={{marginRight:"10px"}}/>+61 012 345 6789</ContactItem>
            <ContactItem><EmailOutlinedIcon style={{marginRight:"10px"}}/>contact@xyz.dev</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer
