import React from "react";
import styled from "styled-components";
import Inner from "../../source/inner";
import List from "./bookList/list";
import Test from "./testDiv/test";

const PersonalSection = styled.section`
  width: 100%;
  margin-top: 50px;
`

function Personal(){
  return(
    <PersonalSection>
      <Inner>
        <List/>
        <Test/>
      </Inner>
    </PersonalSection>
  )
}

export default Personal