import React, { createContext, useContext } from "react"

const categorys = [
  {
    id : 1,
    category : '통합검색',
    selected : true
  },
  {
    id : 2,
    category : '국내도서',
    selected : false
  },
  {
    id : 3,
    category : '외국도서',
    selected : false
  },
  {
    id : 4,
    category : 'e-book',
    selected : false
  },
  {
    id : 5,
    category : '중고거래',
    selected : false
  },
  {
    id : 6,
    category : '티켓',
    selected : false
  },
  {
    id : 7,
    category : '문구/Gift',
    selected : false
  },
  {
    id : 8,
    category : '음반/블루레이',
    selected : false
  },
  {
    id : 9,
    category : '굿즈',
    selected : false
  }
]

export const SearchCategoryContext = createContext()

export function SearchCategoryProvider({children}){
  return(
    <SearchCategoryContext.Provider value={categorys}>
      {children}
    </SearchCategoryContext.Provider>
  )
}

export function useSearchCategory(){
  const context = useContext(SearchCategoryContext)
  if(!context){
    throw new Error('SearchCategoryContext Error')
  }
  return context
}