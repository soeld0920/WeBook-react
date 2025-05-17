import React from "react";
import Book from "../../../source/book";
import styled from "styled-components";
import { Text } from "../../../source/text";

const GradeBookLi = styled.li`
  width: 210px;
  height: 325px;
  position: relative;
`

const GradeDiv = styled.div`
  width: 210px;
  height: 25px;
  display: flex;
  justify-content: space-between;
`

const GradeBox = styled.div`
  width:25px;
  height: 25px;
  background-color: ${({$grade}) => $grade === 1 ? '#32CD32' : '#aaa'};
  border-radius: 12.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function GradeBook({book}){
  return(
    <GradeBookLi>
      <Grade book={book}/>
      <Book as={'div'} book={book} $height={'300px'}/>
    </GradeBookLi>
  )
}



function Grade({book}){
  let GradeStatus

  if(book.status === 'up'){
    GradeStatus = (
      <Text $color={'#f33'} $fontSize={5}>
        {book.statusValue} ▲
      </Text>
    )
  }else if(book.status === 'new'){
    GradeStatus = (
      <Text $color={'#f33'} $fontSize={5} >
        new
      </Text>
    )
  }else if(book.status === 'down'){
    GradeStatus = (
      <Text $color={'#33f'} $fontSize={5} >
        {book.statusValue} ▼
      </Text>
    )
  }else{
    GradeStatus = (<></>)
  }
  return(
    <GradeDiv>
      <GradeBox $grade={book.grade}>
        <Text $color={'#fff'} $fontSize={3} $fontWeight={700}>{book.grade}</Text>
      </GradeBox>
      {GradeStatus}
    </GradeDiv>
  )
}

export default GradeBook