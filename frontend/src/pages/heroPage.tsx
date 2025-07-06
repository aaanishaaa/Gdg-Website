import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Code, Sparkles } from "lucide-react";
import Navigation from "@/components/layout/navigation";

const GDGNoidaWebsite: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen p-2 md:p-4">
        {/* Main Container with Rounded Corners */}
        <div className="relative min-h-[calc(100vh-16px)] md:min-h-[calc(100vh-32px)] bg-white rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80')`,
                filter: "brightness(0.3)",
              }}
            />

            <div
              className="absolute inset-0 pointer-events-none bg-no-repeat"
              style={{
                zIndex: 0,
                backgroundImage: `
                                radial-gradient(ellipse 80% 60% at top left,    #EA4335 60%, transparent 70%),
                                radial-gradient(ellipse 80% 60% at top right,   #34A853 60%, transparent 70%),
                                radial-gradient(ellipse 80% 60% at bottom right,#FBBC05 60%, transparent 70%),
                                radial-gradient(ellipse 80% 60% at bottom left, #4285F4 60%, transparent 70%)
                                `,
                backgroundPosition:
                  "top left, top right, bottom right, bottom left",
                backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%",
                backgroundRepeat: "no-repeat",
                opacity: 0.6,
                filter: "blur(200px)",
              }}
            />
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Content Grid */}
          <div
            className="relative z-10 flex flex-col max-w-7xl mx-auto sm:px-6 md:px-8 pb-4 md:pb-6"
            style={{ minHeight: "40vh", justifyContent: "flex-end" }}
          >
            <div className="flex justify-between items-start space-x-4 md:space-x-6">
              {/* Hero Text Bottom-Left */}
              <div className="flex flex-col justify-end md:justify-end md:items-start items-center flex-1 mb-8 md:mb-12 pt-55">
                <div className="flex items-center space-x-2 text-white">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Where Innovation Meets Community
                  </span>
                </div>
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-semibold mb-2 text-center md:text-left">
                  GDG
                  <span className="block md:inline md:pl-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 md:mt-2 font-normal opacity-90">
                    Noida
                  </span>
                </h1>
                <p className="text-white text-sm md:text-md lg:text-lg max-w-md mb-4 md:mb-6 leading-relaxed text-center md:text-left">
                  GDG Noida brings developers together through tech meetups,
                  workshops, and events that inspire growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button
                    className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-md text-gray-50 bg-blue-600 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-xl group"
                    type="submit"
                  >
                    Join Our Next Event
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 19"
                      className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
                    >
                      <path
                        className="fill-gray-800 group-hover:fill-gray-800"
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      ></path>
                    </svg>
                  </button>

                  <button
                    className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-md text-gray-50 bg-blue-600 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-xl group"
                    type="submit"
                  >
                    Explore Our Community
                  </button>
                </div>
              </div>
              <div className="md:flex hidden md:justify-end justify-center items-start pt-20">
                <div className="relative">
                  <div className="bg-gradient-to-br from-white/10 via-blue-500/10 to-blue-900/20 backdrop-blur-2xl rounded-2xl px-2 md:px-10 py-4 md:py-8 border border-white/20 shadow-2xl max-w-xs md:max-w-sm w-65 md:w-80 transition-all duration-300 hover:scale-105 hover:shadow-blue-300/30">
                    <h2 className="text-white text-xl md:text-2xl font-medium mb-4 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                      Community Impact
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between group">
                        <div>
                          <p className="text-gray-300 text-xs md:text-sm font-medium tracking-wide">
                            Active Members
                          </p>
                          <p className="text-white text-2xl md:text-3xl drop-shadow-lg">
                            5,000+
                          </p>
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-blue-400/40 to-blue-600/60 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-100" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between group">
                        <div>
                          <p className="text-gray-300 text-xs md:text-sm font-medium tracking-wide">
                            Events Hosted
                          </p>
                          <p className="text-white text-2xl md:text-3xl drop-shadow-lg">
                            150+
                          </p>
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-green-400/40 to-green-600/60 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Calendar className="w-5 h-5 md:w-6 md:h-6 text-green-100" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between group">
                        <div>
                          <p className="text-gray-300 text-xs md:text-sm font-medium tracking-wide">
                            Projects Built
                          </p>
                          <p className="text-white text-2xl md:text-3xl drop-shadow-lg">
                            500+
                          </p>
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-purple-400/40 to-purple-600/60 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Code className="w-5 h-5 md:w-6 md:h-6 text-purple-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDGNoidaWebsite;
