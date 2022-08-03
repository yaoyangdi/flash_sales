import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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



const Product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac sem ultrices, hendrerit mauris sit amet, facilisis nulla. Nulla auctor, sem a commodo consectetur, ipsum mauris hendrerit dui, a vulputate velit nibh ut metus. Ut in elementum arcu. 
            Maecenas at mauris ut erat semper elementum et sit amet leo. Nullam vitae tortor lorem. Proin euismod nunc et elit finibus dapibus. Etiam diam erat, dictum a tortor in, feugiat placerat turpis. Phasellus id rhoncus lacus. Pellentesque at consectetur mi. 
            Ut erat enim, malesuada ullamcorper viverra iaculis, semper vel purus. Cras tincidunt tristique sem vitae sollicitudin. Vestibulum quis ligula dolor. Donec in nibh felis. Nulla sit amet ligula at erat laoreet commodo ut in felis. Fusce justo tellus, porta ullamcorper efficitur sed, feugiat sed ligula.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black"/>
            <FilterColor color="darkblue"/>
            <FilterColor color="gray"/>
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <RemoveIcon/>
            <Amount>1</Amount>
            <AddIcon/>
          </AmountContainer>
          <Button>ADD TO CART</Button>
        </AddContainer>
        </InfoContainer>

      </Wrapper>
    </Container>
  )
}

export default Product
