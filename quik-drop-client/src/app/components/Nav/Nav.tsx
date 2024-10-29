"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Bell, Info, Menu } from "react-feather";

export const Nav = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">QuickDrop</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 rounded text-teal-500 hover:text-teal-700"
          onClick={() => {
            setHidden(!hidden);
          }}
        >
          <Menu />
        </button>
      </div>
      <div
        className={clsx(
          "w-full flex-grow lg:flex lg:items-center lg:w-auto transition",
          hidden ? "block opacity-1" : "hidden opacity-0"
        )}
      >
        <div className="text-sm lg:flex-grow lg:flex lg:justify-end">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            <Info />
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            <Bell />
          </a>
        </div>
      </div>
    </nav>
  );
};
