import React from "react";
import styled from "styled-components";
import { useTodayBooksContext } from "../../../../../context/todayBook";
import TextArea from "./textArea";
import Btn from "./btn";

const ListDiv = styled.div`
  width: 640px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

function List(){
  const {todayBooks,todayBookNum} = useTodayBooksContext()
  const selectedBook = todayBooks.filter(book => book.id-1 === todayBookNum)[0]
  return(
    <ListDiv>
      <img src={selectedBook.url} alt="todayBook" style={{width:'210px'}}/>
      <TextArea book={selectedBook}/>
      <Btn/>
    </ListDiv>
  )
}

export default List