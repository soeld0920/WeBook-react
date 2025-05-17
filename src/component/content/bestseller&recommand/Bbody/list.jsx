import React from "react";
import styled from "styled-components";
import GradeBook from "./book";
import { useBARContext } from "../../../../context/BAR";

const ListUl = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 50px;
`

function List(){
  const {bestsellerBooks, selectedCategory} = useBARContext()
  const books = bestsellerBooks.filter(book => selectedCategory === 'all' ? book.id <= 10 : book.filterType === selectedCategory)
  for(let i = 1; i <= 10; i++){
    books[i-1].grade = i
  }
  return(
    <ListUl>
      {books.map((book) => <GradeBook book={book} key={book.id}/>)}
    </ListUl>
    
  )
}

export default List