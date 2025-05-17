import React from "react";
import styled from "styled-components";
import List from "./list";

const BodyDiv = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 30px;
`

function Body(){
  return(
    <BodyDiv>
      <List/>
    </BodyDiv>
  )
}

export default Body