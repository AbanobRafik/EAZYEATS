import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";
import React from "react";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
