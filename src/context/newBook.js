import React, { createContext, useContext } from "react"

const newBooks = [
  {
    id: 1,
    title: '당신이 꽃이라면 나는 봄이었을까',
    category: '에세이',
    author: '하현',
    publish: '위즈덤하우스',
    url: '/images/book-sample-3.1.png'
  },
  {
    id: 2,
    title: '자기 결정의 힘',
    category: '심리학',
    author: '에드워드 데시',
    publish: '학지사',
    url: '/images/book-sample-3.2.png'
  },
  {
    id: 3,
    title: '인공지능의 미래',
    category: '기술',
    author: '닉 보스트롬',
    publish: '동아시아',
    url: '/images/book-sample-3.3.png'
  },
  {
    id: 4,
    title: '시간을 파는 상점',
    category: '청소년 문학',
    author: '김선영',
    publish: '자음과모음',
    url: '/images/book-sample-3.4.png'
  },
  {
    id: 5,
    title: '소크라테스 익스프레스',
    category: '철학',
    author: '에릭 와이너',
    publish: '어크로스',
    url: '/images/book-sample-3.5.png'
  }
];

export const NewBooksContext = createContext()

export function NewBooksProvider({children}){
  return(
    <NewBooksContext.Provider value={{newBooks}}>
      {children}
    </NewBooksContext.Provider>
  )
}

export function useNewBooksContext(){
  const context = useContext(NewBooksContext)
  if(!context){
    throw new Error('useNewBooksContext Error')
  }
  return context
}