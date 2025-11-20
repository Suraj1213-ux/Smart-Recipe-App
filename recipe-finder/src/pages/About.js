import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* HERO SECTION */}
            <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ef4444] to-orange-500">
                        About Smart Recipe
                    </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We are more than just a recipe app. We are a community of food lovers, 
                    home cooks, and culinary enthusiasts dedicated to bringing the joy of cooking 
                    back into your kitchen.
                </p>
            </div>

            {/* IMAGE & STORY SECTION */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#ef4444] to-orange-500 rounded-2xl blur-lg opacity-30"></div>
                        <img 
                            src="/chef team.jpg" 
                            alt="Cooking Team" 
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-96"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story & Mission</h2>
                        <p className="text-gray-600 mb-4 text-lg">
                            Started in 2024, Smart Recipe began with a simple idea: 
                            <span className="font-semibold text-[#ef4444]"> Cooking shouldn't be complicated.</span>
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our mission is to provide a platform where you can discover new and exciting recipes, 
                            try out various cooking techniques, and bring your culinary creativity to life. 
                            We believe cooking should be accessible, enjoyable, and rewarding for everyone—whether 
                            you are making a 5-minute salad or a Sunday roast.
                        </p>
                        
                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
                            <div>
                                <span className="block text-3xl font-bold text-gray-800">5k+</span>
                                <span className="text-sm text-gray-500">Recipes</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-gray-800">10k+</span>
                                <span className="text-sm text-gray-500">Users</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-gray-800">4.9</span>
                                <span className="text-sm text-gray-500">Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURES GRID (What We Offer) */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
                        <p className="text-gray-600 mt-2">Everything you need to master your kitchen.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#ef4444]">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">🥘</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Curated Recipes</h3>
                            <p className="text-gray-600">
                                Thousands of recipes tested by chefs and home cooks, ranging from quick bites to gourmet meals.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">🥗</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Dietary Filters</h3>
                            <p className="text-gray-600">
                                Vegan? Keto? Gluten-free? Our advanced search makes finding the perfect meal effortless.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#ef4444]">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">❤️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Save Favorites</h3>
                            <p className="text-gray-600">
                                Build your personal cookbook. Save recipes for later and access them from any device.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* TEAM SECTION */}
            <div className="py-20 max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Team</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Our team is made up of passionate food enthusiasts, developers, and designers who are dedicated 
                    to creating an exceptional cooking experience. We work hard behind the scenes so you can 
                    cook with ease.
                </p>
            </div>

            {/* CTA SECTION */}
            <div className="bg-gray-900 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl text-white font-bold mb-4">Ready to start cooking?</h2>
                    <p className="text-gray-400 mb-8">Join our newsletter or contact us for collaborations.</p>
                    <div className="flex justify-center gap-4">
                        <Link 
                            to="/contact" 
                            className="px-8 py-3 rounded-full text-white font-bold bg-gradient-to-r from-[#ef4444] to-orange-500 hover:opacity-90 transition-opacity shadow-lg"
                        >
                            Contact Us
                        </Link>
                        <Link 
                            to="/home" 
                            className="px-8 py-3 rounded-full text-white font-bold border border-gray-600 hover:bg-gray-800 transition-colors"
                        >
                            Explore Recipes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;