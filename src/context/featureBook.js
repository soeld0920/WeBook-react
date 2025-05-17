import React, { createContext, useContext } from "react"

const featureBooks = [
  {
    id: 1,
    title: '트랜드 코리아 2025',
    category : '경제',
    author: '김난도',
    publish : '미래의 창',
    url : '/images/book-sample-2.1.png'
  },
  {
    id: 2,
    title: '지적 대화를 위한 넓고 얕은 지식',
    category: '인문',
    author: '채사장',
    publish: '웨일북',
    url : '/images/book-sample-2.2.png'
  },
  {
    id: 3,
    title: '코스모스',
    category: '과학',
    author: '칼 세이건',
    publish: '사이언스북스',
    url : '/images/book-sample-2.3.png'
  },
  {
    id: 4,
    title: '데미안',
    category: '문학',
    author: '헤르만 헤세',
    publish: '민음사',
    url : '/images/book-sample-2.4.png'
  },
  {
    id: 5,
    title: '죽음에 관하여',
    category: '철학',
    author: '어빈 옐롬',
    publish: '정신세계사',
    url : '/images/book-sample-2.5.png'
  }
]

export const FeatureBooksContext = createContext()

export function FeatureBooksProvider({children}){
  return(
    <FeatureBooksContext.Provider value={{featureBooks}}>
      {children}
    </FeatureBooksContext.Provider>
  )
}

export function useFeatureBooksContext(){
  const context = useContext(FeatureBooksContext)
  if(!context){
    throw new Error('useFeatureBooksContext Error')
  }
  return context
}