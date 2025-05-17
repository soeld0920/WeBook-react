import React from "react";
import styled from "styled-components";
import Inner from "../../source/inner";
import Head from "./head"
import CategoryNav from "./category";
import BestsellerBody from "./Bbody/body";
import { useBARContext } from "../../../context/BAR";
import RecommandBody from "./Rbody/body";

const BARSection = styled.section`
  width: 100%;
`

function BAR(){
  const {selectedBR} = useBARContext()
  console.log(selectedBR)
  return(
    <BARSection>
      <Inner $flex={false}>
        <Head/>
        <CategoryNav/>
        {selectedBR === 'B' ? <BestsellerBody/> : <RecommandBody/>}
      </Inner>
    </BARSection>
  )
}

export default BAR