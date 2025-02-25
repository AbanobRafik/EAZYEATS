import React, { useEffect, useState } from "react";
import type { Card } from "../interface";
import axios from "axios";

const Random = () => {
  const [loading, setLoading] = useState(false);
  const [randomRecipe, setRandomRecipe] = useState<Card | null>(null);

  useEffect(() => {
    const loadRandomRecipe = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "https://api.spoonacular.com/recipes/random?number=1&apiKey=a55070bc89794d78a54145cebde16398"
        );
        setRandomRecipe(data.recipes[0]); // Fix: Extract the first recipe Pov
      } catch (error) {
        console.log("Error fetching random recipe:", error);
      } finally {
        setLoading(false);
      }
    };
    loadRandomRecipe();
  }, []);

  return (
    <div>
      <h3 className="mt-20 p-4 text-center text-xl font-semibold">
        Discover a new recipe every time you refresh the page!
      </h3>
      <div className="max-w-2xl mb-5 mx-auto p-6 bg-yellow-200 shadow-lg rounded-lg">
        {loading ? (
          <p className="text-2xl text-center text-gray-600">
            Loading Recipe...
          </p>
        ) : randomRecipe ? (
          <div>
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-center text-gray-600 font-bold md:text-3xl">
                {randomRecipe.title}
              </h3>
              <img
                className="rounded-2xl"
                src={randomRecipe.image}
                alt={randomRecipe.title}
              />
            </div>
            <div>
              <h3 className="text-gray-700 font-bold mb-2 text-2xl text-center mt-5">
                Ingredients
              </h3>
              <ul>
                {randomRecipe.extendedIngredients?.map((ingredient, index) => (
                  <li key={index} className="mb-5 bg-yellow-50 p-2 rounded-lg">
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
    </div>
  );
};

export default Random;
