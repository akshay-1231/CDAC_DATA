import React, { useRef } from "react";

export default function Login(){
    let x1=useRef();
    let x2=useRef();
    let x3=useRef();
    function f1(){
       // alert("Login");
     //  console.log(x1);
      // console.log(x2);

     //  console.log(x1.current.value);
       var data={
        name:x1.current.value,
        age:x2.current.value,
        place:x3.current.value,
       };
       console.log(data);
       data=JSON.stringify(data);
      // console.log(data);
      fetch("http://localhost:9000/users",{
       method:"Post",
       body:data,
       headers:{"content-type":"application/json"}
      })
      .then(function(result){
          console.log(result);
      })
      .catch(function(err){
          console.log(err);
      });
    }
    return(
        <div className="container">
            <h1>Login Form</h1>
            <input type="text" ref={x1}/>
            <br/>
            <input type="text" ref={x2}/>
            <br/>
            <input type="text" ref={x3}/>
            <br/>
          <button onClick={f1}>Login</button>  
          <p></p>
          <p></p>
           
        </div>
    );
}