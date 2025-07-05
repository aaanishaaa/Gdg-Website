import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Code } from 'lucide-react';
import Navigation from '@/components/layout/navigation';

const GDGNoidaWebsite: React.FC = () => {
    return (
        <div>
            <div className="min-h-screen bg-white p-2 md:p-4">
                {/* Main Container with Rounded Corners */}
                <div className="relative min-h-[calc(100vh-32px)] bg-gray-900 rounded-2xl overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80')`,
                                filter: 'brightness(0.3)'
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
                                backgroundPosition: "top left, top right, bottom right, bottom left",
                                backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%",
                                backgroundRepeat: "no-repeat",
                                opacity: 0.6,
                                filter: "blur(10px)",
                            }}
                        />


                    </div>

                    {/* Navigation */}
                    <Navigation />

                    {/* Content Grid */}
                    <div className="relative z-10 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-8">

                        {/* Card Top-Right */}
                        <div className="md:flex hidden md:justify-end justify-center items-start">
                            <div className="relative">
                                {/* Stats Card */}
                                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10 max-w-md">
                                    <h2 className="text-white text-xl md:text-2xl font-light mb-4 md:mb-6">
                                        Community Impact
                                    </h2>
                                    <div className="space-y-4 md:space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-400 text-xs md:text-sm">Active Members</p>
                                                <p className="text-white text-2xl md:text-3xl font-light">5,000+</p>
                                            </div>
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                                                <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-400 text-xs md:text-sm">Events Hosted</p>
                                                <p className="text-white text-2xl md:text-3xl font-light">150+</p>
                                            </div>
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                                                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-400 text-xs md:text-sm">Projects Built</p>
                                                <p className="text-white text-2xl md:text-3xl font-light">500+</p>
                                            </div>
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                                                <Code className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Text Bottom-Left */}
                        <div className="flex flex-col justify-center md:justify-start md:items-start items-center flex-1">
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-2 text-center md:text-left">
                                GDG
                                <span className="block md:inline md:pl-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 md:mt-2 font-light opacity-90">Noida</span>
                            </h1>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-6 md:mb-8 leading-relaxed text-center md:text-left">
                                Where innovation meets community.
                                GDG Noida brings developers together through inclusive tech meetups, workshops, and events that inspire growth.
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
    );
};

export default GDGNoidaWebsite;