import React from "react";
import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";

const BtnButton = styled.button`
  width: 60px;
  height: 100%;
  background-color: #32CD32;
  border: none;
  border-top-right-radius : 5px;
  border-bottom-right-radius : 5px;
  cursor: pointer;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Btn(){
  return(
    <BtnButton>
      <IoMdSearch/>
    </BtnButton>
  )
}

export default Btn