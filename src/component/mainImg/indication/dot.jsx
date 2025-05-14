import React from "react";
import styled from "styled-components";
import { useImage, useImagePageNum } from "../../../context/imagePageNum";

const DotDiv = styled.div`
  display: flex;
  justify-content: center;
`

const DotButton = styled.button`
  color: #aaa;
  opacity: 50%;
  font-size: 40px;
  width:auto;
  height:40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color : ${({$selected}) => $selected && '#333'};
`

function Dots(){
  const images = useImage()
  const {imagePageNum} = useImagePageNum()
  return(
    <DotDiv>
      {images.map(image => (
        <Dot $selected={image.id - 1 === imagePageNum} key={image.id} id={image.id}/>
      ))}
    </DotDiv>
  )
}

function Dot({$selected, id}){
  const {setImagePageNum} = useImagePageNum()
  return(
    <DotButton $selected={$selected} onClick={() => setImagePageNum(id - 1)}>●</DotButton>
  )
}

export default Dots