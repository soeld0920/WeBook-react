import React from "react"; 
import styled from "styled-components";
import { LinkText } from "../../../../source/text";

const BtnButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 135px;
  height: 45px;
  border-radius: 15px;
  background: none;
  border: none;
  background-color: #32cd32dd;
`

function Btn(){
  return(
    <BtnButton>
      <LinkText $color={'#8B4513dd'} $fontWeight={700} $fontSize={2} to={'/'}>자세히보기</LinkText>
    </BtnButton>
  )
}

export default Btn