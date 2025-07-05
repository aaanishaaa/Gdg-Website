import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Code, ChevronRight, Rocket } from 'lucide-react';


export default function secondSection() {

    const upcomingEvents = [
        {
            id: 1,
            title: 'Flutter Forward Extended',
            date: 'January 15',
            time: '6:00 PM',
            description: 'Deep dive into Flutter\'s latest features',
            attendees: 120,
            image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80'
        },
        {
            id: 2,
            title: 'Cloud Study Jam',
            date: 'January 22',
            time: '5:30 PM',
            description: 'Master Google Cloud Platform',
            attendees: 80,
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
        }
    ];

  return (
    <div>
          {/* Upcoming Events Section */}
          <section id="events" className="relative z-10 py-20 bg-gray-800">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-white text-4xl md:text-5xl font-light mb-4">
                            Upcoming Events
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Learn, build, and grow with the community
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-blue-400" />
                                                <span className="text-blue-400 text-sm">{event.date}</span>
                                            </div>
                                            <span className="text-gray-400 text-sm">{event.time}</span>
                                        </div>
                                        <h3 className="text-white text-xl font-medium mb-2">{event.title}</h3>
                                        <p className="text-gray-400 mb-4">{event.description}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-gray-500" />
                                                <span className="text-gray-500 text-sm">{event.attendees} attending</span>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                className="text-blue-400 hover:text-blue-300 group"
                                            >
                                                Register
                                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
                        >
                            View All Events
                            <ChevronRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Community Features */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="group">
                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Rocket className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-white text-xl font-medium mb-3">Learn & Grow</h3>
                                <p className="text-gray-400">
                                    Access workshops, codelabs, and hands-on sessions with Google technologies
                                </p>
                            </div>
                        </div>

                        <div className="group">
                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-white text-xl font-medium mb-3">Connect</h3>
                                <p className="text-gray-400">
                                    Network with developers, designers, and tech enthusiasts in Noida
                                </p>
                            </div>
                        </div>

                        <div className="group">
                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Code className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-white text-xl font-medium mb-3">Build Together</h3>
                                <p className="text-gray-400">
                                    Collaborate on projects and contribute to open-source initiatives
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
                        <h2 className="text-white text-3xl md:text-4xl font-light mb-4">
                            Ready to join the community?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Be part of something bigger. Learn, grow, and build amazing things together.
                        </p>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8"
                        >
                            Join GDG Noida
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-12 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-3 mb-4 md:mb-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold">G</span>
                            </div>
                            <span className="text-white/80">GDG Noida</span>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © 2025 GDG Noida. Part of Google Developer Groups.
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  );
}
