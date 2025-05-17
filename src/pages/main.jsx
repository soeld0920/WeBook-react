import React from "react";
import Header from "../component/header";
import {Provider} from '../context/context'
import MainImg from "../component/mainImg/mainImg";
import Content from "../component/content/content";

function Main(){
  return(
    <Provider>
      <Header/>
      <MainImg/>
      <Content/>
    </Provider>
  )
}

export default Main