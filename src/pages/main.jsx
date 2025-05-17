import React from "react";
import Header from "../component/header";
import {Provider} from '../context/context'
import MainImg from "../component/mainImg/mainImg";
import Content from "../component/content/content";
import Footer from "../component/footer/footer";

function Main(){
  return(
    <Provider>
      <Header/>
      <MainImg/>
      <Content/>
      <Footer/>
    </Provider>
  )
}

export default Main