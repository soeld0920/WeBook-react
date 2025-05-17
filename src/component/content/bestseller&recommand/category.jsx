import React from "react";
import { useBARContext } from "../../../context/BAR";
import styled from "styled-components";
import { Text } from "../../source/text";

const CategoryUl = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`

const CategoryLi = styled.li`
  width:75px;
  height: 25px;
  background-color: #64A764;
  opacity: ${({$selected}) => $selected ? '1' : '0.5'};
  border-radius: 12.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CategoryButton = styled.button`
  all:unset;
  cursor: pointer;
`

function CategoryNav(){
  const {selectedCategory, setSelectedCategory} = useBARContext()
  return(
    <CategoryUl>
      <Category onClick={() => setSelectedCategory('all')} selected={selectedCategory === 'all'}>전체</Category>
      <Category onClick={() => setSelectedCategory('domestic')} selected={selectedCategory === 'domestic'}>국내도서</Category>
      <Category onClick={() => setSelectedCategory('foreign')} selected={selectedCategory === 'foreign'}>외국도서</Category>
      <Category onClick={() => setSelectedCategory('e-book')} selected={selectedCategory === 'e-book'}>E-book</Category>
    </CategoryUl>
  )
}

function Category({children, onClick, selected}){
  return(
    <CategoryButton onClick={onClick}>
      <CategoryLi $selected={selected}>
        <Text $color={'#fff'} $fontSize={4}>
          {children}
        </Text>
      </CategoryLi>
    </CategoryButton>
  )
}

export default CategoryNav