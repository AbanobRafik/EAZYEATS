import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [openMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="relative flex-wrap flex w-full justify-between items-center px-12 py-2 backdrop:blur-sm border-b-amber-300 border-b-2 bg-white/10 backdrop-blur-sm border shadow-lg">
        {/* for small screen */}
        <div className="flex items-center space-x-2">
          <img src="/public/logo.png" className="w-10 h-10 mb-4" />
          <h3 className="md:text-2xl text-xl font-bold">EAZYEAT</h3>
        </div>

        <button className="md:hidden" onClick={() => setIsOpenMenu(!openMenu)}>
          <Menu size={30} />
        </button>

        <div
          className={`${
            openMenu
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 md:max-h-screen md:opacity-100"
          } overflow-hidden transition-all duration-300 ease-in-out w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="flex text-center flex-col md:flex-row md:items-center md:gap-8 gap-4 mt-4 md:mt-0 justify-center md:mx-auto">
            <li>
              <NavLink
                className="hover:border-b-amber-300 border-b-2 border-transparent transition duration-500"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:border-b-amber-300 border-b-2 border-transparent transition duration-500"
                to="/recipes"
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:border-b-amber-300 border-b-2 border-transparent transition duration-500"
                to="/random"
              >
                Random
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:border-b-amber-300 border-b-2 border-transparent transition duration-500"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
