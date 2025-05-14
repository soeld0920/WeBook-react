import React from "react";
import { useSearchCategory } from "../../../../context/searchCategory";
import styled from "styled-components";

const CategoryDiv = styled.div`
  width: 140px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CategorySpan = styled.span`
  font-size: 16px;
  margin-left: 20px;
`

const CategoryBtn = styled.button`
  border: none;
  background: none;
  font-size: 15px;
  cursor: pointer;
  margin-right: 20px;
`

function Category(){
  const categorys = useSearchCategory()
  return(
    <CategoryDiv>
      <CategorySpan>{categorys.map(category => category.selected && category.category)}</CategorySpan>
      <CategoryBtn>▼</CategoryBtn>
    </CategoryDiv>
  )
}

export default Category