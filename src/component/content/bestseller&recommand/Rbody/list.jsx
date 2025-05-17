import React from "react";
import styled from "styled-components";
import { useBARContext } from "../../../../context/BAR";
import Book from "../../../source/book";

const ListUl = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 75px;
`

function List(){
  const {recommandBooks, selectedCategory} = useBARContext()
  const books = recommandBooks.filter(book => selectedCategory === 'all' ? book.id <= 10 : book.filterType === selectedCategory)
  return(
    <ListUl>
      {books.map((book) => <Book book={book} key={book.id} $height={'300px'}/>)}
    </ListUl>
    
  )
}

export default List