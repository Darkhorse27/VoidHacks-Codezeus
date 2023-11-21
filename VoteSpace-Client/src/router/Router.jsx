import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "/contact",
    //     element: <Contact />,  USE OUTLET WITH CHILDRENS
    //   }
    // ],
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  // {
    
    
    // Admin dashboard route
    //   path: "/admin/dashboard",
    //   element: <Dashboard/>,
    //   children: [
    //     {
    //       // Main dashboard route with private route handling
    //       path: "/admin/dashboard",
    //       element: <Privateroute><Maindash/></Privateroute>
    //     },
    //     {
    //       // Upload book route
    //       path: "/admin/dashboard/upload",
    //       element: <Uploadbook />,
    //     },
    //     {
    //       // Manage book route
    //       path: "/admin/dashboard/manage",
    //       element: <Managebook />,
    //     },
    //     {
    //       // Edit book route with dynamic loader for fetching single book data
    //       path: "/admin/dashboard/edit-book/:id",
    //       element: <Editbook/>,
    //     //   loader: ({params}) => fetch(`http://localhost:5000/single-book/${params.id}`)
    //     },
    //   ],
    // },
    // {
    //   // Signup route
    //   path: "/signup",
    //   element: <Signup/>
    // },
    // {
    //   // Login route
    //   path: "/login",
    //   element: <Login/>
    // },
  ]);
  
  export default router;