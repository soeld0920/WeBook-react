import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AdP = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #777;
`

function Ad(){
  return(
    <AdP>
      <Link to='/event'>
        신학기 기념 20-80% 특가!
      </Link>
    </AdP>
  )
}

export default Ad