import React from "react";
import styled from "styled-components";
import { Text } from "../../source/text";
import { Link } from "react-router-dom";

const SnsListDiv = styled.div`
  width: 580px;
  height: 100%;
  display: flex;
  justify-content: space-around;
`

const SnsDiv = styled(Link)`
  width: 173px;
  height: 33px;
  border: 1px solid #333;
  display: flex;
  align-items: center;
`

function SnsList(){
  return(
    <SnsListDiv>
      <Sns url={'/images/sns1.png'} text={"페이스북"}/>
      <Sns url={'/images/sns2.png'} text={"인스타그램"}/>
      <Sns url={'/images/sns3.png'} text={"유튜브"}/>
    </SnsListDiv>
  )
}

function Sns({url, text}){
  return(
    <SnsDiv to={'/'}>
      <img src={url} alt="" style={{width:"33px"}}/>
      <Text as={'p'} $fontSize={6} $color={'#aaa'} style={{marginLeft:'5px'}}>
        Webook <br />
        공식 {text} 바로가기
      </Text>
    </SnsDiv>
  )
}

export default SnsList