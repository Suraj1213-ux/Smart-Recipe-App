// src/components/RecipeCard.js

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveRecipe } from '../redux/recipeSlice'; // Ensure this is recipeSlice

const RecipeCard = ({ recipe }) => {
    const dispatch = useDispatch();

    const handleSave = () => {
        // Pass the entire recipe object
        dispatch(saveRecipe(recipe)); 
        alert(`${recipe.strMeal} has been saved!`);
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                    src={recipe.strMealThumb} 
                    alt={recipe.strMeal} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Optional: Category Tag Overlay */}
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {recipe.strCategory || 'Recipe'}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Title - Limited to 1 line to keep size uniform */}
                <h2 
                    className="text-lg font-bold text-gray-800 mb-1 line-clamp-1" 
                    title={recipe.strMeal}
                >
                    {recipe.strMeal}
                </h2>
                
                {/* Subtitle/Origin */}
                <p className="text-xs text-gray-500 mb-4">
                    {recipe.strArea ? `${recipe.strArea} Cuisine` : 'Delicious Meal'}
                </p>

                {/* Action Buttons - Pushed to bottom with mt-auto */}
                <div className="mt-auto flex gap-2">
                    <Link 
                        to={`/recipe/${recipe.idMeal}`} 
                        className="flex-1 text-center py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Details
                    </Link>
                    <button
                        onClick={handleSave}
                        className="flex-1 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-sm"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;