import React from "react";
import styled from "styled-components";
import Nav from "./nav";
import Ad from "./ad";

const BotDiv = styled.div`
  width:100%;
  height: 40px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(170,170,170,0.5);
  border-bottom: 3px solid rgba(139,69,19,0.75);
`

const BotInner = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Bot(){
  return(
    <BotDiv>
      <BotInner>
        <Nav/>
        <Ad/>
      </BotInner>
    </BotDiv>
  )
}

export default Bot;