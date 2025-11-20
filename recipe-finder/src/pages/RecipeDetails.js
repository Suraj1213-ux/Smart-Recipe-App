// src/components/RecipeDetails.js

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { saveRecipe } from '../redux/recipeSlice'; // Assuming you save the full object

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (res.data.meals && res.data.meals.length > 0) {
                    setRecipe(res.data.meals[0]);
                } else {
                    setError('Recipe not found.');
                }
            } catch (err) {
                console.error("Error fetching recipe details:", err);
                setError('Failed to fetch recipe details.');
            } finally {
                setLoading(false);
            }
        };
        fetchRecipeDetails();
    }, [id]);

    const handleSaveRecipe = () => {
        if (recipe) {
            dispatch(saveRecipe(recipe));
            alert(`${recipe.strMeal} has been added to your favorites!`);
        }
    };

    // Extract ingredients and measures
    const ingredients = [];
    if (recipe) {
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== '') {
                ingredients.push(`${measure} ${ingredient}`);
            }
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <p className="text-xl text-gray-600 animate-pulse">Loading recipe...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 p-8 text-center">
                <p className="text-2xl text-red-700 font-semibold mb-4">{error}</p>
                <p className="text-lg text-red-600">Please check the recipe ID or try again later.</p>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-100 p-8 text-center">
                <p className="text-2xl text-gray-700">No recipe data available.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.005] transition-transform duration-300">
                
                {/* Recipe Header with Image */}
                <div className="relative h-96 sm:h-[450px] md:h-[550px]">
                    <img 
                        src={recipe.strMealThumb} 
                        alt={recipe.strMeal} 
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h1 className="text-5xl md:text-7xl font-extrabold mb-2 leading-tight">
                                {recipe.strMeal}
                            </h1>
                            <p className="text-xl md:text-2xl text-orange-200">
                                {recipe.strArea} Cuisine • {recipe.strCategory}
                            </p>
                            <button
                                onClick={handleSaveRecipe}
                                className="mt-4 px-6 py-2 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:bg-orange-50 transition-colors duration-300 flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414L8.586 9H6a1 1 0 100 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293z" clipRule="evenodd" />
                                </svg>
                                Save Recipe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Ingredients Section */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-300 pb-3">Ingredients</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                            {ingredients.length > 0 ? (
                                ingredients.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-orange-500 mr-2 mt-0.5">●</span> {item}
                                    </li>
                                ))
                            ) : (
                                <p>No ingredients listed.</p>
                            )}
                        </ul>
                    </div>

                    {/* Instructions Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-300 pb-3">Instructions</h2>
                        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                            {recipe.strInstructions || 'No instructions provided.'}
                        </p>

                        {/* YouTube Link */}
                        {recipe.strYoutube && (
                            <div className="mt-10">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Watch the Tutorial:</h3>
                                <a 
                                    href={recipe.strYoutube} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300 text-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v15.16a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    Watch on YouTube
                                </a>
                            </div>
                        )}

                        {/* Source Link */}
                        {recipe.strSource && (
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Recipe Source:</h3>
                                <a 
                                    href={recipe.strSource} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-300 text-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                    View Original Source
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Tags (if available) */}
                {recipe.strTags && (
                    <div className="p-8 md:p-12 border-t border-gray-100 mt-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Tags:</h3>
                        <div className="flex flex-wrap gap-3">
                            {recipe.strTags.split(',').map(tag => (
                                <span key={tag.trim()} className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-md font-medium shadow-sm">
                                    {tag.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipeDetails;