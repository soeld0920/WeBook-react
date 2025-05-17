import React from "react";
import styled from "styled-components";
import { LinkText, Text, TitleText } from "../../source/text";
import { useBARContext } from "../../../context/BAR";

const HeadDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
`

const HeadBtn = styled.button`
  all:unset;
  cursor: pointer;
`

function Head(){
  const {selectedBR, setSelectedBR} = useBARContext()
  return(
    <HeadDiv>
      <HeadBtn onClick={() => setSelectedBR('B')}>
        <TitleText as={'h3'} $fontSize={1} $color={selectedBR === 'B' ? '#248F24' : '#aaa'}>We의 베스트 선택</TitleText>
      </HeadBtn>
      <Text $fontSize={1} $color={'#333'} style={{margin:'0 5px'}}>{`|`}</Text>
      <HeadBtn onClick={() => setSelectedBR('R')}>
        <TitleText as={'h3'} $fontSize={1} $color={selectedBR === 'R' ? '#248F24' : '#aaa'}>Web의 추천</TitleText>
      </HeadBtn>
      <LinkText to={'/'} $fontSize={1} $color={'#aaa'} style={{marginLeft:'auto'}} $fontWeight={700}>+더보기</LinkText>
    </HeadDiv>
  )
}

export default Head