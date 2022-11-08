import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/Authentication";

const Register = () => {
  const { register, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, photo, password);
    register(email, password)
      .then((result) => {
        const user = result.user;
        form.reset()
        // console.log(user);
        navigate('/')
      })
      .catch((err) => console.error(err.code));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
      <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
        <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
          Registration Form
        </div>
        <form onSubmit={handleSubmit} className="">
          <div>
            <input
              type="text"
              name="name"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder="Name "
            />
          </div>
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
              type="text"
              name="photo"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Photo URL"
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
              value="Create Account"
            />
          </div>
          <div className="flex justify-center ">
            <p className="text-gray-500">Already have an acount? </p>
            <Link to="/login" className="text-sky-600 pl-2">
              {" "}
              Sign In
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

export default Register;
