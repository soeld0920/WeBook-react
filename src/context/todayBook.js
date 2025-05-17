import React, { createContext, useContext, useState } from "react"

const todayBooks = [
  {
    id: 1,
    title: '완벽이라는 중독 : 불안한 완벽주의자를 위한 심리학',
    author: '토마스 커런',
    mainComment: '과도한 자기검열과 완벽주의에서의 탈피',
    subComment:
      '매사에 완벽해야 한다는 강박에 시달리며 끊임없이 자신을 몰아세운 적이 있는가? 현대인의 정신·육체적 과로의 근원에는 언제나 집착에 가까운 완벽주의가 자리하고 있다. 당신을 가둔 완벽주의라는 감옥에서 탈출하고 싶다면, 이 책에서 그 길을 찾아보자.',
    price: 15400,
    url: '/images/book-sample-1.1.png'
  },
  {
    id: 2,
    title: '나는 매주 시체를 보러 간다',
    author: '고석현',
    mainComment: '부검의가 말하는 죽음과 인간',
    subComment:
      '의학드라마보다 더 현실적인 법의학 이야기. 매주 시체와 마주하는 저자가 전하는 죽음의 기록 속에는 삶을 더 진하게 살아가기 위한 메시지가 담겨 있다.',
    price: 15800,
    url: '/images/book-sample-1.2.png'
  },
  {
    id: 3,
    title: '당신이 글을 쓰면 좋겠습니다',
    author: '이나경',
    mainComment: '마음을 꺼내는 글쓰기의 힘',
    subComment:
      '글을 쓰는 일은 곧 자신을 바라보는 일이다. 특별할 것 없는 일상 속에서도 단단하게 살아가려는 이들을 위한 따뜻한 글쓰기 안내서.',
    price: 14200,
    url: '/images/book-sample-1.3.png'
  },
  {
    id: 4,
    title: '식물처럼 살아가기',
    author: '최연우',
    mainComment: '식물의 시선으로 본 느린 삶의 가치',
    subComment:
      '빠르게 흘러가는 세상에서 멈추어 서서, 식물처럼 숨 쉬며 살아갈 수는 없을까? 자연과 함께 살아가는 태도에 대해 사유하는 따뜻한 에세이.',
    price: 13000,
    url: '/images/book-sample-1.4.png'
  },
  {
    id: 5,
    title: '잠들기 전 10분 철학',
    author: '이안 브래들리',
    mainComment: '하루의 끝에 던지는 작은 질문',
    subComment:
      '우리는 무엇을 위해 사는가? 잠들기 전 10분, 짧은 철학 한 구절이 당신의 사고를 흔들고 삶을 다시 정리하게 만든다.',
    price: 12000,
    url: '/images/book-sample-1.5.png'
  },
]

export const TodayBooksContext = createContext()

export function TodayBooksProvider({children}){
  const [todayBookNum, setTodayBookNum] = useState(0)
  return(
    <TodayBooksContext.Provider value={{todayBooks,todayBookNum,setTodayBookNum}}>
      {children}
    </TodayBooksContext.Provider>
  )
}

export function useTodayBooksContext(){
  const context = useContext(TodayBooksContext)
  if(!context){
    throw new Error('useTodayBooksContext Error')
  }
  return context
}