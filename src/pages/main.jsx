import React from "react";
import Header from "../component/header";
import {Provider} from '../context/context'
import MainImg from "../component/mainImg/mainImg";

function Main(){
  return(
    <Provider>
      <Header/>
      <MainImg/>
    </Provider>
  )
}

export default Main