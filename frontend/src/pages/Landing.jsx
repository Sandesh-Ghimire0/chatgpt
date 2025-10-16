import React from "react";

function Landing() {
    return (
        <div className="antialiased">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                            <span className="text-white font-bold">C</span>
                        </div>
                        <span className="text-xl font-bold text-gray-800">
                            ChatAI
                        </span>
                    </div>

                    <a
                        href={`${
                            import.meta.env.VITE_BASE_URL
                        }/api/v1/auth/google`}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
                    >
                        Sign In
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-12 md:py-24">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Intelligent Conversations with AI
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Experience the power of AI with our advanced
                            chatbot. Get instant answers, creative inspiration,
                            and professional assistance for all your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href={`${
                                    import.meta.env.VITE_BASE_URL
                                }/api/v1/auth/google`}
                                className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors text-center"
                            >
                                Get Started Free
                            </a>
                            <a
                                href={`${
                                    import.meta.env.VITE_BASE_URL
                                }/api/v1/auth/google`}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors text-center"
                            >
                                <div className="flex items-center justify-center">
                                    <i className="fab fa-google mr-2 text-blue-500"></i>
                                    Continue with Google
                                </div>
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            No credit card required. Free forever plan.
                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="absolute -top-10 -left-6 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating"></div>
                            <div
                                className="absolute -bottom-10 -right-6 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating"
                                style={{ animationDelay: "2s" }}
                            ></div>
                            <div className="relative bg-white rounded-2xl shadow-xl p-6">
                                <div className="flex items-center space-x-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    <div className="flex-1 text-center font-medium text-gray-500">
                                        ChatAI
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                            <i className="fas fa-robot text-indigo-600"></i>
                                        </div>
                                        <div className="bg-gray-100 chat-bubble py-3 px-4 max-w-xs">
                                            <p className="text-gray-800">
                                                Hi there! How can I assist you
                                                today?
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 justify-end">
                                        <div className="bg-indigo-100 chat-bubble user py-3 px-4 max-w-xs">
                                            <p className="text-gray-800">
                                                Can you help me write a poem
                                                about the ocean?
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                            <i className="fas fa-user text-gray-600"></i>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                            <i className="fas fa-robot text-indigo-600"></i>
                                        </div>
                                        <div className="bg-gray-100 chat-bubble py-3 px-4 max-w-xs">
                                            <p className="text-gray-800">
                                                Of course! Here's a short verse:
                                                The ocean's depths hold
                                                mysteries untold, in shades of
                                                blue and green so bold...
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Type your message..."
                                        className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                    <button className="bg-indigo-600 text-white py-2 px-4 rounded-r-md hover:bg-indigo-700 transition-colors">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Powerful Features
                        </h2>
                        <p className="text-gray-600">
                            Our AI assistant is equipped with cutting-edge
                            capabilities to enhance your productivity
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="feature-card bg-gray-50 rounded-xl p-6 transition-all duration-300">
                            <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                                <i className="fas fa-lightbulb text-blue-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Creative Thinking
                            </h3>
                            <p className="text-gray-600">
                                Generate ideas, stories, and content with our
                                creative AI engine.
                            </p>
                        </div>

                        <div className="feature-card bg-gray-50 rounded-xl p-6 transition-all duration-300">
                            <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                                <i className="fas fa-code text-green-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Code Assistance
                            </h3>
                            <p className="text-gray-600">
                                Get help with programming, debugging, and
                                explaining complex code.
                            </p>
                        </div>

                        <div className="feature-card bg-gray-50 rounded-xl p-6 transition-all duration-300">
                            <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                                <i className="fas fa-graduation-cap text-purple-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Learning Companion
                            </h3>
                            <p className="text-gray-600">
                                Explain difficult concepts, summarize texts, and
                                help with research.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Loved by Users
                        </h2>
                        <p className="text-gray-600">
                            See what our users are saying about their experience
                            with ChatAI
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                                    <i className="fas fa-user text-indigo-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Sarah Johnson
                                    </h4>
                                    <p className="text-gray-500">
                                        Content Writer
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "This AI assistant has revolutionized how I
                                brainstorm ideas and overcome writer's block.
                                It's like having a creative partner available
                                24/7."
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                    <i className="fas fa-user text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Michael Chen
                                    </h4>
                                    <p className="text-gray-500">
                                        Software Developer
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "The code assistance feature is incredible. It
                                helps me debug issues and explains complex
                                concepts in ways that are easy to understand."
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                    <i className="fas fa-user text-green-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Emma Rodriguez
                                    </h4>
                                    <p className="text-gray-500">
                                        College Student
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "As a student, this tool has been invaluable for
                                understanding difficult topics and getting help
                                with my assignments. It's like having a tutor
                                anytime I need."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-indigo-600 rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to experience the future of AI conversations?
                        </h2>
                        <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
                            Join thousands of users who are already enhancing
                            their productivity and creativity with ChatAI.
                        </p>
                        <a
                            href="#"
                            className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
                        >
                            Get Started for Free
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                                    <span className="text-white font-bold">
                                        C
                                    </span>
                                </div>
                                <span className="text-xl font-bold">
                                    ChatAI
                                </span>
                            </div>
                            <p className="text-gray-400">
                                Making AI conversations accessible and powerful
                                for everyone.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">
                                Product
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Use Cases
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        API
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">
                                Company
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">
                                Connect
                            </h4>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <i className="fab fa-discord"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>© 2023 ChatAI. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Landing;
