import React from "react";
import Today from "./today/today";
import styled from "styled-components";
import Feature from "./feature/feature";
import Ad from "./ad/ad";
import New from "./new/new";
import BAR from "./bestseller&recommand/BAR";
import Personal from "./personal/personal";
import Author from "./author/author";

const ContentSection = styled.section`
  & > *{
    margin-bottom: 50px;
  }
`

function Content(){
  return(
    <ContentSection>
      <Today/>
      <Feature/>
      <Ad/>
      <New/>
      <BAR/>
      <Ad/>
      <Personal/>
      <Author/>
    </ContentSection>
  )
}

export default Content