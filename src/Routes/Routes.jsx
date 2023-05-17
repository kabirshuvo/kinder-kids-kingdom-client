import {
    createBrowserRouter
} from "react-router-dom";
import App from "../Layout/App";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Alltoys from "../Pages/AllToys/Alltoys";
import Bolg from "../Pages/Blog/Bolg";
import Home from "../Pages/Home";
import MyToys from "../Pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/aboutus',
            element: <AboutUs></AboutUs>
        },
        {
            path: '/alltoys',
            element: <Alltoys></Alltoys>
        },
        {
            path: '/mytoys',
            element: <MyToys></MyToys>
        },
        {
            path: '/addatoy',
            element: <AddAToy></AddAToy>
        },
        {
            path: '/blog',
            element: <Bolg></Bolg>
        }

      ]
    },
  ]);
export default router;