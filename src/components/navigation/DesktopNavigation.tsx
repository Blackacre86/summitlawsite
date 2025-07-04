
import React from "react";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import PracticeAreasDropdown from "./PracticeAreasDropdown";

type DesktopNavigationProps = {
  handleNavigation: (path: string) => void;
};

const DesktopNavigation = ({ handleNavigation }: DesktopNavigationProps) => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <button 
            onClick={() => handleNavigation('/')} 
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-summit-slate-700 hover:bg-summit-slate-50 hover:text-summit-blue-700 transition-colors duration-200 border border-summit-slate-200 hover:border-summit-blue-300"
          >
            Home
          </button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <PracticeAreasDropdown handleNavigation={handleNavigation} />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button 
            onClick={() => handleNavigation('/prosecutor-advantage')} 
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-summit-slate-700 hover:bg-summit-slate-50 hover:text-summit-blue-700 transition-colors duration-200 border border-summit-slate-200 hover:border-summit-blue-300"
          >
            The Summit Advantage
          </button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button 
            onClick={() => handleNavigation('/about')} 
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-summit-slate-700 hover:bg-summit-slate-50 hover:text-summit-blue-700 transition-colors duration-200 border border-summit-slate-200 hover:border-summit-blue-300"
          >
            About Us
          </button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button 
            onClick={() => handleNavigation('/our-approach')} 
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-summit-slate-700 hover:bg-summit-slate-50 hover:text-summit-blue-700 transition-colors duration-200 border border-summit-slate-200 hover:border-summit-blue-300"
          >
            Our Approach
          </button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
