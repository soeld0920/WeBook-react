import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useImage } from "../../context/image";

const ImageUl = styled.ul`
  width: ${({$images}) => `${$images.length + 2}00vw`};
  height: 420px;
  display:flex;
  transform: ${({$imagePageNum}) => `translateX(-${$imagePageNum}00vw)`};
  transition: ${({$transition}) => $transition ? 'all 0.5s ease' : 'none'};
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
  const {images, imagePageNum, setImagePageNum} = useImage()
  const newImage = [{...images[images.length - 1], id : 0}, ...images ,{...images[0], id : images.length + 1}]

  useEffect(() => {
    if(imagePageNum === 0 | imagePageNum === images.length + 1){
      const timer1 = setTimeout(() => {setImagePageNum(imagePageNum === 0 ? images.length : 1)},500)
      const timer2 = setTimeout(() => {setImagePageNum(imagePageNum === 0 ? images.length : 1)},500)
    }
  },[imagePageNum, images, setImagePageNum])
  

  return(
    <ImageUl $images={images} $imagePageNum={imagePageNum} $transition={true}>
      {newImage.map(image => (
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