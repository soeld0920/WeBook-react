import React from "react";
import styled from "styled-components";
import Inner from "../../source/inner"
import Live from "./live/live";
import Sns from "./sns/sns";

const AuthorDiv = styled.div`
  width: 100%;
  height: 285px;
  background-color: #ccc;
`

function Author(){
  return(
    <AuthorDiv>
      <Inner>
        <Live/>
        <Sns/>
      </Inner>
    </AuthorDiv>
  )
}

export default Author