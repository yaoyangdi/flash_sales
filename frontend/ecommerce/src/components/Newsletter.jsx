import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width:50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input = styled.input`
    flex: 9;
    border: none;
    padding-left: 20px;
    padding-right: 20px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder="Your email"></Input>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter