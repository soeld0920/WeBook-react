import React, { createContext, useContext, useState } from "react"

const Images = [
  {id : 1, url : '/images/main-img1.png', bgcolor:'#FEF3E0'},
  {id : 2, url : '/images/main-img2.png', bgcolor:'#007C82'},
  {id : 3, url : '/images/main-img3.png', bgcolor:'#CEF8AD'},
  {id : 4, url : '/images/main-img4.png', bgcolor:'#FFF7E7'},
  {id : 5, url : '/images/main-img5.png', bgcolor:'#7156A2'},
  {id : 6, url : '/images/main-img6.png', bgcolor:'#FFA963'},
]

const ImagePageNumContext = createContext()
const ImageContext = createContext()

export function ImagePageNumProvider({children}){
  const [imagePageNum, setImagePageNum] = useState(0);
  return(
    <ImagePageNumContext.Provider value={{imagePageNum, setImagePageNum}}>
      <ImageContext.Provider value={Images}>
        {children}
      </ImageContext.Provider>
    </ImagePageNumContext.Provider>
  )
}

export function useImagePageNum(){
  const context = useContext(ImagePageNumContext)
  if(!context){
    throw new Error('useImagePageNum Error')
  }
  return context
}

export function useImage(){
  const context = useContext(ImageContext)
  if(!context){
    throw new Error('useImage Error')
  }
  return context
}