import React from "react";
import styled from "styled-components";
import List from "./list";

const BodyDiv = styled.div`
  width: 100%;
  margin-top: 55px;
  height: auto;
`

function RecommandBody(){
  return(
    <BodyDiv>
      <List/>
    </BodyDiv>
  )
}

export default RecommandBody