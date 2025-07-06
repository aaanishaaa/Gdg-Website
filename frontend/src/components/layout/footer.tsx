import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import GDGLogo from '@/assets/logo/gdg-logo.png'; // adjust to your actual logo path
import Static from '@/assets/bg/static.png';

// Navigation data (same as in navigation.tsx)
const navigationData = {
    navigationItems: [
        {
            id: "home",
            name: "Home",
            route: "/",
            icon: "Home"
        },
        {
            id: "upcoming-events",
            name: "Upcoming Events",
            route: "#upcoming-events",
            icon: "Calendar"
        },
        {
            id: "sponsors-and-partners",
            name: "Sponsors & Partners",
            route: "#sponsors-and-partners",
            icon: "Users"
        },
        {
            id: "blogs",
            name: "Blogs",
            route: "#blogs",
            icon: "BookOpen"
        },
        {
            id: "community",
            name: "Community",
            route: "#community",
            icon: "FileText"
        },
        {
            id: "gallery",
            name: "Gallery",
            route: "#gallery",
            icon: "User"
        }
    ]
};

export const Footer: React.FC = () => {
    const handleNavigationClick = (route: string, e: React.MouseEvent) => {
        e.preventDefault();

        if (route.startsWith('#')) {
            // Handle hash links (scroll to section)
            const targetId = route.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Update URL with hash
            window.history.pushState(null, '', route);
        } else if (route.startsWith('/')) {
            // Handle regular routes (navigate to page)
            window.location.href = route;
        }
    };

    return (
        <div className='p-2 md:p-4'>
        <footer className="bg-black text-white rounded-b-2xl relative overflow-hidden">
            {/* Custom background */}
            <div
                style={{
                    // background: "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
                    backgroundImage: `url(${Static})`,
                    opacity: 0.2,
                    inset: "-200%",
                    width: "400%",
                    height: "400%",
                    position: "absolute",
                    willChange: "transform",
                    transform: "translateX(-10%) translateY(10%)"
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {/* left column */}
                <div className="space-y-8">
                    {/* Sitemap */}
                    <div>
                        <h3 className="text-gray-400 uppercase mb-4 tracking-wider">Sitemap</h3>
                        <ul className="space-y-2">
                            {navigationData.navigationItems.map((item) => (
                                <li key={item.id}>
                                    <a 
                                        href={item.route} 
                                        className="hover:underline cursor-pointer"
                                        onClick={(e) => handleNavigationClick(item.route, e)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Social */}
                    <div>
                        <h3 className="text-gray-400 uppercase mb-4 tracking-wider">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-blue-400">
                                <Instagram size={24} />
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400">
                                <Twitter size={24} />
                            </a>
                            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-400">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-blue-400">
                                <Youtube size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* right column */}
                <div className="flex items-center justify-center md:justify-end">
                    <img src={GDGLogo} alt="GDG Noida Logo" className="h-24 w-auto" />
                </div>
            </div>

            {/* bottom bar */}
            <div className="border-t border-white">
                <div className="max-w-7xl mx-auto px-8 py-4 text-center text-white text-sm">
                    © 2025 GDG Noida. All rights reserved. <br /> Part of Google Developer Groups.

                </div>
            </div>
        </footer>
    </div>
    );
};

export default Footer;