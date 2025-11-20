import React, { useState } from 'react';

const Newsletters = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setStatus('error');
            return;
        }

        setStatus('loading');

        try {
            // This is a placeholder for your actual API endpoint.
            // For a real application, you'd integrate with a newsletter service (e.g., Mailchimp, ConvertKit).
            // For demonstration, we'll simulate a delay.
            await new Promise(resolve => setTimeout(resolve, 1500)); 

            // Simulate successful subscription
            if (email !== 'error@example.com') { // Example: 'error@example.com' could simulate an API error
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
            
        } catch (error) {
            console.error("Subscription error:", error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Background Image / Overlay */}
            <div 
                className="absolute inset-0 z-0 opacity-15 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498837167922-ddd27525d35a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')" }}
            ></div>

            <div className="relative z-10 max-w-2xl w-full bg-white p-8 md:p-12 shadow-2xl rounded-2xl border border-gray-100 transform transition-all duration-300 hover:scale-[1.01]">
                {/* Header Section */}
                <div className="text-center mb-10">
                    {/* <span className="text-5xl md:text-6xl mb-4 block animate-bounce-slow">💌</span> */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                        Join Our Community!
                    </h2>
                    <p className="text-lg text-gray-600 max-w-md mx-auto">
                        Get the freshest recipes, cooking tips, and exclusive content delivered straight to your inbox.
                    </p>
                </div>

                {/* Subscription Form */}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <div>
                        <label htmlFor="email" className="sr-only">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-200 transition duration-300 text-lg"
                            required
                            aria-label="Email address for newsletter subscription"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-4 text-white font-bold text-xl rounded-xl transition duration-300 shadow-lg 
                            ${status === 'loading' 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600'
                            }
                        `}
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Subscribing...' : 'Subscribe Now!'}
                    </button>
                </form>

                {/* Feedback Messages */}
                <div aria-live="polite" className="mt-8 text-center">
                    {status === 'error' && (
                        <div className="p-4 bg-red-100 text-red-700 border border-red-300 rounded-lg flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                            <span>{validateEmail(email) ? 'Oops! Something went wrong. Please try again.' : 'Please enter a valid email address.'}</span>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="p-4 bg-green-100 text-green-700 border border-green-300 rounded-lg flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span>Fantastic! You're subscribed. Check your inbox soon!</span>
                        </div>
                    )}
                </div>

                {/* What to Expect Section */}
                <div className="mt-12 text-center text-gray-700">
                    <h3 className="text-2xl font-semibold mb-4">What to expect:</h3>
                    <ul className="list-none space-y-3 md:space-y-2 text-md max-w-md mx-auto">
                        <li className="flex items-center justify-center">
                            <span className="mr-3 text-orange-500">✓</span> New recipes every week
                        </li>
                        <li className="flex items-center justify-center">
                            <span className="mr-3 text-orange-500">✓</span> Exclusive cooking tips & tricks
                        </li>
                        <li className="flex items-center justify-center">
                            <span className="mr-3 text-orange-500">✓</span> Seasonal meal planning ideas
                        </li>
                        <li className="flex items-center justify-center">
                            <span className="mr-3 text-orange-500">✓</span> No spam, ever!
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Newsletters;
