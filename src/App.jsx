import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BikesGallery from "./BikesGallery";
import BikeDetail from "./Chat";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BikesGallery />} />
        <Route path="/gallery" element={<BikesGallery />} />
        <Route path="/bike/:bikeId" element={<BikeDetail />} />
      </Routes>

      {/* Main content (landing page) */}
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          {/* Logo/Icon */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-red-600 blur-2xl opacity-50 animate-pulse"></div>
            <svg
              className="w-24 h-24 relative z-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-black text-center mb-4 tracking-tight">
            <span className="text-white">Welcome to the</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-transparent bg-clip-text animate-pulse">
              Bhopal Bike Gallery
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg md:text-xl text-center mb-12 max-w-2xl">
            Discover the perfect ride that matches your style and adventure
          </p>

          {/* CTA Button */}
          <Link to="/gallery">
            <button className="group relative px-12 py-5 overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50">
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Button shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <span className="relative flex items-center gap-3">
                Go to Bikes Gallery
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </Link>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl">
            {[
              {
                title: "Premium Quality",
                desc: "Top-tier bikes crafted with precision",
              },
              {
                title: "Expert Curation",
                desc: "Handpicked selection for every rider",
              },
              {
                title: "Best Prices",
                desc: "Competitive rates with quality guarantee",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-red-900/30 hover:border-red-600/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                  <div className="w-6 h-6 bg-red-500 rounded-full group-hover:scale-110 transition-transform"></div>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      </div>
    </Router>
  );
};

export default App;
