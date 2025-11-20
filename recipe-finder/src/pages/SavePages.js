import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSavedRecipes, removeRecipe } from '../redux/recipeSlice';
import { Link } from 'react-router-dom'; // Import Link for navigation

const SavePage = () => {
    // Assuming selectSavedRecipes now returns an array of full recipe objects
    // Example: [{ idMeal: '52772', strMeal: 'Spaghetti Carbonara', strMealThumb: '...' }]
    const savedRecipes = useSelector(selectSavedRecipes);
    const dispatch = useDispatch();

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                        Your Favorite Recipes
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Rediscover your saved culinary treasures and dive into their details anytime!
                    </p>
                </div>

                {savedRecipes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {savedRecipes.map((recipe) => (
                            <div 
                                key={recipe.idMeal} // Use idMeal for a unique key
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col transform hover:scale-[1.02] transition-transform duration-300"
                            >
                                {/* Recipe Image */}
                                <div className="h-40 overflow-hidden relative">
                                    <img 
                                        src={recipe.strMealThumb} 
                                        alt={recipe.strMeal} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                {/* Recipe Details & Actions */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                                        {recipe.strMeal}
                                    </h2>
                                    <p className="text-sm text-gray-500 mb-4">
                                        {recipe.strArea || 'Global'} Cuisine
                                    </p>

                                    <div className="mt-auto flex gap-3">
                                        {/* View Details Button */}
                                        <Link 
                                            to={`/recipe/${recipe.idMeal}`} 
                                            className="flex-1 text-center py-2 px-4 bg-orange-100 text-orange-600 font-semibold rounded-lg hover:bg-orange-200 transition-colors text-sm"
                                        >
                                            View Details
                                        </Link>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => dispatch(removeRecipe(recipe.idMeal))} // Remove by ID
                                            className="py-2 px-4 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition-colors text-sm"
                                            aria-label={`Remove ${recipe.strMeal} from favorites`}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl shadow-md border border-gray-100">
                        <span className="block text-6xl mb-6">✨</span>
                        <p className="text-2xl font-semibold text-gray-700 mb-4">
                            Your favorites list is empty!
                        </p>
                        <p className="text-lg text-gray-500 mb-8">
                            Start exploring recipes and click the 'Save' button to add them here.
                        </p>
                        <Link 
                            to="/home" 
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-colors"
                        >
                            Find Recipes
                            <svg className="ml-2 -mr-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SavePage;