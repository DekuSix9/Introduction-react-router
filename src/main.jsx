import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Users from "./Components/Users/Users";
import UserDetails from "./Components/Users/UserDetails";
import ErrorPage from "./Components/ErrorPage/ErrorPage";





const router = createBrowserRouter([
  {
    
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/about',
        element:<About></About>

      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader:()=>fetch ('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      
  {
  path:'/users/:userId',
  loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
  element:<UserDetails></UserDetails>

  }
   
    ]
    
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
