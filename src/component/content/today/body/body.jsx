import React from "react";
import styled from "styled-components";
import List from "./list/list";
import Info from "./info/info";

const BodyDiv = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`

function Body(){
  return(
    <BodyDiv>
      <List/>
      <Info/>
    </BodyDiv>
  )
}

export default Body