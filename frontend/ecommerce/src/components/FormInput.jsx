import styled from "styled-components";

const Label = styled.span`
    font-size: 12px
`;
const InputContainer = styled.label`

margin: 10px 25px 0px 20px;
color: gray;
width: 40%;
min-height: 40px;
`;
const Input = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 14px;
    height: 15px;
`;
const ErrorMessage = styled.span`
    display: none;
    font-size: 11px;
    color: red;
    font-weight: 400;
    ${Input}:invalid+ & {
        display: block;
    }
`;

const FormInput = (props) => {
  const {label, key, errorMessage, onChange, ...inputProps} = props;
  return (
    <InputContainer>
        <Label>{label}</Label>
        <Input {...inputProps} onChange={onChange}></Input>
        <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>

  )
}

export default FormInput
