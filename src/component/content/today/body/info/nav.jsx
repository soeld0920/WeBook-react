import React from "react";
import styled from "styled-components";
import { useTodayBooksContext } from "../../../../../context/todayBook";
import LinesEllipsis from "react-lines-ellipsis";

const NavUl = styled.ul`
  width: auto;
  height: 100%;
  display: flex;
  gap: 60px;
`

const NavLi = styled.li`
  width: 160px;
  height: 100%;
  position: relative;
  border: ${({$selected}) => $selected && '5px solid #8B4513'};
  border-radius: 10px;
  box-sizing: border-box;
`

const NavButton = styled.button`
  all: unset;
  cursor: pointer;
`


function Nav(){
  const {todayBooks,todayBookNum} = useTodayBooksContext()
  return(
    <NavUl>
      {
        todayBooks.map((book) => (
          <NavItem book={book} key={book.id} selected={todayBookNum + 1 === book.id} id={book.id}/>
        ))
      }
    </NavUl>
  )
}

function NavItem({book, selected, id}){
  const {setTodayBookNum} = useTodayBooksContext()
  return(
    <NavLi $selected={selected}>
      <NavButton onClick={() => setTodayBookNum(id-1)}>
        <img src={book.url} alt="" style={{width:'100%'}}/>
        <LinesEllipsis 
        text={book.title} 
        maxLine="2" 
        ellipsis="..." 
        trimRight 
        basedOn="letters" 
        style={{
          color: '#333',
          width: '150px',
          fontSize: '20px',
          fontWeight: '700',
          marginTop: '5px',
          position: 'absolute',
          bottom: '5px'}}/>
      </NavButton>
    </NavLi>
  )
}


export default Nav