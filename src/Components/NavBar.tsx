import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-25 py-2 bg-gray-50 shadow-2xl shadow-gray-50 border-b-amber-300 border-b-2">
      <div className="flex items-center space-x-2">
        <img src="/src/assets/logo.png" className="w-10 h-10 mb-3" />
        <h3 className="text-2xl font-bold">EAZYEAT</h3>
      </div>
    <ul className="flex gap-10 items-center">
    <li>
      <NavLink
        className="hover:border-b-amber-300 border-b-2 border-transparent transition duration-500"
        id="link"
        to={"home"}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className="hover:border-b-amber-300 border-b-2 border-transparent transition duration-500"
        id="link"
        to={"recipes"}
      >
        Recipes
      </NavLink>
    </li>
    <li>
      <NavLink
        className="hover:border-b-amber-300 border-b-2 border-transparent transition duration-500"
        id="link"
        to={"random"}
      >
        Random
      </NavLink>
    </li>
    <li>
      <NavLink
        className="hover:border-b-amber-300 border-b-2 border-transparent transition duration-500"
        id="link"
        to={"contact"}
      >
        Contact
      </NavLink>
    </li>
      </ul>
    </nav>
  );
};

export default NavBar;
