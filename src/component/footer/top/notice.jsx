import React from "react";
import styled from "styled-components";
import { LinkText, Text, TitleText } from "../../source/text";

const NoticeDiv = styled.div`
  width: 600px;
  height: 60px;
  display: flex;
  border-right: 2px solid #aaa;
  align-items: center;
`

function Notice(){
  return(
    <NoticeDiv>
      <TitleText as={'h4'} $fontSize={1}>공지사항</TitleText>
      <Text $fontSize={4} $color={'#aaa'} style={{lineHeight:'30px', marginLeft:'5px'}}>3월 30일 배송오류 배상 안내</Text>
      <LinkText to={'/'} $fontSize={1} $color={'#aaa'} style={{marginLeft:'auto', marginRight:'5px'}} $fontWeight={700}>+더보기</LinkText>
    </NoticeDiv>
  )
}

export default Notice