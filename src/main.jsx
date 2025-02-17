import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Users from "./Components/Users/Users";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
      }
   
    ]
    
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
