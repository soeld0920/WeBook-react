import React from "react";
import styled from "styled-components";
import TrendingList from "./trendList";

const TrendingDiv = styled.div`
  width: 250px;
  height: 30px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`

const TrendingUl = styled.ul`
  width: 200px;
  height: 300px;
  transition: all 0.5s ease;
  transform: translateY(0px);
`

const ShowBtn = styled.button`
  width: 50px;
  height: 100%;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  color: #A0522D;
`

function Trending(){
  return(
    <TrendingDiv>
      <TrendingUl>
        <TrendingList/>
      </TrendingUl>
      <ShowBtn>▼</ShowBtn>
    </TrendingDiv>
  )
}

export default Trending;