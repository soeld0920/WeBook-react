import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useImage, useImagePageNum } from "../../context/imagePageNum";

const ImageUl = styled.ul`
  width: ${({$images}) => `${$images.length}00vw`};
  height: 420px;
  display:flex;
  transform: ${({$imagePageNum}) => `translateX(-${$imagePageNum}00vw)`};
  transition: all 0.5s ease;
`

const ImageLi = styled.li`
  width: 100vw;
  height: 100%;
  background-color: ${({$bgcolor}) => $bgcolor};
  display: flex;
  justify-content: center;
`

const ImageDiv = styled.div`
  width: 1200px;
  height: 100%;
`

function Image(){
  const images = useImage()
  const {imagePageNum} = useImagePageNum()
  return(
    <ImageUl $images={images} $imagePageNum={imagePageNum}>
      {images.map(image => (
        <ImageLi key={image.id} $bgcolor={image.bgcolor}>
          <ImageDiv>
            <Link to='/event'>
              <img src={image.url} alt="이벤트사진" style={{display : 'block',height : '100%', margin : '0 auto'}}/>
            </Link>
          </ImageDiv>
        </ImageLi>
      ))}
    </ImageUl>
  )
}

export default Image