import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoDiv = styled.div`
  width: 135px;
  margin-left: 30px;
`

function Logo(){
  return(
    <LogoDiv>
      <Link to={'/'}><img src="/images/logo.png" alt="logo" style={{width: '100%'}}/></Link>
    </LogoDiv>
  )}

export default Logo