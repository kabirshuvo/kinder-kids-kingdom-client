import {
    createBrowserRouter
} from "react-router-dom";
import ImageGallery from "../Components/ImageGallery/ImageGallery";
import ToyDetails from "../Components/ToyDetails/ToyDetails";
import App from "../Layout/App";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Alltoys from "../Pages/AllToys/Alltoys";
import Bolg from "../Pages/Blog/Bolg";
import CategorisedToys from "../Pages/CategorisedToys/CategorisedToys";
import ContactPage from "../Pages/Contact Page/ContactPage";
import GetTheToy from "../Pages/GetTheToy/GetTheToy";
import Home from "../Pages/Home";
import KindersCategory from "../Pages/KindersCategory/KindersCategory";
import LogIn from "../Pages/LogIn/LogIn";
import MyToys from "../Pages/MyToys/MyToys";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <NotFound></NotFound>,
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
            path: '/categories',
            element: <CategorisedToys></CategorisedToys>
        },
        {
            path: '/categories/:id',
            element: <KindersCategory></KindersCategory>,
            loader: ({params}) => fetch(`https://kinder-kids-server.vercel.app/categories/${params.id}`)
            
        },
        {
            path: '/imagegelary',
            element: <ImageGallery></ImageGallery>
        },
        {
            path: '/toydetails/:id',
            element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://kinder-kids-server.vercel.app/toydetails/${params.id}`)

        },
        {
            path: '/gettoy/:id',
            element: <GetTheToy></GetTheToy>,
            loader: ({params}) => fetch(`https://kinder-kids-server.vercel.app/gettoy/${params.id}`)

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
        },
        {
            path:'/contactus',
            element: <ContactPage></ContactPage>
        }

      ]
    },
    {
        path: '/error',
        element:<NotFound></NotFound>
    }
  ]);
export default router;