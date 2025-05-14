import React from "react";
import styled from "styled-components";
import Logo from "./logo";
import Ad from "./ad";
import Search from "./search/search";

const MidDiv = styled.div`
  width:100%;
  height: 90px;
  display: flex;
  justify-content: center;
`

const MidInner = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
`

function Mid(){
  return(
    <MidDiv>
      <MidInner>
        <Logo/>
        <Search/>
        <Ad/>
      </MidInner>
    </MidDiv>
  )
}

export default Mid;