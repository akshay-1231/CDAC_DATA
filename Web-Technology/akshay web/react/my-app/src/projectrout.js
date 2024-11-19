import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Contents from "./components/Contents";
import App from "./components/App";
import Product1 from "./components/Product1";
  const projectrout=createBrowserRouter([
    {
        path:"",
        element:<App/>,
        children:[
    
            {
                path:"",
                element:<Home/>,
            },
    {
        path:"loginpage",
        element:<Login/>,

    },
    {  path:"registerpage",
        element:<Register/>,

    },
    {
        path:"contentpage",
        element:<Contents/>,
    },
    {
        path:"productpage",
        element:<Product1/>,
    },


     ],
    },
  ]);
  export default projectrout;