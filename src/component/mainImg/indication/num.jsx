import React from "react";
import styled from "styled-components";
import { useImage, useImagePageNum } from "../../../context/imagePageNum";

const NumP = styled.p`
  width: 100%;
  height: 16px;
  font-size: 16px;
  color: #333;
`

function Num(){
  const images = useImage()
  const {imagePageNum} = useImagePageNum()
  return(
    <NumP>
      {`${imagePageNum + 1}/${images.length}`}
    </NumP>
  )
}

export default Num