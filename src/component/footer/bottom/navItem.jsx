import React from "react";
import styled from "styled-components";
import { LinkText } from "../../source/text";

const loginNavList = [
  {
    id : 1,
    text : '회사소개',
    url : '/'
  },
  {
    id : 2,
    text : '인재채용',
    url : '/'
  },
  {
    id : 3,
    text : '이용약관',
    url : '/'
  },
  {
    id : 4,
    text : '개인정보처리방침',
    url : '/'
  },
  {
    id : 5,
    text : '청소년보호정책',
    url : '/'
  },
  {
    id : 6,
    text : '도서홍보안내',
    url : '/'
  },
  {
    id : 7,
    text : '광고안내',
    url : '/'
  },
  {
    id : 8,
    text : '제휴안내',
    url : '/'
  },
  {
    id : 9,
    text : '복지제휴',
    url : '/'
  },
  {
    id : 10,
    text : '매장안내',
    url : '/'
  }
]

const LoginLi = styled.li`
  display: flex;
  &:after{
    content: '|';
    margin: 0px 5px;
  }
  &:last-child:after{
    content: '';
    margin: 0;
  }
`

function LoginList(){
  return(
    loginNavList.map(loginNav => (
      <LoginLi key={loginNav.id}>
        <LinkText to={loginNav.url} $fontSize={3}>
          {loginNav.text}
        </LinkText>
      </LoginLi>
    ))
  )
}

export default LoginList