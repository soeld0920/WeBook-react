import React from "react";
import styled from "styled-components";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useImage} from "../../context/image";

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
  const {imagePageNum, setImagePageNum,isSliding, setIsSliding} = useImage()

  const movePrep = () => {
    if(isSliding) return
    setImagePageNum(imagePageNum -1)
    setIsSliding(true)
  }

  return(
    <PrepBtnButton onClick={movePrep}>
      <SlArrowLeft/>
    </PrepBtnButton>
  )
}

export function NextBtn(){
  const {imagePageNum, setImagePageNum,isSliding, setIsSliding} = useImage()

  const moveNext = () => {
    if(isSliding) return
    setImagePageNum(imagePageNum +1)
    setIsSliding(true)
  }

  return(
    <NextBtnButton onClick={moveNext}>
      <SlArrowRight/>
    </NextBtnButton>
  )
}

