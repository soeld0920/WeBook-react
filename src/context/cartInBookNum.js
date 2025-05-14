import React, { createContext, useContext, useRef } from "react"

const CartInBookNumContext = createContext()

export function CartInBookNumProvider({children}){
  const cartInBookNum = useRef(0);
  return(
    <CartInBookNumContext.Provider value={cartInBookNum}>
      {children}
    </CartInBookNumContext.Provider>
  )
}

export function useCartInBookNum(){
  const context = useContext(CartInBookNumContext)
  if(!context){
    throw new Error('useCartInBookNum Error')
  }
  return context
}