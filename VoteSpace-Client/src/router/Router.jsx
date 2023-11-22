import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import CandidateReg from "../components/CandidateReg";
import ForgotPass from "../components/ForgotPass";
import Help from "../components/Help";
import Login from "../components/Login";
import UserReg from "../components/UserReg";
import VotingSys from "../components/VotingSys";
import Home from "../Home";
import AdminLogin from "../components/AdminLogin";
import Privateroute from "../Privateroute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path:"/",
    element:<Home/>
  },
      {
        path: "/contact",
        element: <Contact />,  
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/candidate-registration",
        element: <CandidateReg/>,
      },
      {
        path: "/forgot-pass",
        element: <ForgotPass/>,
      },
      {
        path: "/help",
        element: <Help/>,
      },
      {
        path: "/voting",
        element:<VotingSys/>
      },
      {
        path: "/user-registration",
        element: <UserReg/>,
      },
    ],
  },
  
  {
    path: "/login",
    element: <Login/>,
  },
  
  
  // Admin dashboard route
  // { 
  //     path: "/admin/dashboard",
  //     // element: <Dashboard/>,
  //     children: [
  //       {
  //         // Main dashboard route with private route handling
  //         path: "/admin/dashboard",
  //         // element: <Privateroute><Maindash/></Privateroute>
  //       },
  //       {
  //         // Upload book route
  //         path: "/admin/dashboard/upload",
  //         element: <Uploadbook />,
  //       },
  //       {
  //         // Manage book route
  //         path: "/admin/dashboard/manage",
  //         element: <Managebook />,
  //       },
  //       {
  //         // Edit book route with dynamic loader for fetching single book data
  //         path: "/admin/dashboard/edit-book/:id",
  //         element: <Editbook/>,
  //       //   loader: ({params}) => fetch(`http://localhost:5000/single-book/${params.id}`)
  //       },
  //     ],
  //   },
    {
      // Login route
      path: "/admin",
      element: <AdminLogin/>
    },
  ]);
  
  export default router;