import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/Authentication";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/title";

const Login = () => {
  const { Login, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  useTitle("Login");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    Login(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
      <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
        <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
          Login Here
        </div>
        <form onSubmit={handleLogin} className="">
          <div>
            <input
              type="email"
              name="email"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
              placeholder="Email Address "
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Password "
            />
          </div>

          <div className="flex justify-center my-6">
            <input
              type="submit"
              className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold text-center"
              value="Login"
            />
          </div>
          <div className="flex justify-center ">
            <p className="text-gray-500">New In Wedding-Shots? </p>
            <Link to="/register" className="text-sky-600 pl-2">
              {" "}
              Sign Up
            </Link>
          </div>
          <div className="flex justify-center my-6">
            <button
              onClick={handleGoogleSignIn}
              className="p-3 w-full flex items-center justify-around sm:w-56 bg-gradient-to-l from-sky-600  to-teal-300 text-white text-lg font-semibold"
            >
              <FaGoogle /> Login With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
