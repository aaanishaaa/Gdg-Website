import React from 'react';
import brevo from "../assets/logo/brevo.png";
import google from "../assets/logo/google.png"
import wt from "../assets/logo/wt.png";
import neo from "../assets/logo/neo.png";
import flutter from "../assets/logo/flutter.png";
import github from "../assets/logo/github.png";
import ff from "../assets/logo/ff.png";

interface Sponsor {
  id: string;
  name: string;
  website: string;
  logo: string;
}

const SponsorsSection: React.FC = () => {
  const sponsors: Sponsor[] = [
    { id: '1', name: 'Women Techmakers', website: 'https://microsoft.com', logo: wt },
    { id: '2', name: 'Google', website: 'https://google.com', logo: google },
    { id: '3', name: 'Neo4j', website: 'https://amazon.com', logo: neo },
    { id: '4', name: 'Brevo', website: 'https://www.brevo.com/', logo: brevo },
    { id: '5', name: 'Flutter', website: 'https://meta.com', logo: flutter },
    { id: '6', name: 'Github', website: 'https://netflix.com', logo: github },
    { id: '7', name: 'Flutter Flow', website: 'https://tesla.com', logo: ff },
    { id: '8', name: 'Spotify', website: 'https://spotify.com', logo: 'https://via.placeholder.com/120x60/f3f4f6/6b7280?text=Logo' },
  ];

  const handleSponsorClick = (website: string) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="sponsors-and-partners" className="bg-white pt-12">
      <div className="max-w-5xl mx-auto lg:py-20 text-center">
         <div className="text-center my-12">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-10 ">
            Sponsors & Partners
          </h1>
        </div>
        <p className="text-lg text-gray-600  lg:mb-20 font-normal">
          Learn, build, and grow with the community
        </p>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-10 px-2 hover:[animation-play-state:paused]"
            style={{
              animation: 'scroll 20s linear infinite'
            }}
          >
            {/* First set of sponsors */}
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                onClick={() => handleSponsorClick(sponsor.website)}
                className="flex-shrink-0 w-44 h-24 bg-white rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300  hover:-translate-y-2  hover:grayscale-0 hover:opacity-100"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="max-w-full max-h-full object-contain p-4"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {sponsors.map((sponsor) => (
              <div
                key={`duplicate-${sponsor.id}`}
                onClick={() => handleSponsorClick(sponsor.website)}
                className="flex-shrink-0 w-44 h-24 bg-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1   hover:grayscale-0 hover:opacity-100"
              >
                <img 
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="max-w-full max-h-full object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default SponsorsSection;