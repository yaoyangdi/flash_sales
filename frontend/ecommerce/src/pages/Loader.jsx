import React from 'react'
import CircularProgressWithLabel from '@mui/material/CircularProgress';
import styled from 'styled-components'
const Container = styled.div`
    width: 100%;

`;

const Loading = styled.div`
    position: absolute;
    top: 48vh;
    left:48vw;
    opacity:100%;

    @media (max-width: 900px) {
      top: 45vh;
      left:40vw;
  }
`;

const FloatText = styled.span`
    width:100%;
    height:7em;
    font-size:27px;
    position:absolute;
    top: 35vh;
    left:16vw;
    font-family: 'Space Grotesk', sans-serif;
    font-family: 'Space Mono', monospace;
    font-weight: bold;
    transition: all 0.5s ease-out;

    @media (max-width: 900px) {
        width: 80%;
        top: 30vh;
        left:13vw;
        font-size: 20px;
    }
`;

const Loader = ({progress}) => {
  return (
    <Container>
        {/* Spinner loader when sending request not finished */}
        {
          <div>
              <Loading>
                  <CircularProgressWithLabel value={progress} color="inherit"/>
              </Loading>
              <FloatText >Server need more time to wake up, thank you for being patient ! !</FloatText>
          </div>

        }
    </Container>
  )
}

export default Loader
