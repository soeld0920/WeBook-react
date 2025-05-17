import React from "react";
import styled from "styled-components";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useAuthorContext } from "../../../../../context/author";

const BtnButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #64A764;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  opacity: 0.5;
  border: none;
  border-radius: 20px;
`

const PrepBtnButton = styled(BtnButton)`
  margin-left: 10px;
`
const NextBtnButton = styled(BtnButton)`
  margin-right: 10px;
`
export function PrepBtn(){
  const {selectedSnsNum, setSelectedSnsNum,isSliding, setIsSliding} = useAuthorContext()

  const movePrep = () => {
    if(isSliding) return
    setSelectedSnsNum(selectedSnsNum -1)
    setIsSliding(true)
  }

  return(
    <PrepBtnButton onClick={movePrep}>
      <SlArrowLeft/>
    </PrepBtnButton>
  )
}

export function NextBtn(){
  const {selectedSnsNum, setSelectedSnsNum,isSliding, setIsSliding} = useAuthorContext()

  const moveNext = () => {
    if(isSliding) return
    setSelectedSnsNum(selectedSnsNum +1)
    setIsSliding(true)
  }

  return(
    <NextBtnButton onClick={moveNext}>
      <SlArrowRight/>
    </NextBtnButton>
  )
}

