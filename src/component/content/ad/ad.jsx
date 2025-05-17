import React from "react";
import Inner from "../../source/inner";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AdSection = styled.section`
  width: 100%;
  height: 100px;
  background-color: blue;
`

function Ad(){
  return(
    <AdSection>
      <Inner>
        <Link to='/' style={{display:'block', width:'100%', height:'100%'}}>
          <img src="/images/ad-banner-2.jpg" alt="광고" style={{display:'block',height:'100%', margin:'0 auto'}}/>
        </Link>
      </Inner>
    </AdSection>
  )
}

export default Ad