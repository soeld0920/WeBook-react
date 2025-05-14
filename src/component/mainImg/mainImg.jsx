import React from "react";
import Image from "./image";
import Indication from "./indication/indication";
import { PrepBtn, NextBtn } from "./btn";

function MainImg(){
  return(
    <section style={{position: 'relative', overflow : 'hidden'}}>
      <PrepBtn/>
      <Image/>
      <Indication/>
      <NextBtn/>
    </section>
  )
}

export default MainImg