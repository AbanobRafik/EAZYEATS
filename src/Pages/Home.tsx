import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";

const Home = () => {
  const [recipes, setRecipes] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const RatatouilleImg = "/src/assets/ratatouille.jpg";

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=566614587ec744708f3e75807113d846&number=5`
        );
        setRecipes(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  return (
    <div className="px-6 py-10 flex flex-col gap-10">
      {/* Hero Section */}
      <div className="flex items-center justify-between md:flex-row flex-col md:px-8 px-6 md:py-10 py-8 md:gap-12 gap-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col md:gap-5 gap-3 text-center">
          <h3 className="md:text-4xl text-3xl font-bold text-amber-500">
            Welcome to EazyEats!
          </h3>
          <p className="text-lg text-gray-600">
            Discover a world of delicious recipes that are easy to make and sure
            to impress. Whether you're a seasoned chef or just starting out,
            EazyEats has something for everyone. Dive into our collection of
            mouth-watering dishes and find your next favorite meal today!
          </p>
        </div>
        <div>
          <img
            src={RatatouilleImg}
            alt="Ratatouille Dish"
            className="shadow-lg shadow-black rounded-lg w-md md:w-full"
          />
        </div>
      </div>

      {/* Recipes Section */}
      <div className="flex flex-col items-center gap-6">
        {/* Improved Paragraph Section */}
        <div className="text-center max-w-2xl pb-6 border-b border-amber-500">
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            Explore our{" "}
            <span className="text-amber-500 font-semibold">top recipes</span>,
            carefully crafted to bring excitement to your kitchen! Whether
            you’re in the mood for a quick and easy meal or a gourmet dish to
            impress, these recipes are designed to be both{" "}
            <span className="text-amber-500 font-semibold">delicious</span> and
            <span className="text-amber-500 font-semibold">effortless</span>.
            Get ready to cook, create, and savor every bite!
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <p className="text-lg text-gray-500 font-medium">
            Loading recipes...
          </p>
        ) : (
          <div className="flex gap-5 flex-wrap justify-center">
            {recipes.map((recipe) => (
              <Card
                key={recipe.id}
                id={recipe.id}
                image={recipe.image}
                title={recipe.title}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
