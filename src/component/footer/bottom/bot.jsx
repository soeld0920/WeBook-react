import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./nav";
import Info from "./info";
import Call from "./call";
import Inner from "../../source/inner";

const BotDiv = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
`

function Bot(){
  return(
    <BotDiv>
      <Inner $flexWrap={true}>
        <Link to='/'><img src="/images/logo.png" alt="" style={{width:'180px'}}/></Link>
        <Nav/>
        <Info/>
        <Call/>
      </Inner>
    </BotDiv>
  )
}

export default Bot