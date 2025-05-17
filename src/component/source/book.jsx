import React from "react";
import { Text, TitleText } from "./text";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BookDiv = styled.div`
  width: 210px;
  height: ${({$height}) => $height || '100%'};
  position: relative;
`

function Book({book, as='li',$height}){
  return(
    <BookDiv as={as} $height={$height}>
      <Link to='/'>
        <img src={book.url} alt="" style={{display:'block',height:'230px',margin:'0 auto'}}/>
        <TitleText as={'h4'} $fontSize={2} $overflow={true} style={{marginTop:'10px'}}>{book.title}</TitleText>
        <p style={{position:'absolute', bottom:'0'}}>
          <Text $fontSize={4} $color={'#aaa'}>{book.category}</Text><br/>
          <Text $fontSize={4} $color={'#aaa'}>{book.author} · {book.publish}</Text>
        </p>
      </Link>
    </BookDiv>
  )
}

export default Book