import React from "react";
import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";
import Product from "./Product";
import {Outlet} from "react-router-dom";

function App(){
    return(
        <>
       <Header/>
       <Outlet/>
       <Footer/>
       </>
    )
}

export default App;