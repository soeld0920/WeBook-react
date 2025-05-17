import React from "react";
import styled from "styled-components";

const ImgDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Img(){
  return(
    <ImgDiv>
      <img src="/images/test-img.png" alt="TestImg" style={{width:'100%'}}/>
    </ImgDiv>
  )
}

export default Img