import React from "react";
import styled from "styled-components";
import Nav from "./nav";

const InfoDiv = styled.div`
  width: 510px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
`

function Info(){
  return(
    <InfoDiv>
      <Nav/>
    </InfoDiv>
  )
}

export default Info