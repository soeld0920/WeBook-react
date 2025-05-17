import React from "react";
import styled from "styled-components";
import List from "./list";
import { NextBtn, PrepBtn } from "./btn";

const BodyDiv = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 30px;
  overflow: hidden;
`

function Body(){
  return(
    <BodyDiv>
      <List/>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <PrepBtn/>
        <NextBtn/>
      </div>
    </BodyDiv>
  )
}

export default Body