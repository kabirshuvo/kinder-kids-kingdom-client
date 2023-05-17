import {
    createBrowserRouter
} from "react-router-dom";
import App from "../Layout/App";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);
export default router;