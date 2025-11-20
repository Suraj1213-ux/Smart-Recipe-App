import React, { useState } from 'react';
// Assuming you have a contact image in your public or assets folder
// import contactImage from '../assets/contact-us-cooking.jpg'; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'idle', 'sending', 'success', 'error'

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setTimeout(() => setStatus(''), 3000); // Clear error after 3 seconds
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000)); 
            
            // In a real app, you'd send formData to your backend:
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });
            // if (response.ok) {
            //     setStatus('success');
            //     setFormData({ name: '', email: '', message: '' }); // Clear form
            // } else {
            //     setStatus('error');
            // }

            setStatus('success'); // Assuming success for now
            setFormData({ name: '', email: '', message: '' }); // Clear form
            setTimeout(() => setStatus(''), 5000); // Clear success after 5 seconds

        } catch (error) {
            console.error("Contact form submission error:", error);
            setStatus('error');
            setTimeout(() => setStatus(''), 3000); // Clear error after 3 seconds
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Background Image / Overlay */}
            <div 
                className="absolute inset-0 z-0 opacity-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838186-b489953922e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')" }}
            ></div>

            <div className="relative z-10 max-w-6xl w-full bg-white p-8 md:p-12 shadow-2xl rounded-2xl border border-gray-100 transform transition-all duration-300 hover:scale-[1.005]">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Have questions, feedback, or just want to say hello? We'd love to hear from you! 
                        Reach out through the form or find our contact details below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Contact Info & Image */}
                    <div className="flex flex-col justify-between">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Reach Out Anytime!</h3>
                            <p className="text-gray-600 mb-6">
                                Whether you're a home cook, a budding chef, or just curious about recipes, 
                                our team is here to assist you.
                            </p>
                            <div className="space-y-5">
                                <div className="flex items-center text-lg text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-4 text-orange-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <span>123 Culinary Lane, Foodie City, CA 90210</span>
                                </div>
                                <div className="flex items-center text-lg text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-4 text-orange-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    <span>support@smartrecipe.com</span>
                                </div>
                                <div className="flex items-center text-lg text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-4 text-orange-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-2.25 1.8-4.05 4.05-4.05h1.35c.535 0 1.052.207 1.42.57l1.07 1.07a11.25 11.25 0 010 16.923c-.27.27-.56.496-.86.693l-1.07 1.07c-.367.368-.884.575-1.42.575H6.3c-2.25 0-4.05-1.8-4.05-4.05V6.75z" />
                                    </svg>
                                    <span>+1 (555) RECIPES</span>
                                </div>
                            </div>
                        </div>
                        {/* Example image for the left side */}
                        <div className="mt-8 rounded-xl overflow-hidden shadow-xl">
                            <img 
                                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                                alt="Chef cooking" 
                                className="w-full h-64 object-cover" 
                            />
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-300 focus:border-orange-500 transition duration-200 text-base"
                                    placeholder="Your Full Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-300 focus:border-orange-500 transition duration-200 text-base"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-300 focus:border-orange-500 transition duration-200 text-base"
                                    placeholder="Tell us what's on your mind..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`w-full py-3 text-white font-bold text-lg rounded-lg transition duration-300 shadow-md
                                    ${status === 'sending' 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600'
                                    }
                                `}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {/* Form Status Messages */}
                            {status === 'success' && (
                                <div className="mt-4 p-3 text-center bg-green-100 text-green-700 rounded-lg">
                                    Your message has been sent successfully!
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="mt-4 p-3 text-center bg-red-100 text-red-700 rounded-lg">
                                    There was an error sending your message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;