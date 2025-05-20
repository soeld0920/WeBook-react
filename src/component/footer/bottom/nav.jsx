import React from "react";
import LoginList from "./navItem";
import styled from "styled-components";

const LoginUl = styled.ul`
  width: auto;
  display: flex;
  align-items: center;
  margin-left: auto;
`

function Nav(){
  return(
  <LoginUl>
    <LoginList/>
  </LoginUl>)
}

export default Nav