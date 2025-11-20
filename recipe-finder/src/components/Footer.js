import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom for navigation

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6 shadow-top-strong">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8">
                {/* Column 1: Brand & Description */}
                <div className="md:col-span-1 text-center md:text-left">
                    <Link to="/" className="text-3xl font-extrabold text-white flex items-center justify-center md:justify-start mb-4">
                        <span className="text-orange-500 mr-2 text-4xl">🍳</span> SmartRecipe
                    </Link>
                    <p className="text-sm leading-relaxed mb-4">
                        Your ultimate guide to delicious and easy-to-follow recipes. Cook smarter, eat better!
                    </p>
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} SmartRecipe. All Rights Reserved.
                    </p>
                </div>

                {/* Column 2: Navigation Links */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link to="/" className="hover:text-orange-400 transition-colors duration-300 text-base">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-orange-400 transition-colors duration-300 text-base">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-orange-400 transition-colors duration-300 text-base">Contact</Link>
                        </li>
                        <li>
                            <Link to="/saved" className="hover:text-orange-400 transition-colors duration-300 text-base">Saved Recipes</Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Newsletter Signup */}
                <div className="lg:col-span-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-6">Stay Connected</h3>
                    <p className="text-sm mb-4">
                        Don't miss out on our latest recipes and cooking tips!
                    </p>
                    <Link 
                        to="/newsletters" 
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-full shadow-md text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                    >
                        <FaEnvelope className="mr-2" /> Subscribe to Newsletter
                    </Link>
                </div>

                {/* Column 4: Social Media */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a 
                            href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Facebook"
                            className="text-gray-400 hover:text-blue-600 transition duration-300 text-3xl"
                        >
                            <FaFacebook />
                        </a>
                        <a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Instagram"
                            className="text-gray-400 hover:text-pink-500 transition duration-300 text-3xl"
                        >
                            <FaInstagram />
                        </a>
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Twitter"
                            className="text-gray-400 hover:text-blue-400 transition duration-300 text-3xl"
                        >
                            <FaTwitter />
                        </a>
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn"
                            className="text-gray-400 hover:text-blue-700 transition duration-300 text-3xl"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Bottom Separator (optional) */}
            <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                Made with ❤️ for food lovers everywhere.
            </div>
        </footer>
    );
}

export default Footer;