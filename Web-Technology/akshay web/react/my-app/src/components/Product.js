import React from "react";

export default function Product(props){
    console.log(props);
    function f1(){
        //alert ("clicked");
        props.price=2000;
    }
    return <div>
       <h2>
        {props.price}
       </h2>
       <p>{props.name}</p>
       <button onClick={f1}>Add to Cart</button>
        
        </div>;
}
