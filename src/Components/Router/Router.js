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
import Review from "../Review/Review";
import UpdateReview from "../Review/UpdateReview";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://server-ruddy-one.vercel.app/services"),
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () => fetch("https://server-ruddy-one.vercel.app/allServices"),
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
          return fetch(
            `https://server-ruddy-one.vercel.app/details/${params.id}`
          );
        },
      },
      {
        path: "/addservices",
        element: (
          <PrivateRouter>
            <AddService></AddService>
          </PrivateRouter>
        ),
      },
      {
        path: "/portfolio",
        element: (
          <PrivateRouter>
            <Portfolio></Portfolio>
          </PrivateRouter>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/review",
        element: (
          <PrivateRouter>
            {" "}
            <Review></Review>
          </PrivateRouter>
        ),
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(`https://server-ruddy-one.vercel.app/review/${params.id}`),
      },
    ],
  },
]);
