import React from "react";
import Product from "./Product";
function Contents(){
    return(
        <div className="container">
            <div class="row">
            <div className="col-xl-3">
                <Product name="Nike" price="1222"/>
                </div>
            <div className="col-xl-3">
                <Product name="puma" price="1234"/>
                </div>
            <div className="col-xl-3">
                <Product name="addidas" price="4344"/>
                </div>
            <div className="col-xl-3">
                <Product name="spark" price="544"/>
                </div>
            </div>   
        </div>
    ) 
}

export default Contents;