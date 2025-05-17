import React from "react";
import styled from "styled-components";
import List from "./list";

const BodyDiv = styled.div`
  width: 100%;
  margin-top: 30px;
  height: auto;
`

function BestsellerBody(){
  return(
    <BodyDiv>
      <List/>
    </BodyDiv>
  )
}

export default BestsellerBody