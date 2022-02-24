import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-slate-200 mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <Link to={'/'}>
            <span className="font-semibold text-3xl tracking-tight">
              Acme Inc.
            </span>
          </Link>
        </div>
        <div className="block lg:hidden"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <p className=""></p>
          <div>
            <Link to={'/login'}>
              <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-slate-200 border-slate-200 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
