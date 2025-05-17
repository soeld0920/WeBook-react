import React from "react";
import styled from "styled-components";
import Img from "./img";
import Btn from "./btn";

const TestDiv = styled.div`
  width: 200px;
  height: 100%;
  background-color: #FFFBF0;
  border: 3px solid #EFE7CC;
`

function Test(){
  return(
    <TestDiv>
      <Img/>
      <Btn/>
    </TestDiv>
  )
}

export default Test