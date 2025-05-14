import React, { createContext, useContext } from "react"

const trendingBooks = [
  {
    id : 1,
    title : '파친코'
  },
  {
    id : 2,
    title : '달러구트 꿈 백화점'
  },
  {
    id : 3,
    title : '지구 끝의 온실'
  },
  {
    id : 4,
    title : '아몬드'
  },
  {
    id : 5,
    title : '불편한 편의점'
  },
  {
    id : 6,
    title : '소크라테스 익스프레스'
  },
  {
    id : 7,
    title : '미드나잇 라이브러리'
  },
  {
    id : 8,
    title : '부의 대이동'
  },
  {
    id : 9,
    title : '인생은 실전이다'
  },
  {
    id : 10,
    title : '트랜드 코리아 2025'
  },
]

export const TrendingBooksContext = createContext()

export function TrendingBooksProvider({children}){
  return(
    <TrendingBooksContext.Provider value={trendingBooks}>
      {children}
    </TrendingBooksContext.Provider>
  )
}

export function useTrendingBooks(){
  const context = useContext(TrendingBooksContext)
  if(!context){
    throw new Error('TrendingBooksContext Error')
  }
  return context
}