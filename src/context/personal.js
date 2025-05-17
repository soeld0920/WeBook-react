import React, { createContext, useContext } from "react"

const personalBooks = [
  {
    id: 1,
    title: '모모',
    category : '판타지, 철학 소설',
    author: '미하엘 엔데',
    publish : '비룡소',
    url : '/images/book-sample-5.1.png'
  },
  {
    id: 2,
    title: '나는 매주 시체를 보러 간다',
    category: '에세이',
    author: '유성호',
    publish: '21세기북스',
    url : '/images/book-sample-5.2.png'
  },
  {
    id: 3,
    title: '기분을 관리하면 인생이 관리된다.',
    category: '심리학, 자기계발',
    author: '스티븐 그로스',
    publish: '흐름출판',
    url : '/images/book-sample-5.3.png'
  },
  {
    id: 4,
    title: '기분을 관리하면 인생이 관리된다.',
    category: '심리학, 자기계발',
    author: '스티븐 그로스',
    publish: '흐름출판',
    url : '/images/book-sample-5.3.png'
  }
]

const PersonalBooksContext = createContext()

export function PersonalBooksProvider({children}){
  return(
    <PersonalBooksContext.Provider value={{personalBooks}}>
      {children}
    </PersonalBooksContext.Provider>
  )
}

export function usePersonalBooksContext(){
  const context = useContext(PersonalBooksContext)
  if(!context){
    throw new Error('usePersonalBooksContext Error')
  }
  return context
}