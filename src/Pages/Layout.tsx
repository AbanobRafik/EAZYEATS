import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";
import React from "react";


const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
