import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import Random from "../Pages/Random";
import Contact from "../Pages/Contact";
import React from "react";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="random" element={<Random />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
