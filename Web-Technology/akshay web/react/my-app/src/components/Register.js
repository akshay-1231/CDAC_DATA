import React, { useEffect, useState } from "react";

export default function Register(){
    var[count,setcount]=useState(100);
    var[name,setname]=useState("akshay");

  //  useEffect(()=>{
      //  console.log("use effect",count,name);
   // });
    //when you visit component useeffect hook get called
    //if change in state variable use effect is called


 //useEffect(()=>{
     // console.log("use effect",count,name);
  // },[]);
//useeffect with conditional variable
 //useEffect(()=>{
      //console.log("use effect",count,name);
   //},[name]);
//destructor function 
useEffect(()=>{
      console.log("use effect",count,name);
      return ()=>{
        console.log("i am leaving");
      }
   },[]);



   function f1(){
    // alert("register");
   setcount(count+100);

   }
   function f2(){
    // alert("register");
   setname("ajay");

   }


   // useState(); 
    return(
        <div className="container">
              <h1>State Variable</h1>
              <p>{count}</p>
              <button onClick={f1}>Submit</button>
              <p>{name}</p>
              <button onClick={f2}>Change</button>
        </div>
    )
}