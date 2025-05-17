import React from "react";
import styled from "styled-components";
import Nav from "./nav";
import Ad from "./ad";
import Inner from "../../source/inner";

const BotDiv = styled.div`
  width:100%;
  height: 40px;
  border-top: 1px solid rgba(170,170,170,0.5);
  border-bottom: 3px solid rgba(139,69,19,0.75);
`

function Bot(){
  return(
    <BotDiv>
      <Inner>
        <Nav/>
        <Ad/>
      </Inner>
    </BotDiv>
  )
}

export default Bot;