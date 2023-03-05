import React from "react";
import { ItemsProvider } from "./components/Main/Cart/itemsContext.jsx";
import Main from "./main.jsx";



export default function App(){

  return(

    <ItemsProvider>
    <Main />
    </ItemsProvider>
  )
}