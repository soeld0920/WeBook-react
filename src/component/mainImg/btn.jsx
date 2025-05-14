import React from "react";
import styled from "styled-components";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useImage, useImagePageNum } from "../../context/imagePageNum";

const BtnButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 80px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
  font-weight: 700;
`

const PrepBtnButton = styled(BtnButton)`
  left: calc(50% - 600px - 40px);
`
const NextBtnButton = styled(BtnButton)`
  left: calc(50% + 600px);
`
export function PrepBtn(){
  const images = useImage()
  const {imagePageNum, setImagePageNum} = useImagePageNum()

  const imagePageDown = () => {
    if(imagePageNum > 0){
      setImagePageNum(imagePageNum -1)
    }else{
      setImagePageNum(images.length -1)
    }
  }

  return(
    <PrepBtnButton onClick={imagePageDown}>
      <SlArrowLeft/>
    </PrepBtnButton>
  )
}

export function NextBtn(){
  const images = useImage()
  const {imagePageNum, setImagePageNum} = useImagePageNum()

  const imagePageUp = () => {
    if(imagePageNum < images.length - 1){
      setImagePageNum(imagePageNum +1)
    }else{
      setImagePageNum(0)
    }
  }

  return(
    <NextBtnButton onClick={imagePageUp}>
      <SlArrowRight/>
    </NextBtnButton>
  )
}

