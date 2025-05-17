import React from "react";
import styled from "styled-components";
import { useFeatureBooksContext } from "../../../../context/featureBook";
import Book from "../../../source/book";

const ListUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

function List(){
  const {featureBooks} = useFeatureBooksContext()
  return(
    <ListUl>
      {featureBooks.map((book) => <Book book={book} key={book.id}/>)}
    </ListUl>
  )
}

export default List