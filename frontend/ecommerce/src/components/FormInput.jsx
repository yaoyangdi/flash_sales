import { useState } from "react";
import styled from "styled-components";

const Label = styled.span`
    font-size: 12px
`;
const InputContainer = styled.label`

    margin: 10px 25px 0px 20px;
    color: gray;
    width:  ${props=>props.width};
    min-height: 40px;
`;
const Input = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 14px;
    height: 15px;
    width: 100%;


`;
const ErrorMessage = styled.span`
    display: none;
    font-size: 11px;
    color: red;
    font-weight: 400;
    ${Input}:focus:invalid+ & {
        display: block;
    }
`;

const FormInput = (props) => {
  const {label, errorMessage, onChange, width, ...inputProps} = props;
  const [blur, setBlur] = useState(true);
  const handleBlur = (e) => {
    setBlur(true);
    console.log(blur);
  }
  return (
    <InputContainer width={width}>
        <Label>{label}</Label>
        <Input  {...inputProps} onChange={onChange} onBlur={handleBlur} focused={blur.toString()}></Input>
        <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>

  )
}

export default FormInput
