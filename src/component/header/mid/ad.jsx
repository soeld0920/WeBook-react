import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AdDiv = styled.div`
  width: 250px;
  margin-left: auto;
`

function Ad(){
  return(
    <AdDiv>
      <Link to={'/event'}><img src="/images/ad-banner-1.png" alt="ad" style={{width: '100%'}}/></Link>
    </AdDiv>
  )}

export default Ad