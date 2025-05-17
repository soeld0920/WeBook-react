import React from "react";
import styled from "styled-components";
import Book from "../../../source/book";
import { useNewBooksContext } from "../../../../context/newBook";

const ListUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

function List(){
  const {newBooks} = useNewBooksContext()
  return(
    <ListUl>
      {newBooks.map((book) => <Book book={book} key={book.id}/>)}
    </ListUl>
  )
}

export default List