import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import { Link } from "react-router";
import { MoveUpRight, UtensilsCrossed } from "lucide-react";

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
        <div className="flex flex-col md:gap-5 gap-3 text-center md:text-left">
          <h3 className="md:text-4xl text-3xl font-bold text-amber-500">
            Welcome to EazyEats!
          </h3>
          <p className="text-lg text-gray-600">
            Discover a world of delicious recipes that are easy to make and sure
            to impress. Whether you're a seasoned chef or just starting out,
            EazyEats has something for everyone. Dive into our collection of
            mouth-watering dishes and find your next favorite meal today!
          </p>
          <Link to={"/recipes"}>
            <button className="p-3 text-xl cursor-pointer hover:bg-amber-600 duration-800 ease-in-out transition flex m-auto md:m-0 items-center gap-2.5 bg-amber-500 text-gray-50 rounded-full">
              Explore Recipes
              <UtensilsCrossed />
            </button>
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={RatatouilleImg}
            alt="Ratatouille Dish"
            className="shadow-lg shadow-black rounded-lg w-full md:w-auto"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="text-center max-w-2xl pb-6 border-b border-amber-500">
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            Explore our
            <span className="text-amber-500 font-semibold"> top recipes</span>,
            carefully crafted to bring excitement to your kitchen! Whether
            you’re in the mood for a quick and easy meal or a gourmet dish to
            impress, these recipes are designed to be both
            <span className="text-amber-500 font-semibold"> delicious</span> and
            <span className="text-amber-500 font-semibold"> effortless</span>.
            Get ready to cook, create, and savor every bite!
          </p>
        </div>

        <div className="justify-between items-center w-full md:w-6xl hidden md:flex">
          <h3 className="text-black font-semibold text-3xl">Latest Recipes</h3>
          <Link to={"/recipes"}>
            <button className="bg-amber-400 flex gap-1 px-3 py-2 rounded-xl cursor-pointer hover:bg-amber-600 text-gray-50">
              View More
              <div className="text-sm">
                <MoveUpRight />
              </div>
            </button>
          </Link>
        </div>

        {loading ? (
          <p className="text-lg text-gray-500 font-medium">
            Loading recipes...
          </p>
        ) : (
          <div className="flex gap-5 border-amber-400 flex-wrap justify-center">
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
