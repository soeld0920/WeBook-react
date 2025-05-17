import React from "react";
import styled from "styled-components";
import { Text, TitleText } from "../../../../source/text";

const TextAreaDiv = styled.div`
  width: 400px;
`

const MainCommentDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  gap: 5px;
  margin-top: 20px;
`

function MainComment({children}){
  return(
    <MainCommentDiv>
      <img src="/images/today-book-icon.png" alt="오늘의 책 아이콘" />
      <TitleText as={'h4'} $fontSize={2} $overflow={true} $color={'#32CD32'}>{children}</TitleText>
    </MainCommentDiv>
  )
}

function TextArea({book}){
  return(
    <TextAreaDiv>
      <TitleText as={'h3'} $fontSize={1} $overflow={true}>{book.title}</TitleText>
      <Text $fontSize={3} $overflow={true} $color={'#aaa'}>{book.author}</Text>
      <MainComment>{book.mainComment}</MainComment>
      <Text as={'p'} $color={'#666'} $fontSize={5} style={{marginBottom:'20px'}}>{book.subComment}</Text>
      <Text $fontWeight={700} $fontSize={2}>{book.price.toLocaleString('ko-KR')}원</Text>
    </TextAreaDiv>
  )
}

export default TextArea