import React, { useEffect, useRef, useState } from "react";
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
  const {images, imagePageNum, setImagePageNum, setIsSliding, isSliding} = useImage()
  const [transition, setTransition] = useState(true)
  const autoMove = useRef(null)
  const newImage = [{...images[images.length - 1], id : 0}, ...images ,{...images[0], id : images.length + 1}]

  useEffect(() => {
    let t1;
    if(imagePageNum === 0 | imagePageNum === images.length + 1){
      t1 = setTimeout(() => {
        setTransition(false);setImagePageNum(imagePageNum === 0 ? images.length : 1)
        setTimeout(() => {setTransition(true);setIsSliding(false)},100)
      },500)
    }else{
      t1 = setTimeout(() => setIsSliding(false),600)

    }

    return () => {
      clearTimeout(t1);
    };
    
    },[imagePageNum, images, setImagePageNum, setIsSliding])
  
  useEffect(() => {
    if (isSliding) {
      clearInterval(autoMove.current);
      return;
    }
  
    autoMove.current = setInterval(() => {
      setImagePageNum(prev => prev + 1);
      setIsSliding(true);
    }, 3500);
  
    return () => clearInterval(autoMove.current);
  }, [isSliding, setImagePageNum, setIsSliding]);

  return(
    <ImageUl $images={images} $imagePageNum={imagePageNum} $transition={transition}>
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