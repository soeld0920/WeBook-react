import React from "react";
import styled from "styled-components";


const TrendingGradeDiv = styled.div`
  width: 25px;
  height: 25px;
  background-color: #A0522D;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`

function TrendingGrade({book}){
  return(
    <>
      <TrendingGradeDiv>
        {book.id}
      </TrendingGradeDiv>
    </>
  )
}

export default TrendingGrade