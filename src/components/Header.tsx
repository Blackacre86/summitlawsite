
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import DesktopNavigation from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation";
import MobileMenuButton from "./navigation/MobileMenuButton";
import ContactButton from "./navigation/ContactButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-mountain-stone-300 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center justify-center">
          <Logo variant="dark" />
        </div>
        
        {/* Desktop Navigation */}
        <DesktopNavigation handleNavigation={handleNavigation} />
        
        {/* Mobile Menu Button */}
        <MobileMenuButton 
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          handleNavigation={handleNavigation}
        />
        
        {/* Desktop Contact Button */}
        <ContactButton handleNavigation={handleNavigation} />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNavigation 
        isMenuOpen={isMenuOpen}
        handleNavigation={handleNavigation}
      />
    </header>
  );
};

export default Header;
