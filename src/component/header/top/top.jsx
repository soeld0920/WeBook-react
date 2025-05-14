import React from "react";
import styled from "styled-components";
import Trending from "./trending/trending";
import Login from "./loginNav/loginNav";

const TopDiv = styled.div`
  width:100%;
  height: 30px;
  background-color: rgba(50, 205, 50, 0.8);
  display: flex;
  justify-content: center;
`

const TopInner = styled.div`
  width:1200px;
  display: flex;
  justify-content: space-between;
`

function Top(){
  return(
    <TopDiv>
      <TopInner>
        <Trending/>
        <Login/>
      </TopInner>
    </TopDiv>
  )
}

export default Top;