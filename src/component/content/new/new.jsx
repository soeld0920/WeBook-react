import React from "react";
import styled from "styled-components";
import Inner from "../../source/inner";
import Head from "./head"
import Body from "./body/body";

const NewSection = styled.section`
  width: 100%;
`

function New(){
  return(
    <NewSection>
      <Inner $flex={false}>
        <Head/>
        <Body/>
      </Inner>
    </NewSection>
  )
}

export default New