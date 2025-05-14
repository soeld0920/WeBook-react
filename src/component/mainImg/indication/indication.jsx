import React from "react";
import styled from "styled-components";
import Num from "./num";
import Dots from "./dot";

const IndicationDiv = styled.div`
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  text-align: center;
`

function Indication(){
  return(
    <IndicationDiv>
      <Dots/>
      <Num/>
    </IndicationDiv>
  )
}

export default Indication