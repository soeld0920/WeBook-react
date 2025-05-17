import React, { createContext, useContext, useState } from "react"

const lives = [
  {
    id: 1,
    title: '김철수 작가와 함께하는 저녁',
    subtitle : '23년 베스트셀러 "가로수"의 저자와 함께하는 저녁의 양식',
    url : 'https://www.youtube.com/embed/CoyQM_Zi0OM?si=ntQuezRX-bCRjO_9'
  },
  {
    id: 2,
    title: '이서현 작가의 신작 발표회',
    subtitle: '독특한 세계관으로 사랑받는 "달의 바다" 저자의 새로운 이야기 공개',
    url: 'https://www.youtube.com/embed/45RO15LzmjI?si=nveKAWSNVkeHGMpw'
  },
  {
    id: 3,
    title: '박상욱 기자의 기후 토크 라이브',
    subtitle: '뉴스에서 못다한 이야기, 기후 위기와 우리의 내일',
    url: 'https://www.youtube.com/embed/zvhzOby6c4g?si=F12UR242G_lzy0r9'
  }
]

const snss=[
  {
    id: 1,
    author: '정민우',
    authorUrl:'/images/author1.png',
    title:'좋은 글이란',
    content:'오늘도 책상 앞에 앉아 조용히 생각했다. 좋은 글은 결국, 내가 아닌 누군가의 마음을 먼저 안아주는 글이어야 한다는 것을. 🍃 #글쓰기 #작가일상'
  },
  {
    id: 2,
    author: '서하늘',
    authorUrl: '/images/author2.png',
    title: '영감의 순간',
    content: '아이 한 명이 책장을 넘기는 소리를 들으며 떠올랐다. 진짜 이야기는 거기서부터 시작된다는 것을. 📖✨ #창작노트 #일상의순간'
  },
  {
    id: 3,
    author: '이도윤',
    authorUrl: '/images/author3.png',
    title: '문장의 무게',
    content: '가벼운 단어 하나가 누군가에겐 무거운 하루를 가볍게 만든다. 그래서 한 글자도 쉽게 쓰지 않는다. ✍️ #작가의다짐 #글의힘'
  }
]

export const AuthorContext = createContext()

export function AuthorProvider({children}){
  const [selectedSnsNum, setSelectedSnsNum] = useState(1)
  const [isSliding, setIsSliding] = useState(false)
  return(
    <AuthorContext.Provider value={{lives, snss, selectedSnsNum, setSelectedSnsNum, isSliding, setIsSliding}}>
      {children}
    </AuthorContext.Provider>
  )
}

export function useAuthorContext(){
  const context = useContext(AuthorContext)
  if(!context){
    throw new Error('useAuthorContext Error')
  }
  return context
}