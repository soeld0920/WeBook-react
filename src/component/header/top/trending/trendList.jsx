import React from "react";
import styled from "styled-components";
import TrendingGrade from "./gradeBox";
import { useTrendingBooks } from "../../../../context/trendingBooks";
import { Text } from "../../../source/text";

const TrendingLi = styled.li`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`

function TrendingList(){
  const books = useTrendingBooks()
  return(
    books.map(
      book => (
        <TrendingLi key={book.id}>
          <TrendingGrade book={book}/>
          <Text $fontSize={3}>{book.title}</Text>
        </TrendingLi>
      )
    )
  )
}

export default TrendingList