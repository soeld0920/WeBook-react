import React from "react";
import styled from "styled-components";
import { LinkText, Text, TitleText } from "../../source/text";

const HeadDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
`

function Head(){
  return(
    <HeadDiv>
      <TitleText as={'h3'} $fontSize={1}>오늘의 도서</TitleText>
      <Text $fontSize={5} $color={'#aaa'} style={{lineHeight:'30px', marginLeft:'5px'}}>2025.05.15</Text>
      <LinkText to={'/'} $fontSize={1} $color={'#aaa'} style={{marginLeft:'auto'}} $fontWeight={700}>+더보기</LinkText>
    </HeadDiv>
  )
}

export default Head