import React, { useEffect, useState } from "react";
import type { Card } from "../interface";
import axios from "axios";
import { useParams } from "react-router";

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Card>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const RecipesDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=a55070bc89794d78a54145cebde16398`
        );
        setRecipe(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    RecipesDetails();
  }, [id]);

  return (
    <div className="max-w-2xl mt-24 mb-5 mx-auto p-6 bg-amber-200 shadow-lg rounded-lg">
      {loading ? (
        <p className="text-2xl text-center text-gray-200">Loading Recipe...</p>
      ) : recipe ? (
        <div>
          <div id="title and img" className="flex flex-col items-center gap-6 ">
            <h3 className="text-center text-gray-600 font-bold md:text-3xl">
              {recipe.title}
            </h3>
            <img
              className="rounded-2xl"
              src={recipe.image}
              alt={recipe.title}
            />
          </div>
          <div>
            <h3 className="text-grey-700 font-bold mb-2 text-2xl text-center mt-5">
              Ingredients
            </h3>
            <ul>
              {recipe.extendedIngredients?.map((ingredient, index) => (
                <li key={index} className="mb-5 bg-amber-50 p-2 rounded-lg">
                  <div className="flex items-center gap-1">
                    <img
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                      alt={ingredient.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <p className="font-semibold text-xl text-gray-500">
                      {ingredient.name}
                    </p>
                  </div>
                  <p className="mx-2">
                    Aisle: {ingredient.aisle} | Amount: {ingredient.amount}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Recipe not found.</p>
      )}
    </div>
  );
};

export default RecipeDetails;
