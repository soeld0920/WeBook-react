import React from "react";
import { LinkText } from "../../source/text";

function Ad(){
  return(
    <LinkText to='/event' $fontSize={4} $fontWeight={700} $color={'#777'}>
      신학기 기념 20-80% 특가!
    </LinkText>
  )
}

export default Ad