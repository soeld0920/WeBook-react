import React from "react";
import { TrendingBooksProvider } from "./trendingBooks";
import { CartInBookNumProvider } from "./cartInBookNum";
import { SearchCategoryProvider } from "./searchCategory";
import { ImageProvider } from "./image";


export function Provider({children}){
  return(
    <TrendingBooksProvider>
      <CartInBookNumProvider>
        <SearchCategoryProvider>
          <ImageProvider>
            {children}
          </ImageProvider>
        </SearchCategoryProvider>
      </CartInBookNumProvider>
    </TrendingBooksProvider>
  )
}
