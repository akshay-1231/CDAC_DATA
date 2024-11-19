import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from "react-dom";
import App from "./components/App";
import './css/style.css';
import projectrout from  './projectrout';

import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';



//console.log(React);
//console.log(ReactDom);
const result=ReactDom.createRoot(document.getElementById("root"));
//result.render("hello Nashik");
//var username="akshay";
//var age=24;
//result.render(
  //<ul>
    //<li>{username}</li>
    //<li>{age}</li>
  //</ul>
//);


//result.render(<App/>);

result.render(  <RouterProvider router={projectrout} />);