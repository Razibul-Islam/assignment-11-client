import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../AddService/AddService";
import AllServices from "../AllServices/AllServices";
import Blog from "../Blog/Blog";
import Details from "../Details/Details";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Portfolio from "../Portfolio/Portfolio";
import Register from "../Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () => fetch("http://localhost:5000/allServices"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/details/${params.id}`);
        },
      },
      {
        path: '/addservices',
        element: <AddService></AddService>
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>
      }, {
        path: '/blog',
        element:<Blog></Blog>
      }
    ],
  },
]);
