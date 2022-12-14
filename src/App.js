import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/Router/Router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='bg-neutral-300 font-[poppins]'>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
