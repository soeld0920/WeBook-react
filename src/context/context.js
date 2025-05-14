import React from "react";
import { TrendingBooksProvider } from "./trendingBooks";
import { CartInBookNumProvider } from "./cartInBookNum";
import { SearchCategoryProvider } from "./searchCategory";


export function Provider({children}){
  return(
    <TrendingBooksProvider>
      <CartInBookNumProvider>
        <SearchCategoryProvider>
          {children}
        </SearchCategoryProvider>
      </CartInBookNumProvider>
    </TrendingBooksProvider>
  )
}
