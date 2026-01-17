import React from "react";

// DecryptedText component
const DecryptedText = ({
  text,
  speed = 120,
  animateOn = "view",
  className = "",
}) => {
  const [displayText, setDisplayText] = React.useState("");
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    if (animateOn === "view") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              animateText();
              setHasAnimated(true);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    } else {
      animateText();
    }
  }, []);

  const animateText = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+";
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, speed);
  };

  return (
    <span ref={elementRef} className={className}>
      {displayText || text}
    </span>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background bike images - more visible and behind title */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Bike images with higher opacity and less blur */}
        <img
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop"
          alt=""
          className="absolute top-10 left-5 w-80 h-60 object-cover rounded-2xl opacity-30 blur-[2px] transform rotate-6"
        />
        <img
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop"
          alt=""
          className="absolute top-40 right-10 w-72 h-56 object-cover rounded-2xl opacity-30 blur-[2px] transform -rotate-12"
        />
        <img
          src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop"
          alt=""
          className="absolute bottom-32 left-20 w-64 h-48 object-cover rounded-2xl opacity-30 blur-[2px] transform -rotate-6"
        />
        <img
          src="https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?w=800&h=600&fit=crop"
          alt=""
          className="absolute bottom-20 right-32 w-96 h-64 object-cover rounded-2xl opacity-30 blur-[2px] transform rotate-3"
        />
        <img
          src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=600&fit=crop"
          alt=""
          className="absolute top-1/2 left-10 w-72 h-52 object-cover rounded-2xl opacity-30 blur-[2px] transform -rotate-3"
        />

        {/* Animated gradient blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Light overlay to keep text readable but let images show through */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

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
        <a href="/gallery">
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
        </a>

        {/* Animated Numbers Section */}
        <div className="flex flex-wrap justify-center gap-10 mb-16 mt-16">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-red-500">
              <DecryptedText
                text="1200+"
                speed={120}
                animateOn="view"
                className="text-5xl font-extrabold text-red-500"
              />
            </span>
            <span className="text-gray-400 mt-2 text-lg">Total Bikes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-red-500">
              <DecryptedText
                text="800+"
                speed={120}
                animateOn="view"
                className="text-5xl font-extrabold text-red-500"
              />
            </span>
            <span className="text-gray-400 mt-2 text-lg">Happy Customers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-red-500">
              <DecryptedText
                text="25+"
                speed={120}
                animateOn="view"
                className="text-5xl font-extrabold text-red-500"
              />
            </span>
            <span className="text-gray-400 mt-2 text-lg">Brands</span>
          </div>
        </div>

        {/* Bikes Showcase Section */}
        <div className="mt-20 max-w-5xl w-full mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Bikes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example bikes from BikesGallery.jsx */}
            {[
              {
                name: "Classic 350",
                model: "Cruiser Series",
                image: "/enfield350.webp",
                price: "₹1,93,080",
              },
              {
                name: "Duke 390",
                model: "Naked Sport",
                image: "/duke390.webp",
                price: "₹3,11,000",
              },
              {
                name: "Splendor Plus",
                model: "Commuter",
                image: "/splendor-plus-xtec-right-side-view-5.webp",
                price: "₹75,441",
              },
            ].map((bike, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900/70 to-black/80 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg"
              >
                <div className="relative h-56 bg-black flex items-center justify-center">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-700 hover:scale-105"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1.5 bg-red-600/20 border border-red-600/30 rounded-full mb-3">
                    <span className="text-red-400 text-xs font-semibold uppercase tracking-wide">
                      {bike.model}
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {bike.name}
                  </h3>
                  <p className="text-gray-400 text-lg mb-2 font-bold">
                    {bike.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </div>
  );
};

export default App;
