import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { Link } from "react-router";

const Recipes = () => {
  const [recipe, setRecipe] = useState<Card[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQery] = useState("");

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=a55070bc89794d78a54145cebde16398&number=100"
        );
        setRecipe(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadRecipes();
  }, []);

  return (
    <div className="mt-15 px-5 py-10 flex items-center justify-center flex-col gap-10">
      <div className="w-full flex items-center justify-center relative">
        <input
          type="search"
          className="w-full md:mx-36 mx-5 h-11 border-amber-400 border-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Search for recipes..."
          onChange={(e) => setQery(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-8 items-center flex-row">
        {loading ? (
          <div className="w-full">
            <p className="text-2xl text-gray-200">Loading Recipe...</p>
          </div>
        ) : (
          recipe
            .filter((recipe) => recipe.title.toLowerCase().includes(query))
            .map((recipe) => (
              <div key={recipe.id}>
                <Link to={`/recipedetails/${recipe.id}/${recipe.title}`}>
                  <Card
                    id={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                  />
                </Link>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Recipes;
