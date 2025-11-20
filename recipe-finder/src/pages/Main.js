import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RecipeList from '../components/RecipeList'; 

const Main = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedRecipes = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // CHANGE 1: Use the 'filter' endpoint for Vegetarian food
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian'); 
        const data = await response.json();
        
        // Take the first 5 vegetarian meals for the slider
        setFeaturedRecipes(data.meals ? data.meals.slice(0, 5) : []); 
      } catch (error) {
        console.error('Error fetching featured recipes:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedRecipes();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="text-center py-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Welcome to the Smart Recipe</h1>
        <p className="text-lg text-gray-600">Explore delicious recipes!</p>
      </div>

      {isLoading && <p className="text-center">Loading tasty recipes...</p>}
      
      {error && (
        <p className="text-center text-red-500">Error: {error.message}</p>
      )}

      {/* CAROUSEL CONTAINER */}
      {featuredRecipes.length > 0 && (
        <div className="max-w-7xl max-h-240 mx-auto mb-12 shadow-2xl rounded-2xl overflow-hidden border-4 border-whitee">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            showStatus={false}
            showThumbs={false}
            showIndicators={true}
            stopOnHover={true}
            dynamicHeight={false}
          >
            {featuredRecipes.map((recipe) => (
              <div key={recipe.idMeal} className="relative h-[300px] md:h-[450px]">
                <img 
                    src={recipe.strMealThumb} 
                    alt={recipe.strMeal} 
                    className="w-full h-full object-cover"
                />
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-left">
                    <h3 className="text-white text-2xl font-bold">{recipe.strMeal}</h3>
                    {/* CHANGE 2: The filter API doesn't return Area/Category, so we use static text */}
                    <p className="text-green-400 text-sm font-semibold">Vegetarian Special 🌿</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}

      {/* Recipe List Section */}
      {/* NOTE: You must also update the API URL inside the RecipeList component file! */}
      <div className="mt-8">
         <RecipeList />
      </div>
      
    </div>
  );
};

export default Main;