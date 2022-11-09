import React, { useContext } from "react";
import { AuthContext } from "../Authentication/Authentication";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import useTitle from "../../hooks/title";

const Portfolio = () => {
  const { user } = useContext(AuthContext);
  useTitle("Portfolio");

  return (
    <div className="p-10">
      <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <PhotoProvider>
                  <PhotoView
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1667929476~exp=1667930076~hmac=9e79d1b1e7f9dcad815a25e7f1cbcb2d5219788ca741bc465ad09da1f7119ca7"
                    }
                  >
                    <img
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1667929476~exp=1667930076~hmac=9e79d1b1e7f9dcad815a25e7f1cbcb2d5219788ca741bc465ad09da1f7119ca7"
                      }
                      className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-14 lg:-ml-16 max-w-[150px]"
                      alt=""
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>
          </div>
          <div className="text-center mt-24">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {user?.displayName ? user?.displayName : "Author"}
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              {user?.email}
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
