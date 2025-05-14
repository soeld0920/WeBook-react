import React from "react";
import { TrendingBooksProvider } from "./trendingBooks";
import { CartInBookNumProvider } from "./cartInBookNum";
import { SearchCategoryProvider } from "./searchCategory";
import { ImagePageNumProvider } from "./imagePageNum";


export function Provider({children}){
  return(
    <TrendingBooksProvider>
      <CartInBookNumProvider>
        <SearchCategoryProvider>
          <ImagePageNumProvider>
            {children}
          </ImagePageNumProvider>
        </SearchCategoryProvider>
      </CartInBookNumProvider>
    </TrendingBooksProvider>
  )
}
