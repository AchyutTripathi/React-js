import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
                    
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                            Empowering Your Business for a Smarter Future
                        </h1>
                        <p className="text-gray-600 text-lg mb-6">
                            We provide innovative solutions tailored to accelerate your growth and streamline operations.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4">
                            <Link to="/contact">
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                                    Get Started
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="lg:w-1/2">
                        <img
                            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                            alt="Corporate Team"
                            className="rounded-lg shadow-md w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
                        <p className="text-gray-500 mt-2">Delivering quality and excellence in everything we do</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="text-center">
                            <img
                                src="https://img.icons8.com/ios-filled/100/000000/graph.png"
                                alt="Growth"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Business Growth</h3>
                            <p className="text-gray-500">We help organizations scale efficiently and smartly.</p>
                        </div>

                        <div className="text-center">
                            <img
                                src="https://img.icons8.com/ios-filled/100/000000/customer-support.png"
                                alt="Support"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">24/7 Support</h3>
                            <p className="text-gray-500">Always available to assist you at every step.</p>
                        </div>

                        <div className="text-center">
                            <img
                                src="https://img.icons8.com/ios-filled/100/000000/cloud-checked.png"
                                alt="Cloud"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Cloud Solutions</h3>
                            <p className="text-gray-500">Modern, secure, and scalable technology infrastructure.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-600 text-white py-16">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to take your business to the next level?</h2>
                    <p className="text-lg mb-6">Contact us today and discover how we can partner in your success.</p>
                    <Link to="/contact">
                        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition duration-300">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
