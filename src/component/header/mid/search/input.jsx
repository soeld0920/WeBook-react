import React from "react";
import styled from "styled-components";

const InputInput = styled.input`
  width: 450px;
  height:48px;
  border: none;
  font-size: 16px;
  outline: none;
  &::placeholder{
    color: #aaa;
  }
`

function Input(){
  return(
    <InputInput placeholder="노벨 문학상 수상자, 한강"/>
  )
}

export default Input