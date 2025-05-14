import React from "react";
import styled from "styled-components";
import { useImage } from "../../../context/image";

const NumP = styled.p`
  width: 100%;
  height: 16px;
  font-size: 16px;
  color: #333;
`

function Num(){
  const {images, imagePageNum} = useImage()
  let imagePageNumCopy = imagePageNum
  if(imagePageNumCopy === 0 | imagePageNumCopy === images.length + 1){
    imagePageNumCopy = imagePageNumCopy === 0 ? images.length : 1
  }
  return(
    <NumP>
      {`${imagePageNumCopy}/${images.length}`}
    </NumP>
  )
}

export default Num