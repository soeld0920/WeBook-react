import React from "react";
import styled from "styled-components";
import Inner from "../../source/inner";
import Head from "./head"
import Body from "./body/body";

const FeatureSection = styled.section`
  width: 100%;
`

function Feature(){
  return(
    <FeatureSection>
      <Inner $flex={false}>
        <Head/>
        <Body/>
      </Inner>
    </FeatureSection>
  )
}

export default Feature