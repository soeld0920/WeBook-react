import React from "react";
import styled from "styled-components";
import Category from "./category";
import Input from "./input";
import Btn from "./searchBtn";

const SeacrhDiv = styled.div`
  width: 650px;
  height: 50px;
  display: flex;
  border: 2px solid #32CD32;
  border-radius: 10px;
  margin-left: 45px;
`

function Search(){
  return(
    <SeacrhDiv>
      <Category/>
      <Input/>
      <Btn/>
    </SeacrhDiv>
  )
}

export default Search