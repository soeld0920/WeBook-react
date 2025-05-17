import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Text } from "../../../source/text";

const BtnDiv = styled.div`
  width: 100%;
  height: 100px;
  border-top: 3px solid #EFE7CC;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InteractionDiv = styled.div`
  width: 150px;
  height: 40px;
  background-color: #6D9F71;
  border: 3px solid #4E7C50;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Btn(){
  return(
    <BtnDiv>
      <Link to='/'>
        <InteractionDiv>
          <Text $color={'#fff'} $fontSize={4}>무료로 하러가기 {">"}</Text>
        </InteractionDiv>
      </Link>
    </BtnDiv>
  )
}

export default Btn