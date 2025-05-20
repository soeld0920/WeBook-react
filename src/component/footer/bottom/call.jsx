import React from "react";
import { Text, TitleText } from "../../source/text";
import styled from "styled-components";

const CallText = styled(Text)`
  margin-top: 20px;
  margin-left: auto;
`

function Call(){
  return(
  <CallText as={'p'} $fontSize={5} $color={'#aaa'}>
    고객센터 전화번호
    <TitleText as={'h3'} $fontSize={1}>051-777-3885</TitleText>
    상담가능시간 <br />
    평일 09:00 ~ 18:00 토요일 10:00 ~ 15:00 / 점심시간 12:00 ~ 13:00 <br />
    일요일 및 공휴일 휴무
  </CallText>)
}

export default Call