import React from "react";
import styled from "styled-components";
import Head from "./head";
import Body from "./body/body";

const ListDiv = styled.div`
  width: 950px;
  height: 100%;
`

function List(){
  return(
    <ListDiv>
      <Head/>
      <Body/>
    </ListDiv>
  )
}

export default List