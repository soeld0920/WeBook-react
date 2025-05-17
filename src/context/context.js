import React from "react";
import { TrendingBooksProvider } from "./trendingBooks";
import { CartInBookNumProvider } from "./cartInBookNum";
import { SearchCategoryProvider } from "./searchCategory";
import { ImageProvider } from "./image";
import { TodayBooksProvider } from "./todayBook";
import { FeatureBooksProvider } from "./featureBook";
import { NewBooksProvider } from "./newBook";
import { BARProvider } from "./BAR";
import { PersonalBooksProvider } from "./personal";
import { AuthorProvider } from "./author";


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
                    <PersonalBooksProvider>
                      <AuthorProvider>
                        {children}
                      </AuthorProvider>
                    </PersonalBooksProvider>
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
