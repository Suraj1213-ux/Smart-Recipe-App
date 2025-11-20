// src/redux/recipeSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching recipes
export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async (query) => {
        // Updated to handle both search by name and filter by category (like Vegetarian)
        const url = query.startsWith('filter') 
            ? `https://www.themealdb.com/api/json/v1/1/${query}` // e.g., filter.php?c=Vegetarian
            : `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`; // e.g., search.php?s=chicken
            
        const response = await fetch(url);
        const data = await response.json();
        return data.meals || []; 
    }
);

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        savedRecipes: [], 
        status: 'idle', 
        error: null,
    },
    reducers: {
        saveRecipe: (state, action) => {
            // action.payload should be the full recipe object
            const newRecipe = action.payload;
            // Prevent saving duplicates based on idMeal
            if (!state.savedRecipes.some(recipe => recipe.idMeal === newRecipe.idMeal)) {
                state.savedRecipes.push(newRecipe);
            }
        },
        removeRecipe: (state, action) => {
            // action.payload should be the idMeal of the recipe to remove
            state.savedRecipes = state.savedRecipes.filter(recipe => recipe.idMeal !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state, action) => { // Added action for error message
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch recipes';
            });
    }
});

export const { saveRecipe, removeRecipe } = recipeSlice.actions;
export const selectSavedRecipes = (state) => state.recipes.savedRecipes;
export default recipeSlice.reducer;