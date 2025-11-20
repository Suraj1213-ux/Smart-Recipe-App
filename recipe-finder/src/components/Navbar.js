import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Used to highlight the active page

    // Helper to check if link is active
    const isActive = (path) => location.pathname === path;

    // Common styling for links
    const linkClasses = (path) => `
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
        ${isActive(path) 
            ? 'bg-orange-100 text-orange-600 shadow-sm' // Active State
            : 'text-gray-600 hover:bg-gray-100 hover:text-orange-500' // Normal State
        }
    `;

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img 
                            src="https://i.pinimg.com/originals/e4/6b/e6/e46be6459dc4d30cc535b68331d8b6e7.jpg" 
                            alt="Smart Recipe Logo" 
                            className="h-10 w-10 rounded-full object-cover shadow-md group-hover:scale-110 transition-transform duration-300" 
                        /> 
                        <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                            Smart Recipe
                        </span>
                    </Link>

                    {/* Desktop Navbar Links */}
                    <div className="hidden md:flex space-x-2">
                        <Link to="/home" className={linkClasses('/home')}>Home</Link>
                        <Link to="/about" className={linkClasses('/about')}>About</Link>
                        <Link to="/newsletter" className={linkClasses('/newsletter')}>Newsletter</Link>
                        <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
                        
                        {/* Special Button for Favorites */}
                        <Link to="/savepage" className={`
                            ml-4 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-md
                            ${isActive('/savepage') 
                                ? 'bg-orange-600 text-white ring-2 ring-orange-300' 
                                : 'bg-white text-orange-600 border border-orange-200 hover:bg-orange-50'
                            }
                        `}>
                            ♥ Favorites
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-orange-600 focus:outline-none transition-colors p-2"
                        >
                            {/* SVG Icon for Menu (No external library needed) */}
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100 shadow-inner">
                    <Link to="/home" onClick={() => setIsMenuOpen(false)} className={`block ${linkClasses('/home')}`}>Home</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`block ${linkClasses('/about')}`}>About</Link>
                    <Link to="/newsletter" onClick={() => setIsMenuOpen(false)} className={`block ${linkClasses('/newsletter')}`}>Newsletter</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`block ${linkClasses('/contact')}`}>Contact</Link>
                    <Link to="/savepage" onClick={() => setIsMenuOpen(false)} className={`block ${linkClasses('/savepage')}`}>Favorites</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;