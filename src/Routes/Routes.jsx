import {
    createBrowserRouter
} from "react-router-dom";
import ToyDetails from "../Components/ToyDetails/ToyDetails";
import App from "../Layout/App";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Alltoys from "../Pages/AllToys/Alltoys";
import Bolg from "../Pages/Blog/Bolg";
import GetTheToy from "../Pages/GetTheToy/GetTheToy";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyToys from "../Pages/MyToys/MyToys";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
            element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`)

        },
        {
            path: '/gettoy/:id',
            element: <GetTheToy></GetTheToy>,
            loader: ({params}) => fetch(`http://localhost:5000/gettoy/${params.id}`)

        },
        {
            path: '/mytoys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: '/addatoy',
            element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
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