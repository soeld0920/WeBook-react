import React from "react";
import styled from "styled-components";
import { useImage } from "../../../context/image";
import { Text } from "../../source/text";

const NumText = styled(Text)`
  width: 100%;
  height: 16px;
  color: #333;
`

function Num(){
  const {images, imagePageNum} = useImage()
  let imagePageNumCopy = imagePageNum
  if(imagePageNumCopy === 0 | imagePageNumCopy === images.length + 1){
    imagePageNumCopy = imagePageNumCopy === 0 ? images.length : 1
  }
  return(
    <NumText $fontSize={4}>
      {`${imagePageNumCopy}/${images.length}`}
    </NumText>
  )
}

export default Num