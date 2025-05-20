import React from "react";
import { Text } from "../../source/text";
import styled from "styled-components";

const InfoText = styled(Text)`
  margin-top: 20px;
`

function Info(){
  return(
  <InfoText as={'p'} $fontSize={5} $color={'#aaa'}>
    <Text $fontWeight={700}>(주)위북 </Text>대표이사 장근용 <br />
    사업자등록번호 : 277-8335 통신판매업신고 : 2025-서울중구-0067 <br />
    주소 : 서울 강남구 낙천대로 423 88 5(신림동, 유아빌딩) <br />
    이메일  webook@webook.co.kr 호스팅 ; (주)webookHost <br />
    Copyright ⓒ WEBOOK Corp. All Rights Reserved.
  </InfoText>)
}

export default Info