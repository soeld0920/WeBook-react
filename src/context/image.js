import React, { createContext, useContext, useState } from "react"

const images = [
  {id : 1, url : '/images/main-img1.png', bgcolor:'#FEF3E0'},
  {id : 2, url : '/images/main-img2.png', bgcolor:'#007C82'},
  {id : 3, url : '/images/main-img3.png', bgcolor:'#CEF8AD'},
  {id : 4, url : '/images/main-img4.png', bgcolor:'#FFF7E7'},
  {id : 5, url : '/images/main-img5.png', bgcolor:'#7156A2'},
  {id : 6, url : '/images/main-img6.png', bgcolor:'#FFA963'},
]

const ImageContext = createContext()

export function ImageProvider({children}){
  const [imagePageNum, setImagePageNum] = useState(1);
  const [isSliding,setIsSliding] = useState(false)
  return(
    <ImageContext.Provider value={
      {
        imagePageNum, setImagePageNum,
        images,
        isSliding, setIsSliding
      }
    }>
        {children}
    </ImageContext.Provider>
  )
}

export function useImage(){
  const context = useContext(ImageContext)
  if(!context){
    throw new Error('useImage Error')
  }
  return context
}