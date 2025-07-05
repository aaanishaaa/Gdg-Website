// import React from 'react';
// import { Button } from '@/components/ui/button';

// const HomePage: React.FC = () => {
//   return (
//     <div className="relative min-h-screen bg-gray-900 overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1920&q=80')`,
//             filter: 'brightness(0.4)'
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent" />
//       </div>

//       {/* Navigation */}
//       <nav className="relative z-10 flex items-center justify-between px-8 py-6">
//         <div className="flex items-center space-x-8">
//           {/* Logo */}
//           <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
//             <div className="w-6 h-6 bg-gray-900 rounded-sm"></div>
//           </div>
          
//           {/* Nav Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
//             <a href="#" className="text-white hover:text-gray-300 transition-colors">Studio</a>
//             <a href="#" className="text-white hover:text-gray-300 transition-colors">Works</a>
//             <a href="#" className="text-white hover:text-gray-300 transition-colors">Pricing</a>
//           </div>
//         </div>

//         <div className="flex items-center space-x-6">
//           <a href="#" className="text-white hover:text-gray-300 transition-colors">News & Insights</a>
//           <a href="#" className="text-white hover:text-gray-300 transition-colors">FAQ</a>
//           <Button 
//             variant="secondary" 
//             className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6"
//           >
//             Contact
//           </Button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center min-h-[calc(100vh-100px)] px-8">
//         <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Hero Text */}
//           <div>
//             <h1 className="text-white text-7xl md:text-8xl font-light mb-8">
//               sonido
//               <span className="block text-3xl md:text-4xl mt-4 font-light opacity-80">studio</span>
//             </h1>
//             <p className="text-gray-300 text-lg max-w-lg">
//               From branding to code, we design, build, and animate ideas that 
//               make your business impossible to ignore.
//             </p>
//           </div>

//           {/* Right Side - Feature Card */}
//           <div className="flex justify-end">
//             <div className="relative">
//               {/* Small copyright symbol */}
//               <div className="absolute -top-12 left-0 text-gray-400 text-sm">©</div>
              
//               <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 max-w-md">
//                 <h2 className="text-white text-2xl font-light leading-tight mb-4">
//                   We recognized a gap in<br />
//                   the creative industry
//                 </h2>
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   Partner with us to drive growth, innovation, and create 
//                   connections that elevate your business to the next level. 
//                   Linking your business to innovation.
//                 </p>
//               </div>

//               {/* Product Image Card */}
//               <div className="absolute -top-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl">
//                 <img 
//                   src="https://images.unsplash.com/photo-1627384113858-ce93ff568d1f?w=400&q=80"
//                   alt="Product showcase"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// };

// export default HomePage;




// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Calendar, Users, Code, ChevronRight, Menu, X, Sparkles, Zap, Rocket } from 'lucide-react';

// const GDGNoidaWebsite: React.FC = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const upcomingEvents = [
//     {
//       id: 1,
//       title: 'Flutter Forward Extended',
//       date: 'January 15',
//       time: '6:00 PM',
//       description: 'Deep dive into Flutter\'s latest features',
//       attendees: 120,
//       image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80'
//     },
//     {
//       id: 2,
//       title: 'Cloud Study Jam',
//       date: 'January 22',
//       time: '5:30 PM',
//       description: 'Master Google Cloud Platform',
//       attendees: 80,
//       image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
//     }
//   ];

//   return (
//     <div className="relative min-h-screen bg-gray-900 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80')`,
//             filter: 'brightness(0.3)'
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-purple-900/90" />
        
//         {/* Animated gradient orbs */}
//         <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
//       </div>

//       {/* Navigation */}
//       <nav className="relative z-20 flex items-center justify-between px-8 py-6">
//         <div className="flex items-center space-x-8">
//           {/* Logo */}
//           <div className="flex items-center space-x-3">
//             <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
//               <span className="text-white font-bold text-xl">G</span>
//             </div>
//             <span className="text-white font-light text-xl">GDG <span className="font-normal">Noida</span></span>
//           </div>
          
//           {/* Nav Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
//             <a href="#" className="text-white/80 hover:text-white transition-colors">Events</a>
//             <a href="#" className="text-white/80 hover:text-white transition-colors">Community</a>
//             <a href="#" className="text-white/80 hover:text-white transition-colors">Resources</a>
//           </div>
//         </div>

//         <div className="flex items-center space-x-6">
//           <a href="#" className="hidden md:inline text-white/80 hover:text-white transition-colors">Blog</a>
//           <a href="#" className="hidden md:inline text-white/80 hover:text-white transition-colors">About</a>
//           <Button 
//             variant="secondary" 
//             className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 rounded-full px-6"
//           >
//             Join Community
//           </Button>
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden text-white p-2"
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden absolute top-20 left-0 right-0 z-20 bg-gray-900/95 backdrop-blur-lg border-t border-white/10">
//           <div className="px-8 py-6 space-y-4">
//             <a href="#" className="block text-white/80 hover:text-white">Home</a>
//             <a href="#" className="block text-white/80 hover:text-white">Events</a>
//             <a href="#" className="block text-white/80 hover:text-white">Community</a>
//             <a href="#" className="block text-white/80 hover:text-white">Resources</a>
//             <a href="#" className="block text-white/80 hover:text-white">Blog</a>
//             <a href="#" className="block text-white/80 hover:text-white">About</a>
//           </div>
//         </div>
//       )}

//       {/* Hero Section */}
//       <div className="relative z-10 flex items-center min-h-[calc(100vh-100px)] px-8">
//         <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Hero Text */}
//           <div>
//             <div className="flex items-center gap-2 mb-6">
//               <Sparkles className="w-5 h-5 text-blue-400" />
//               <span className="text-blue-400 text-sm font-medium">Google Developer Group</span>
//             </div>
//             <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-light mb-6">
//               GDG
//               <span className="block text-3xl md:text-4xl mt-2 font-light opacity-90">Noida</span>
//             </h1>
//             <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
//               Where innovation meets community. Join 5000+ developers 
//               building the future with Google technologies.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button 
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8"
//               >
//                 Join Next Event
//               </Button>
//               <Button 
//                 size="lg"
//                 variant="outline"
//                 className="border-white/20 text-white hover:bg-white hover:text-black bg-white-10 rounded-full px-8"
//               >
//                 Explore Community
//               </Button>
//             </div>
//           </div>

//           {/* Right Side - Feature Cards */}
//           <div className="flex justify-end">
//             <div className="relative">
//               {/* Stats Card */}
//               <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 max-w-md">
//                 <h2 className="text-white text-2xl font-light mb-6">
//                   Community Impact
//                 </h2>
//                 <div className="space-y-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-400 text-sm">Active Members</p>
//                       <p className="text-white text-3xl font-light">5,000+</p>
//                     </div>
//                     <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
//                       <Users className="w-6 h-6 text-blue-400" />
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-400 text-sm">Events Hosted</p>
//                       <p className="text-white text-3xl font-light">150+</p>
//                     </div>
//                     <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
//                       <Calendar className="w-6 h-6 text-green-400" />
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-400 text-sm">Projects Built</p>
//                       <p className="text-white text-3xl font-light">500+</p>
//                     </div>
//                     <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
//                       <Code className="w-6 h-6 text-purple-400" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Event Card */}
//               {/* <div className="absolute -top-8 -right-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 w-64 shadow-2xl">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Zap className="w-4 h-4 text-yellow-300" />
//                   <span className="text-white/90 text-sm">Next Event</span>
//                 </div>
//                 <h3 className="text-white font-medium mb-1">Flutter Forward</h3>
//                 <p className="text-white/80 text-sm">Jan 15 • 6:00 PM</p>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Upcoming Events Section */}
//       <section className="relative z-10 py-20">
//         <div className="max-w-7xl mx-auto px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-white text-4xl md:text-5xl font-light mb-4">
//               Upcoming Events
//             </h2>
//             <p className="text-gray-400 text-lg">
//               Learn, build, and grow with the community
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {upcomingEvents.map((event) => (
//               <div key={event.id} className="group relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
//                 <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
//                   <div className="h-48 overflow-hidden">
//                     <img 
//                       src={event.image} 
//                       alt={event.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-2">
//                         <Calendar className="w-4 h-4 text-blue-400" />
//                         <span className="text-blue-400 text-sm">{event.date}</span>
//                       </div>
//                       <span className="text-gray-400 text-sm">{event.time}</span>
//                     </div>
//                     <h3 className="text-white text-xl font-medium mb-2">{event.title}</h3>
//                     <p className="text-gray-400 mb-4">{event.description}</p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <Users className="w-4 h-4 text-gray-500" />
//                         <span className="text-gray-500 text-sm">{event.attendees} attending</span>
//                       </div>
//                       <Button 
//                         variant="ghost" 
//                         className="text-blue-400 hover:text-blue-300 group"
//                       >
//                         Register
//                         <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Button 
//               size="lg"
//               variant="outline"
//               className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
//             >
//               View All Events
//               <ChevronRight className="w-5 h-5 ml-2" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Community Features */}
//       <section className="relative z-10 py-20">
//         <div className="max-w-7xl mx-auto px-8">
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="group">
//               <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
//                 <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                   <Rocket className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-white text-xl font-medium mb-3">Learn & Grow</h3>
//                 <p className="text-gray-400">
//                   Access workshops, codelabs, and hands-on sessions with Google technologies
//                 </p>
//               </div>
//             </div>

//             <div className="group">
//               <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
//                 <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                   <Users className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-white text-xl font-medium mb-3">Connect</h3>
//                 <p className="text-gray-400">
//                   Network with developers, designers, and tech enthusiasts in Noida
//                 </p>
//               </div>
//             </div>

//             <div className="group">
//               <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
//                 <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                   <Code className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-white text-xl font-medium mb-3">Build Together</h3>
//                 <p className="text-gray-400">
//                   Collaborate on projects and contribute to open-source initiatives
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative z-10 py-20">
//         <div className="max-w-4xl mx-auto px-8 text-center">
//           <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
//             <h2 className="text-white text-3xl md:text-4xl font-light mb-4">
//               Ready to join the community?
//             </h2>
//             <p className="text-gray-300 text-lg mb-8">
//               Be part of something bigger. Learn, grow, and build amazing things together.
//             </p>
//             <Button 
//               size="lg"
//               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8"
//             >
//               Join GDG Noida
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative z-10 py-12 border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-8">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="flex items-center space-x-3 mb-4 md:mb-0">
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
//                 <span className="text-white font-bold">G</span>
//               </div>
//               <span className="text-white/80">GDG Noida</span>
//             </div>
//             <div className="text-gray-400 text-sm">
//               © 2025 GDG Noida. Part of Google Developer Groups.
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default GDGNoidaWebsite;