import React from "react";
import styled from "styled-components";
import Inner from "../../source/inner"
import Notice from "./notice";
import SnsList from "./sns";

const TopDiv = styled.div`
  width: 100%;
  height: 60%;
  border-top: 2px solid #aaa;
  border-bottom: 2px solid #aaa;
`

function Top(){
  return(
    <TopDiv>
      <Inner>
        <Notice/>
        <SnsList/>
      </Inner>
    </TopDiv>
  )
}

export default Top