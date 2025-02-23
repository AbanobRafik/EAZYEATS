import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import Random from "../Pages/Random";
import Contact from "../Pages/Contact";
import React from "react";
import NotFound from "../Pages/NotFound";
import RecipeDetails from "../Pages/RecipeDetails";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<NotFound />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipedetails/:id/:title" element={<RecipeDetails />} />
          <Route path="random" element={<Random />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
