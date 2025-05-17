import React from "react";
import styled from "styled-components";
import { Text } from "../../../source/text";


const TrendingGradeDiv = styled.div`
  width: 25px;
  height: 25px;
  background-color: #A0522D;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`

function TrendingGrade({book}){
  return(
    <>
      <TrendingGradeDiv>
        <Text $fontSize={2} $color={'#fff'}>{book.id}</Text>
      </TrendingGradeDiv>
    </>
  )
}

export default TrendingGrade