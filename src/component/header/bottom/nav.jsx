import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUl = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
`

const NavLi = styled.li`
  margin: 0px 10px;
  height: 100%;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  &.category{
    width: 110px;
    background-color: #8b4513;
    color: #fff;
    margin: 0px;
    cursor: pointer;
  }

  &.main{
    color: #8b4513;
  }

  &.sub{
    color: #333;
  }
`

const navList = [
  {id : 1,text : '분야보기',class : 'category'},
  {id : 2,text : '베스트상품',class : 'main',path : '/bestSeller'},
  {id : 3,text : '신상품',class : 'main',path : '/newBooks'},
  {id : 4,text : '이벤트',class : 'main',path : '/event'},
  {id : 5,text : '만남의공간',class : 'main',path : '/author'},
  {id : 6,text : '개인맞춤독서',class : 'sub',path : '/personal'},
  {id : 7,text : '이달의특가',class : 'sub',path : '/hotDeal'},
  {id : 8,text : '바로펀딩',class : 'sub',path : '/fund'}
]

function Nav(){
  return(
    <nav style={{height:'100%'}}>
      <NavUl>
        {navList.map(nav => 
          <NavLi className={nav.class} key={nav.id}>
            {nav.path !== undefined ? <Link to={nav.path}>{nav.text}</Link> : <>{nav.text}</>}
          </NavLi>
        )}
      </NavUl>
    </nav>
  )
}

export default Nav