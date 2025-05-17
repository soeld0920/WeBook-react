import React from "react";
import styled from "styled-components";
import Trending from "./trending/trending";
import Login from "./loginNav/loginNav";
import Inner from "../../source/inner";

const TopDiv = styled.div`
  width:100%;
  height: 30px;
  background-color: rgba(50, 205, 50, 0.8);
`

function Top(){
  return(
    <TopDiv>
      <Inner>
        <Trending/>
        <Login/>
      </Inner>
    </TopDiv>
  )
}

export default Top;