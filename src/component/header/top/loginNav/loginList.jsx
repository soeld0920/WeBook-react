import React from "react";
import { useCartInBookNum } from "../../../../context/cartInBookNum";
import styled from "styled-components";
import { LinkText} from "../../../source/text";

const loginNavList = [
  {
    id : 1,
    text : '로그인',
    url : '/login'
  },
  {
    id : 2,
    text : '회원가입',
    url : '/join'
  },
  {
    id : 3,
    text : '마이페이지',
    url : '/myPage'
  },
  {
    id : 4,
    text : '고객센터',
    url : '/support'
  },
  {
    id : 5,
    url : '/cart'
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
  const cartInBookNum = useCartInBookNum()
  return(
    loginNavList.map(loginNav => (
      <LoginLi key={loginNav.id}>
        <LinkText to={loginNav.url} $fontSize={3}>
          {loginNav.id === 5 ? `장바구니(${cartInBookNum.current})` : loginNav.text}
        </LinkText>
      </LoginLi>
    ))
  )
}

export default LoginList