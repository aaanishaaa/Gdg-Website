import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, Calendar, Users, FileText, BookOpen, User, Menu, X } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import SmallLogo from '@/assets/logo/small-logo.png';
import Logo from '@/assets/logo/gdg-logo.png';

// Navigation data
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

// Icon mapping
const iconMap = {
    Home,
    Calendar,
    Users,
    FileText,
    BookOpen,
    User
};

export default function Navigation() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [navigationItems, setNavigationItems] = useState([]);

    useEffect(() => {
        // Set navigation data
        setNavigationItems(navigationData.navigationItems);
    }, []);

    const handleNavigationClick = (route: string, e: React.MouseEvent) => {
        e.preventDefault();

        // Close dropdown first
        setIsDropdownOpen(false);

        // Small delay to ensure dropdown closes before navigation
        setTimeout(() => {
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
        }, 100);
    };


    return (
        <>
            {/* Navigation */}
            <nav className="relative z-20 flex items-center justify-between px-8 py-6">
                <div className="flex items-center space-x-8">
                    {/* Logo */}
                    <img src={SmallLogo} alt="Logo" className="max-w-14 md:hidden block" />
                    <img src={Logo} alt="Logo" className="max-w-32 hidden md:block" />

                    {/* Nav Links - Desktop only */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.route}
                                onClick={(e) => handleNavigationClick(item.route, e)}
                                className="text-white/80 hover:text-white transition-colors cursor-pointer"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    <a href="#" className="hidden md:inline text-white/80 hover:text-white transition-colors">Blog</a>
                    <a href="#" className="hidden md:inline text-white/80 hover:text-white transition-colors">About</a>
                    <Button
                        variant="secondary"
                        className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 rounded-full px-6"
                    >
                        Join Community
                    </Button>

                    {/* Mobile/Tablet - Dropdown Menu */}
                    <div className="lg:hidden">
                        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
                                >
                                    {isDropdownOpen ? <X size={32} /> : <Menu size={32} />}
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                align="end"
                                className="w-56 mt-2 bg-gray-100/95 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg"
                            >
                                {navigationItems.map((item) => {
                                    const IconComponent = iconMap[item.icon];
                                    return (
                                        <DropdownMenuItem
                                            key={item.id}
                                            onSelect={(e) => {
                                                // Prevent default dropdown behavior
                                                e.preventDefault();
                                            }}
                                        >
                                            <a
                                                href={item.route}
                                                onClick={(e) => handleNavigationClick(item.route, e)}
                                                className="flex items-center gap-3 w-full cursor-pointer text-black"
                                            >
                                                <IconComponent className="w-4 h-4 text-black/60" />
                                                <span className="text-sm">{item.name}</span>
                                            </a>
                                        </DropdownMenuItem>
                                    );
                                })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
        </>
    );
}