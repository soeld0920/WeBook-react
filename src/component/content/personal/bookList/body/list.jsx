import React from "react";
import styled from "styled-components";
import { usePersonalBooksContext } from "../../../../../context/personal";
import Book from "../../../../source/book";

const ListUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

function List(){
  const {personalBooks} = usePersonalBooksContext()
  return(
    <ListUl>
      {personalBooks.map((book) => <Book book={book} key={book.id}/>)}
    </ListUl>
  )
}

export default List