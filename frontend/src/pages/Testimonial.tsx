import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  username: string;
  avatar: string;
  content: string;
  time: string;
  date: string;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cassie Evans",
    username: "@cassiecods",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    content: "Not exaggerating when I say GDG Noida Devfest was my web event of the year. I go to a lot of conferences but the vibes at this little web-nerd fest were immaculate.",
    time: "1:21 PM",
    date: "Jul 12, 2024",
    tag: "#GDG Noida"
  },
  {
    id: 2,
    name: "Sarah Chen",
    username: "@sarahbuilds",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    content: "The workshops were incredible! Finally found a conference that balances technical depth with practical application. Already planning to attend next year.",
    time: "3:45 PM",
    date: "Jul 15, 2024",
    tag: "#GDG Workshop"
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    username: "@mikedev",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    content: "Best networking event I've been to in years. The intimate setting made it easy to have meaningful conversations with fellow developers.",
    time: "11:30 AM",
    date: "Jul 18, 2024",
    tag: "#Networking Magic"
  },
  {
    id: 4,
    name: "Priya Sharma",
    username: "@priyacodes",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
    content: "GDG Noida events are always top-notch! The community spirit and technical excellence make every session worth attending. Kudos to the organizers!",
    time: "2:15 PM",
    date: "Jul 20, 2024",
    tag: "#Community Love"
  }
];

export default function ScrollingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
          setIsScrolling(false);
        }, 500);
      }
    };

    const throttledScroll = throttle(handleScroll, 1000);
    window.addEventListener('scroll', throttledScroll);
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [isScrolling]);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const throttle = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    let lastExecTime = 0;
    return function (...args: any[]) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(...args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + testimonials.length) % testimonials.length;
    
    if (position === 0) {
      return {
        transform: 'translateY(0px) rotate(0deg) scale(1)',
        opacity: 1,
        zIndex: 10
      };
    } else if (position === 1) {
      return {
        transform: 'translateY(-20px) rotate(5deg) scale(0.95)',
        opacity: 0.8,
        zIndex: 9
      };
    } else if (position === 2) {
      return {
        transform: 'translateY(-40px) rotate(-3deg) scale(0.9)',
        opacity: 0.6,
        zIndex: 8
      };
    } else {
      return {
        transform: 'translateY(-60px) rotate(2deg) scale(0.85)',
        opacity: 0.3,
        zIndex: 7
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br overflow-hidden">
      <div className="flex items-center justify-center min-h-screen relative">
        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 -rotate-90 text-4xl font-black text-black opacity-15 select-none pointer-events-none">
            GDG NOIDA
          </div>

          {/* Stacked testimonial cards */}
          <div className="relative h-96">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={getCardStyle(index)}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-900 h-full">
                  {/* Header with profile info and Twitter icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name} avatar`}
                        className="w-16 h-16 rounded-full border-2 border-gray-200"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-lg text-gray-500">{testimonial.username}</p>
                      </div>
                    </div>
                    <div className="text-blue-400">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Tweet content */}
                  <div className="mb-6">
                    <p className="text-gray-900 text-lg leading-relaxed font-medium">
                      {testimonial.content}
                    </p>
                  </div>
                  
                  {/* Footer with timestamp and tag */}
                  <div className="text-gray-500 text-base">
                    <span>{testimonial.time} · {testimonial.date}</span>
                    {testimonial.tag && (
                      <span className="block mt-1 text-gray-400">
                        · {testimonial.tag}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}