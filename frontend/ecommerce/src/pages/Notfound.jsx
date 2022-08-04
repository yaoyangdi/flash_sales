import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
    font-weight: 300;
`;


const Notfound = () => {
  return (
    <Container>
        Page Not Found :(
    </Container>
  )
}

export default Notfound
