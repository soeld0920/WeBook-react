import React from "react";
import styled from "styled-components";
import Head from "./head";
import Body from "./body/body";

const LiveDiv = styled.div`
  width: 650px;
  height: auto;
  background-color: #ddd;
  border: 3px solid #aaa;
  padding: 5px;
`

function Live(){
  return(
    <LiveDiv>
      <Head/>
      <Body/>
    </LiveDiv>
  )
}

export default Live