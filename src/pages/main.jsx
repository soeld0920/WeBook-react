import React from "react";
import Header from "../component/header";
import {Provider} from '../context/context'

function Main(){
  return(
    <Provider>
      <Header/>
    </Provider>
  )
}

export default Main