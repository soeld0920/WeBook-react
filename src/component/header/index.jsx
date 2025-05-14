import React from "react";
import Top from "./top/top"
import Mid from "./mid/mid";
import Bot from "./bottom/bot";

function Header(){
  return(
    <header>
      <Top/>
      <Mid/>
      <Bot/>
    </header>
  )
}

export default Header;