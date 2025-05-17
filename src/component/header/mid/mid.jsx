import React from "react";
import styled from "styled-components";
import Logo from "./logo";
import Ad from "./ad";
import Search from "./search/search";
import Inner from "../../source/inner";

const MidDiv = styled.div`
  width:100%;
  height: 90px;
`

function Mid(){
  return(
    <MidDiv>
      <Inner>
        <Logo/>
        <Search/>
        <Ad/>
      </Inner>
    </MidDiv>
  )
}

export default Mid;