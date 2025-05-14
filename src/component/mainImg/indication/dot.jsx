import React from "react";
import styled from "styled-components";
import { useImage} from "../../../context/image";

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
  const {images,imagePageNum} = useImage()
  let imagePageNumCopy = imagePageNum
  if(imagePageNumCopy === 0 | imagePageNumCopy === images.length + 1){
    imagePageNumCopy = imagePageNumCopy === 0 ? images.length : 1
  }
  return(
    <DotDiv>
      {images.map(image => (
        <Dot $selected={image.id === imagePageNumCopy} key={image.id} id={image.id}/>
      ))}
    </DotDiv>
  )
}

function Dot({$selected, id}){
  const {setImagePageNum} = useImage()
  return(
    <DotButton $selected={$selected} onClick={() => setImagePageNum(id)}>●</DotButton>
  )
}

export default Dots