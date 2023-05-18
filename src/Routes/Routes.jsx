import {
    createBrowserRouter
} from "react-router-dom";
import ToyDetails from "../Components/ToyDetails/ToyDetails";
import App from "../Layout/App";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Alltoys from "../Pages/AllToys/Alltoys";
import Bolg from "../Pages/Blog/Bolg";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyToys from "../Pages/MyToys/MyToys";
import Register from "../Pages/Register/Register";

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
            path: '/toydetails/:id',
            element: <ToyDetails></ToyDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`)

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
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: '/register',
            element: <Register></Register>
        }

      ]
    },
  ]);
export default router;