import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Code, Sparkles } from 'lucide-react';
import Navigation from '@/components/layout/navigation';

const GDGNoidaWebsite: React.FC = () => {
    return (
        <div>
            <div className="min-h-screen bg-white p-2 md:p-4">
                {/* Main Container with Rounded Corners */}
                <div className="relative min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] bg-gray-900 rounded-2xl md:rounded-3xl overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0">
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

                    {/* Hero Section */}
                    <div className="relative z-10 flex items-center min-h-[calc(100vh-200px)] px-8">
                        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Hero Text */}
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <Sparkles className="w-5 h-5 text-blue-400" />
                                    <span className="text-blue-400 text-sm font-medium">Google Developer Group</span>
                                </div>
                                <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-light mb-6">
                                    GDG
                                    <span className="block text-3xl md:text-4xl mt-2 font-light opacity-90">Noida</span>
                                </h1>
                                <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                                    Where innovation meets community. Join 5000+ developers
                                    building the future with Google technologies.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8"
                                    >
                                        Join Next Event
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
                                    >
                                        Explore Community
                                    </Button>
                                </div>
                            </div>

                            {/* Right Side - Feature Cards */}
                            <div className="flex justify-end">
                                <div className="relative">
                                    {/* Stats Card */}
                                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 max-w-md">
                                        <h2 className="text-white text-2xl font-light mb-6">
                                            Community Impact
                                        </h2>
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-gray-400 text-sm">Active Members</p>
                                                    <p className="text-white text-3xl font-light">5,000+</p>
                                                </div>
                                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                                                    <Users className="w-6 h-6 text-blue-400" />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-gray-400 text-sm">Events Hosted</p>
                                                    <p className="text-white text-3xl font-light">150+</p>
                                                </div>
                                                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                                                    <Calendar className="w-6 h-6 text-green-400" />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-gray-400 text-sm">Projects Built</p>
                                                    <p className="text-white text-3xl font-light">500+</p>
                                                </div>
                                                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                                                    <Code className="w-6 h-6 text-purple-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Event Card */}
                                    {/* <div className="absolute -top-8 -right-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 w-64 shadow-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span className="text-white/90 text-sm">Next Event</span>
                </div>
                <h3 className="text-white font-medium mb-1">Flutter Forward</h3>
                <p className="text-white/80 text-sm">Jan 15 • 6:00 PM</p>
              </div> */}
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