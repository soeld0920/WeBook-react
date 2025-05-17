import React from "react";
import styled from "styled-components";
import Head from "./head";
import Body from "./body/body";

const SnsDiv = styled.div`
  width: 525px;
  height: auto;
  background-color: #ddd;
  border: 3px solid #aaa;
  padding: 5px;
`

function Sns(){
  return(
    <SnsDiv>
      <Head/>
      <Body/>
    </SnsDiv>
  )
}

export default Sns