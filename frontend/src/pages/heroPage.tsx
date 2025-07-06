import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Code, Sparkles } from "lucide-react";
import Navigation from "@/components/layout/navigation";
import bg from "../assets/bg/bg.jpg"
const GDGNoidaWebsite: React.FC = () => {
    return (
        <div>
            <div className="min-h-screen p-2 md:p-4">
                {/* Main Container with Rounded Corners */}
                <div className="relative min-h-[calc(100vh-16px)] md:min-h-[calc(100vh-32px)] bg-gray-900 rounded-2xl overflow-hidden">
                    {/* Background Image - Absolute bottom layer */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${bg})`,
                            filter: "brightness(0.3)",
                        }}
                    />

                    {/* Gradient Overlay - Above background image */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: `
                            radial-gradient(ellipse 80% 75% at top left,    #EA4335 60%, transparent 70%),
                            radial-gradient(ellipse 80% 75% at top right,   #34A853 60%, transparent 70%),
                            radial-gradient(ellipse 80% 75% at bottom right,#FBBC05 60%, transparent 70%),
                            radial-gradient(ellipse 80% 75% at bottom left, #4285F4 60%, transparent 70%)
                            `,
                            backgroundPosition:
                                "top left, top right, bottom right, bottom left",
                            backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%",
                            backgroundRepeat: "no-repeat",
                            opacity: 0.6,
                            filter: "blur(25px)",
                        }}
                    />

                    {/* All content in relative container */}
                    <div className="relative">
                        {/* Navigation */}
                        <Navigation />

                        {/* Content Grid */}
                        <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-8">

                            {/* Card Top-Right - With isolation and higher stacking */}
                            <div className="md:flex hidden md:justify-end justify-center items-start relative" style={{ isolation: "isolate", zIndex: 100 }}>
                                <div className="relative">
                                    {/* Dark background behind card to make it pop */}
                                    <div className="absolute inset-0 bg-gray-900/80 rounded-2xl blur-xl scale-110" />
                                    
                                    <div className="relative bg-gradient-to-br from-white/10 via-blue-500/10 to-blue-900/20 backdrop-blur-2xl rounded-2xl px-2 md:px-10 py-4 md:py-8 border border-white/20 shadow-lg max-w-xs md:max-w-sm w-65 md:w-80 transition-all duration-300 hover:scale-105 hover:shadow-[#34A853]">
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

                            {/* Hero Text Bottom-Left */}
                            <div className="flex flex-col justify-center md:justify-start md:items-start items-center flex-1">
                                <div className="flex items-center space-x-2 text-white">
                                    <Sparkles className="w-5 h-5" />
                                    <span className="text-sm font-medium">
                                        Where Innovation Meets Community
                                    </span>
                                </div>
                                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-2 text-center md:text-left">
                                    GDG
                                    <span className="block md:inline md:pl-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 md:mt-2 font-normal opacity-90">
                                        Noida
                                    </span>
                                </h1>
                                <p className="text-gray-200 text-sm md:text-md lg:text-lg max-w-xl mb-4 md:mb-6 leading-relaxed text-center md:text-left">
                                    GDG Noida brings developers together through tech meetups,
                                    workshops, and events that inspire growth.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-6 md:px-8 text-sm md:text-base"
                                    >
                                        Join Next Event
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 rounded-full px-4 md:px-6 text-sm md:text-base"
                                    >
                                        Explore Community
                                    </Button>
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