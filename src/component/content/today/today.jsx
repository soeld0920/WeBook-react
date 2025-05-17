import React from "react";
import styled from "styled-components";
import Inner from "../../source/inner";
import Head from "./head"
import Body from "./body/body";

const TodaySection = styled.section`
  width: 100%;
  margin-top: 50px;
`

function Today(){
  return(
    <TodaySection>
      <Inner $flex={false}>
        <Head/>
        <Body/>
      </Inner>
    </TodaySection>
  )
}

export default Today