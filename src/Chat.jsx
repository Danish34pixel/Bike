import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Dummy chat storage (in-memory)
const chatStore = {};

// Chat Component
const Chat = ({ bikeId }) => {
  const [messages, setMessages] = useState(chatStore[bikeId] || []);
  const [input, setInput] = useState("");
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (input.trim()) {
      const newMessages = [
        ...messages,
        { text: input, time: new Date().toLocaleTimeString() },
      ];
      chatStore[bikeId] = newMessages;
      setMessages(newMessages);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 px-4">
      <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-red-900/40 rounded-3xl overflow-hidden shadow-2xl shadow-red-900/20">
        <div className="bg-gradient-to-r from-red-600/20 to-red-700/10 border-b border-red-900/40 px-8 py-5">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 blur-lg opacity-50 animate-pulse"></div>
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-600/50">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold">
                Chat about this bike
              </h3>
              <p className="text-gray-400 text-sm">
                Ask questions or share your thoughts
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-96 overflow-y-auto p-8 bg-black/40"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#dc2626 #1f2937" }}
        >
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-500 blur-2xl opacity-20 animate-pulse"></div>
                <svg
                  className="w-20 h-20 text-red-500/40 relative"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-lg font-medium">
                No messages yet
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Start the conversation about this bike!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className="opacity-0 animate-slideIn"
                  style={{
                    animationDelay: `${idx * 0.05}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="group">
                    <div className="bg-gradient-to-br from-red-900/30 to-red-950/20 border border-red-800/40 rounded-2xl p-5 hover:border-red-600/60 hover:shadow-lg hover:shadow-red-900/30 transition-all duration-300">
                      <p className="text-white text-base leading-relaxed mb-3">
                        {msg.text}
                      </p>
                      <div className="flex items-center gap-2 text-gray-500">
                        <svg
                          className="w-3.5 h-3.5 text-red-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-xs font-medium">{msg.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 border-t border-red-900/40 p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="w-full px-6 py-4 bg-black/60 border border-red-900/40 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 focus:ring-2 focus:ring-red-500/30 transition-all text-base font-medium"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600/0 via-red-600/0 to-red-600/0 group-focus-within:from-red-600/10 group-focus-within:via-red-600/5 group-focus-within:to-transparent transition-all duration-300 pointer-events-none"></div>
            </div>
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-2xl hover:from-red-500 hover:to-red-600 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-xl hover:shadow-red-600/50 hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:hover:shadow-none group/btn"
            >
              <span className="flex items-center gap-2 whitespace-nowrap">
                Send
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </span>
            </button>
          </div>
          <p className="text-gray-600 text-xs mt-4 text-center font-medium">
            💡 Press <span className="text-red-400">Enter</span> to send quickly
          </p>
        </div>
      </div>
    </div>
  );
};

// All bikes from the gallery with real Indian prices and details
const bikes = [
  {
    id: 1,
    name: "Classic 350",
    model: "Royal Enfield",
    image: "/enfield350.webp",
    price: "₹1,93,080",
    specs: { engine: "349cc", power: "20.2 HP", torque: "27 Nm" },
    description: "Timeless design meets modern engineering",
  },
  {
    id: 2,
    name: "Himalayan",
    model: "Royal Enfield",
    image: "/himalyan.webp",
    price: "₹2,15,900",
    specs: { engine: "452cc", power: "39.5 HP", torque: "40 Nm" },
    description: "Adventure-ready motorcycle for all terrains",
  },
  {
    id: 3,
    name: "Meteor 350",
    model: "Royal Enfield",
    image: "/meteor350.webp",
    price: "₹2,05,900",
    specs: { engine: "349cc", power: "20.2 HP", torque: "27 Nm" },
    description: "Cruising comfort with classic appeal",
  },
  {
    id: 4,
    name: "Duke 390",
    model: "Naked Sport",
    image: "/duke390.webp",
    price: "₹3,11,000",
    specs: { engine: "398.63cc", power: "45 HP", torque: "39 Nm" },
    description: "Aggressive naked sport bike for thrill seekers",
  },
  {
    id: 5,
    name: "RC 390",
    model: "Sport Racing",
    image: "/Rc390.webp",
    price: "₹3,18,173",
    specs: { engine: "373cc", power: "43.5 HP", torque: "37 Nm" },
    description: "Track-inspired sport racing motorcycle",
  },
  {
    id: 6,
    name: "Pulsar 220F",
    model: "Sport Tourer",
    image: "/Pulsar-220F-2023-Coming.webp",
    price: "₹1,40,000",
    specs: { engine: "220cc", power: "20.4 HP", torque: "18.55 Nm" },
    description: "Iconic sport tourer with a legacy",
  },
  {
    id: 7,
    name: "Dominar 400",
    model: "Power Cruiser",
    image: "/20250704110627_Bajaj Dominar 400 update teaser.webp",
    price: "₹2,29,781",
    specs: { engine: "373cc", power: "40 HP", torque: "35 Nm" },
    description: "Power cruiser for long rides and performance",
  },
  {
    id: 8,
    name: "Splendor Plus",
    model: "Commuter",
    image: "/splendor-plus-xtec-right-side-view-5.webp",
    price: "₹75,441",
    specs: { engine: "97.2cc", power: "8.02 HP", torque: "8.05 Nm" },
    description: "India's most trusted commuter motorcycle",
  },
  {
    id: 9,
    name: "Xpulse 200",
    model: "Hero",
    image: "/xpulse-210-right-side-view-6.webp",
    price: "₹1,52,101",
    specs: { engine: "199.6cc", power: "19.1 HP", torque: "17.35 Nm" },
    description: "Affordable adventure motorcycle for all roads",
  },
];

const BikeDetail = () => {
  const { bikeId } = useParams();
  const bike = bikes.find((b) => String(b.id) === String(bikeId));

  if (!bike) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <svg
            className="w-24 h-24 text-red-500/30 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-white text-2xl font-bold mb-2">Bike not found</h2>
          <p className="text-gray-400">
            The bike you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 px-4 py-8 md:py-12">
        {/* Back button */}
        <div className="max-w-7xl mx-auto mb-8">
          <button
            onClick={() => console.log("Navigate back")}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors group"
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
            Back to Gallery
          </button>
        </div>

        {/* Bike Details Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Image Section */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-red-600/30 to-red-900/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-red-900/30 rounded-3xl overflow-hidden shadow-2xl shadow-red-900/10 group-hover:border-red-700/50 transition-all duration-500">
                {/* Image container */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-900 to-black overflow-hidden">
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
                      className="w-32 h-32 text-red-500/30"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                  {/* Bottom info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-red-400 text-sm font-semibold">
                          Available Now
                        </span>
                      </div>
                      <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-red-900/40">
                        <span className="text-white text-sm font-bold">
                          {bike.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              {/* Model tag */}
              <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/40 rounded-full mb-4 w-fit backdrop-blur-sm">
                <span className="text-red-400 text-sm font-semibold uppercase tracking-wide">
                  {bike.model}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-3 tracking-tight">
                {bike.name}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-lg mb-6">{bike.description}</p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-5xl font-black bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-transparent bg-clip-text">
                  {bike.price}
                </span>
                <span className="text-gray-500 text-sm font-medium">
                  Starting from
                </span>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-900/30 rounded-2xl p-5 hover:border-red-600/50 transition-all duration-300 group/card">
                  <div className="mb-3 relative">
                    <div className="absolute inset-0 bg-red-500 blur-xl opacity-0 group-hover/card:opacity-30 transition-opacity"></div>
                    <svg
                      className="w-7 h-7 text-red-500 relative"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">
                    Engine
                  </p>
                  <p className="text-white font-bold text-lg">
                    {bike.specs.engine}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-900/30 rounded-2xl p-5 hover:border-red-600/50 transition-all duration-300 group/card">
                  <div className="mb-3 relative">
                    <div className="absolute inset-0 bg-red-500 blur-xl opacity-0 group-hover/card:opacity-30 transition-opacity"></div>
                    <svg
                      className="w-7 h-7 text-red-500 relative"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">
                    Power
                  </p>
                  <p className="text-white font-bold text-lg">
                    {bike.specs.power}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-900/30 rounded-2xl p-5 hover:border-red-600/50 transition-all duration-300 group/card">
                  <div className="mb-3 relative">
                    <div className="absolute inset-0 bg-red-500 blur-xl opacity-0 group-hover/card:opacity-30 transition-opacity"></div>
                    <svg
                      className="w-7 h-7 text-red-500 relative"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">
                    Torque
                  </p>
                  <p className="text-white font-bold text-lg">
                    {bike.specs.torque}
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-2xl hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/50 hover:scale-105 active:scale-95 group/btn">
                  <span className="flex items-center justify-center gap-2">
                    Book Test Ride
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
                <button className="px-8 py-4 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-900/40 text-white font-bold rounded-2xl hover:border-red-600/60 hover:bg-gray-900/50 transition-all duration-300">
                  Compare Models
                </button>
              </div>
            </div>
          </div>

          {/* Chat Section */}
          <Chat bikeId={bike.id} />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }

        div::-webkit-scrollbar {
          width: 10px;
        }

        div::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }

        div::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #dc2626, #991b1b);
          border-radius: 10px;
          border: 2px solid #1f2937;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ef4444, #dc2626);
        }
      `}</style>
    </div>
  );
};

export default BikeDetail;
