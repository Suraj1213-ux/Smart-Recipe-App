import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/recipeSlice';
import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard'; // Ensure this path is correct

const Home = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const { recipes, status, error } = useSelector(state => state.recipes);

    // Fetch initial random recipes or a default category
    useEffect(() => {
        // You can change 'random' to a specific category like 'filter.php?c=Breakfast'
        // or a general search term like 'pasta' for initial load.
        dispatch(fetchRecipes('random')); // Fetch 1 random recipe for initial load
    }, [dispatch]);

    const handleSearch = (searchTerm) => {
        if (searchTerm.trim()) {
            dispatch(fetchRecipes(searchTerm));
            setQuery(searchTerm); // Update query state for input box
        }
    };

    const handleFilterClick = (category) => {
        // TheMealDB API uses 'filter.php?c=' for category filtering
        dispatch(fetchRecipes(`filter.php?c=${category}`));
        setQuery(''); // Clear search query when a filter is applied
    };

    let content;

    if (status === 'loading') {
        content = (
            <div className="text-center py-10">
                <p className="text-xl text-gray-600 animate-pulse">Whipping up delicious recipes...</p>
            </div>
        );
    } else if (status === 'failed') {
        content = (
            <div className="text-center py-10 bg-red-50 rounded-xl shadow-md border border-red-100">
                <p className="text-xl text-red-700 font-semibold mb-2">Error: {error || 'Failed to fetch recipes.'}</p>
                <p className="text-lg text-red-600">Please check your connection or try again.</p>
            </div>
        );
    } else if (status === 'succeeded' && (!recipes || recipes.length === 0)) {
        content = (
            <div className="text-center py-10 bg-white rounded-xl shadow-md border border-gray-100">
                <p className="text-2xl font-semibold text-gray-700 mb-4">No recipes found.</p>
                <p className="text-lg text-gray-500">Try a different search term or category!</p>
            </div>
        );
    } else { // status === 'succeeded' && recipes are available
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {recipes?.map((recipe) => (
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 relative">
            {/* Hero Section with Background Image */}
            <div 
                className="relative h-[400px] md:h-[550px] bg-cover bg-center flex items-center justify-center text-center"
                style={{ backgroundImage: "url('https://lms.googleusercontent.com/df90cf21-b844-4869-89a3-550a26d7f955/homebg.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div> {/* Dark overlay with blur */}
                <div className="relative z-10 p-4 max-w-3xl mx-auto text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Discover Your Next <span className="text-orange-400">Favorite Meal</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8">
                        Explore thousands of easy-to-follow recipes, from quick dinners to gourmet delights.
                    </p>
                    <div className="flex w-full max-w-xl mx-auto gap-3">
                        <input
                            type="text"
                            className="flex-1 p-3.5 text-lg border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 transition-shadow duration-300 text-gray-800"
                            placeholder="Search for 'Chicken Tikka', 'Vegan Stir-fry'..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
                        />
                        <button
                            onClick={() => handleSearch(query)}
                            className={`px-7 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-lg flex-shrink-0
                                ${query ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-400 text-gray-100 cursor-not-allowed'}
                            `}
                            disabled={!query}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Category Filter Buttons */}
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Quick Filters</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {['Chicken', 'Breakfast', 'Vegan', 'Dessert', 'Seafood', 'Pasta'].map((category) => (
                        <button
                            key={category}
                            onClick={() => handleFilterClick(category)}
                            className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors shadow-sm text-sm"
                        >
                            {category}
                        </button>
                    ))}
                    <button
                        onClick={() => handleSearch('random')}
                        className="px-5 py-2 rounded-full bg-green-100 text-green-700 font-medium hover:bg-green-200 transition-colors shadow-sm text-sm"
                    >
                        Random Recipe
                    </button>
                </div>
            </div>

            {/* Recipe List Section */}
            <div className="max-w-7xl mx-auto px-4 pb-12">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                    Featured Recipes
                </h2>
                {content}
            </div>
        </div>
    );
}

export default Home;