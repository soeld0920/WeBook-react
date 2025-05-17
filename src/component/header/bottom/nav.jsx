import React from "react";
import styled from "styled-components";
import { LinkText, Text } from "../../source/text";

const NavUl = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
`

const NavLi = styled.li`
  margin: 0px 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CategoryDiv = styled(NavLi)`
  width: 110px;
  background-color: #8b4513;
  margin: 0px;
  cursor: pointer;
`

const navList = [
  {id : 1,text : '분야보기',type : 'category'},
  {id : 2,text : '베스트상품',type : 'main',path : '/bestSeller'},
  {id : 3,text : '신상품',type : 'main',path : '/newBooks'},
  {id : 4,text : '이벤트',type : 'main',path : '/event'},
  {id : 5,text : '만남의공간',type : 'main',path : '/author'},
  {id : 6,text : '개인맞춤독서',type : 'sub',path : '/personal'},
  {id : 7,text : '이달의특가',type : 'sub',path : '/hotDeal'},
  {id : 8,text : '바로펀딩',type : 'sub',path : '/fund'}
]

function Nav(){
  return(
    <nav style={{height:'100%'}}>
      <NavUl>
        {navList.map(
          (nav) => {

            if(nav.type === 'category'){
              return(
                <CategoryDiv key={nav.id}>
                  <Text $color={"#fff"} $fontSize={2} $fontWeight={700}>
                    {nav.text}
                  </Text>
                </CategoryDiv>
              )
            }

            return(
              <NavLi key={nav.id}>
                <LinkText $color={nav.type==='main' ? "#8b4513" : "#333"} $fontWeight={700} $fontSize={2} to={nav.path}>
                  {nav.text}
                </LinkText>
              </NavLi>
            )
          }
          )
        }
      </NavUl>
    </nav>
  )
}

export default Nav