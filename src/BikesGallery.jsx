import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Bikes data grouped by brand with placeholder images from Unsplash
const categories = [
  {
    brand: "Royal Enfield",
    bikes: [
      {
        id: 1,
        name: "Classic 350",
        model: "Cruiser Series",
        image: "/enfield350.webp",
        price: "₹1,93,080",
      },
      {
        id: 2,
        name: "Himalayan",
        model: "Adventure",
        image: "/himalyan.webp",
        price: "₹2,15,900",
      },
      {
        id: 3,
        name: "Meteor 350",
        model: "City Cruiser",
        image: "/meteor350.webp",
        price: "₹2,05,900",
      },
    ],
  },
  {
    brand: "KTM",
    bikes: [
      {
        id: 4,
        name: "Duke 390",
        model: "Naked Sport",
        image: "/duke390.webp",
        price: "₹3,11,000",
      },
      {
        id: 5,
        name: "RC 390",
        model: "Sport Racing",
        image: "/Rc390.webp",
        price: "₹3,18,173",
      },
    ],
  },
  {
    brand: "Bajaj",
    bikes: [
      {
        id: 6,
        name: "Pulsar 220F",
        model: "Sport Tourer",
        image: "/Pulsar-220F-2023-Coming.webp",
        price: "₹1,40,000",
      },
      {
        id: 7,
        name: "Dominar 400",
        model: "Power Cruiser",
        image: "/20250704110627_Bajaj Dominar 400 update teaser.webp",
        price: "₹2,29,781",
      },
    ],
  },
  {
    brand: "Hero",
    bikes: [
      {
        id: 8,
        name: "Splendor Plus",
        model: "Commuter",
        image: "/splendor-plus-xtec-right-side-view-5.webp",
        price: "₹75,441",
      },
      {
        id: 9,
        name: "Xpulse 200",
        model: "Adventure",
        image: "/xpulse-210-right-side-view-6.webp",
        price: "₹1,52,101",
      },
    ],
  },
];

const BikesGallery = () => {
  const [selectedBrand, setSelectedBrand] = useState(categories[0].brand);
  const navigate = useNavigate();

  const handleViewBike = (bikeId) => {
    navigate(`/bike/${bikeId}`);
  };

  const currentCategory = categories.find((cat) => cat.brand === selectedBrand);

  return (
    <div className="min-h-screen bg-black">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-16 md:pt-20 pb-8 md:pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => console.log("Navigate back")}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors mb-8 group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </button>

          {/* Title */}
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
              <span className="text-white">Bikes </span>
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-transparent bg-clip-text animate-pulse">
                Gallery
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Explore our premium collection of high-performance motorcycles
            </p>
          </div>

          {/* Decorative line */}
          <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-12 md:mb-16 rounded-full"></div>
        </div>
      </div>

      {/* Brand Tabs */}
      <div className="relative z-10 px-4 mb-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.brand}
                onClick={() => setSelectedBrand(cat.brand)}
                className={`px-6 md:px-8 py-3 rounded-full font-bold text-sm md:text-lg transition-all duration-300 ${
                  selectedBrand === cat.brand
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/50 scale-105"
                    : "bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-900/30 text-gray-400 hover:border-red-600/50 hover:text-white"
                }`}
              >
                {cat.brand}
              </button>
            ))}
          </div>

          {/* Brand info */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              <span className="text-red-400 font-semibold">
                {currentCategory.bikes.length}
              </span>{" "}
              {currentCategory.bikes.length === 1 ? "model" : "models"}{" "}
              available
            </p>
          </div>
        </div>
      </div>

      {/* Bikes Grid */}
      <div className="relative z-10 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentCategory.bikes.map((bike, index) => (
              <div
                key={bike.id}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-red-900/30 hover:border-red-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20 opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Image container */}
                <div className="relative h-64 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />

                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black hidden items-center justify-center">
                    <svg
                      className="w-24 h-24 text-red-500/30"
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

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                  {/* Brand badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-red-900/40">
                      <span className="text-red-400 text-xs font-bold uppercase tracking-wide">
                        {selectedBrand}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Model tag */}
                  <div className="inline-block px-3 py-1.5 bg-red-600/20 border border-red-600/30 rounded-full mb-3">
                    <span className="text-red-400 text-xs font-semibold uppercase tracking-wide">
                      {bike.model}
                    </span>
                  </div>

                  {/* Bike name */}
                  <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                    {bike.name}
                  </h3>

                  {/* Price */}
                  <p className="text-gray-400 text-xl mb-6 font-bold">
                    {bike.price}
                  </p>

                  {/* View button */}
                  <button
                    onClick={() => handleViewBike(bike.id)}
                    className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/50 active:scale-95 group/btn"
                  >
                    <span className="flex items-center justify-center gap-2">
                      View & Chat
                      <svg
                        className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
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
                </div>

                {/* Card glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent pointer-events-none"></div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BikesGallery;
