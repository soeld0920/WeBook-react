import React from "react";
import styled from "styled-components";
import LoginList from "./loginList";

const LoginUl = styled.ul`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
`

function Login(){
  return(
    <LoginUl>
      <LoginList/>
    </LoginUl>
  )
}

export default Login;