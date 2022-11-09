import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/title";
import FAQ from "./FAQ";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <section className="py-6 sm:py-12 dark:text-gray-900">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">WelCome My Blog Site</h2>
            <p className="font-serif text-sm dark:text-gray-400">
              Blog site is available for everyone.anyone can see this site
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col dark:bg-white border-8 rounded-lg border-white">
              <PhotoProvider>
                <PhotoView src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </PhotoView>
              </PhotoProvider>

              <div className="flex flex-col flex-1 p-6">
                <Link
                  to="/services"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  All Service
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-900">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-white border-8 rounded-lg border-white">
              <PhotoProvider>
                <PhotoView src="https://images.pexels.com/photos/3352398/pexels-photo-3352398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="https://images.pexels.com/photos/3352398/pexels-photo-3352398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </PhotoView>
              </PhotoProvider>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  to="/services"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  All Service
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-900">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-white border-8 rounded-lg border-white">
              <PhotoProvider>
                <PhotoView src="https://images.pexels.com/photos/2871648/pexels-photo-2871648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="https://images.pexels.com/photos/2871648/pexels-photo-2871648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </PhotoView>
              </PhotoProvider>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  to="/services"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  All Service
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-900">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-white border-8 rounded-lg border-white">
              <PhotoProvider>
                <PhotoView src="https://images.pexels.com/photos/2293102/pexels-photo-2293102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="https://images.pexels.com/photos/2293102/pexels-photo-2293102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </PhotoView>
              </PhotoProvider>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  to="/services"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  All Service
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-900">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <FAQ></FAQ>
    </div>
  );
};

export default Blog;
