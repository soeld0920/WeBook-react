import React from "react";
import { TrendingBooksProvider } from "./trendingBooks";
import { CartInBookNumProvider } from "./cartInBookNum";
import { SearchCategoryProvider } from "./searchCategory";
import { ImageProvider } from "./image";
import { TodayBooksProvider } from "./todayBook";
import { FeatureBooksProvider } from "./featureBook";
import { NewBooksProvider } from "./newBook";
import { BARProvider } from "./BAR";


export function Provider({children}){
  return(
    <TrendingBooksProvider>
      <CartInBookNumProvider>
        <SearchCategoryProvider>
          <ImageProvider>
            <TodayBooksProvider>
              <FeatureBooksProvider>
                <NewBooksProvider>
                  <BARProvider>
                    {children}
                  </BARProvider>
                </NewBooksProvider>
              </FeatureBooksProvider>
            </TodayBooksProvider>
          </ImageProvider>
        </SearchCategoryProvider>
      </CartInBookNumProvider>
    </TrendingBooksProvider>
  )
}
