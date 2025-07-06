import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Code, ChevronRight, Rocket } from "lucide-react";
// import ScrollingTestimonials from "./Testimonial";
import SponsorsSection from "./sponsers";
import BlogInsights from "./blog";
import PhotoGallery from "./PhotoGallery";
// import keynote from "../assets/videos/keynote.mp4";

export default function SecondSection() {
  const [flippedCards, setFlippedCards] = useState({
    members: false,
    impacted: false,
    events: false,
    workshops: false,
  });

  const handleCardFlip = (cardName: keyof typeof flippedCards) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Flutter Forward Extended",
      date: "January 15",
      time: "6:00 PM",
      description: "Deep dive into Flutter's latest features",
      attendees: 120,
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    },
    {
      id: 2,
      title: "Cloud Study Jam",
      date: "January 22",
      time: "5:30 PM",
      description: "Master Google Cloud Platform",
      attendees: 80,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
  ];

  return (
    <div>
      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="relative z-10 py-20 ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 text-2xl md:text-6xl font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-lg">
              Learn, build, and grow with the community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600  rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative bg-white rounded-3xl border-3 border-black overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300">
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
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 text-sm font-medium">
                          {event.date}
                        </span>
                      </div>
                      <span className="text-gray-600 text-sm">
                        {event.time}
                      </span>
                    </div>
                    <h3 className="text-gray-900 text-xl font-medium mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-500 text-sm">
                          {event.attendees} attending
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-700 group"
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
              className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8"
            >
              View All Events
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="relative z-10 ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group">
              <div className="bg-white rounded-3xl p-8 border-2 border-black hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 text-xl font-medium mb-3">
                  Learn & Grow
                </h3>
                <p className="text-gray-600">
                  Access workshops, codelabs, and hands-on sessions with Google
                  technologies
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-3xl p-8 border-2 border-black hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 text-xl font-medium mb-3">
                  Connect
                </h3>
                <p className="text-gray-600">
                  Network with developers, designers, and tech enthusiasts in
                  Noida
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 border-2 border-black hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 text-xl font-medium mb-3">
                  Build Together
                </h3>
                <p className="text-gray-600">
                  Collaborate on projects and contribute to open-source
                  initiatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SponsorsSection />
      </section>
      {/* <section>
        <ScrollingTestimonials />
      </section> */}

      <section>
        <div className="text-center my-12">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-10 ">
            Together We Build
          </h1>
        </div>
        <div className="flex justify-center mb-20 px-5">
          <div className="w-full max-w-8xl aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/04dgaxEPow8?si=tBqitdbhLvpkwSbS"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <section>
        <BlogInsights />
      </section>
      
      <div id="community" className="text-center mb-5">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 ">
          Community Impact.
        </h1>
      </div>
      <section className="pb-5">
        <div className="flex flex-col items-center gap-20 p-8 max-w-1xl mx-auto">
          {/* Top row */}
          <div className="flex flex-wrap justify-center gap-20 w-full">
            <div
              className="w-70 h-52 group cursor-pointer"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => handleCardFlip('members')}
              onMouseLeave={() => handleCardFlip('members')}
            >
              <div
                className="w-full h-full relative transition-transform duration-1000"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards.members ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full bg-red-500 text-white flex items-center justify-center rounded-lg text-3xl md:text-4xl font-bold"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-center">Total <br /> members</p>
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full bg-gray-400 text-white flex items-center justify-center rounded-lg text-3xl md:text-4xl font-bold"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-4xl md:text-5xl font-bold">40+</p>
                </div>
              </div>
            </div>
            <div
              className="w-70 h-52 group cursor-pointer"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => handleCardFlip('impacted')}
              onMouseLeave={() => handleCardFlip('impacted')}
            >
              <div
                className="w-full h-full relative transition-transform duration-1000"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards.impacted ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-lg text-3xl md:text-4xl font-bold"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-center">People <br /> Impacted</p>
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full bg-gray-400 text-white flex items-center justify-center rounded-lg text-3xl md:text-4xl font-bold"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-4xl md:text-5xl font-bold">10k+</p>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom row */}
          <div className="flex flex-wrap justify-center gap-20 w-full">
            <div
              className="w-70 h-52 group cursor-pointer"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => handleCardFlip('events')}
              onMouseLeave={() => handleCardFlip('events')}
            >
              <div
                className="w-full h-full relative transition-transform duration-1000"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards.events ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full bg-yellow-400 text-white flex items-center justify-center rounded-lg text-3xl md:text-4xl font-bold"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-center">Events <br /> hosted</p>
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full bg-gray-400 text-white flex items-center justify-center rounded-lg text-3xl md:text-4xl font-bold"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-4xl md:text-5xl font-bold">35+</p>
                </div>
              </div>
            </div>
            <div
              className="w-70 h-52 group cursor-pointer"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => handleCardFlip('workshops')}
              onMouseLeave={() => handleCardFlip('workshops')}
            >
              <div
                className="w-full h-full relative transition-transform duration-1000"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards.workshops ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full bg-green-500 text-white flex items-center justify-center rounded-lg text-3xl md:text-4xl font-bold"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-center">Workshops <br /> Hours Run</p>
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full bg-gray-400 text-white flex items-center justify-center rounded-lg text-3xl md:text-4xl font-bold"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-4xl md:text-5xl font-bold">150 Hrs+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <PhotoGallery />
      </section>
      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="bg-gray-50 rounded-3xl p-12 border border-gray-200">
            <h2 className="text-gray-900 text-3xl md:text-4xl mb-4">
              Ready to join the community?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Be part of something bigger. Learn, grow, and build amazing things together.
            </p>
            <button className="bg-green-500 hover:bg-yellow-400 text-white font-medium py-3 px-8 rounded-full transition-colors">
              Join GDG Noida
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
