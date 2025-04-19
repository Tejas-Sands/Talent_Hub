import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Menu, X, Search, Bell, MessageSquare, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { SignInDialog } from './SignInDialog';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b transition-colors duration-300">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl text-navy-600">Talent<span className="text-metallic-400">Hub</span></span>
            </Link>
            <nav className="hidden md:ml-10 md:flex md:space-x-4 dark:text-gray-300">
              <Link to="/" className={cn("nav-link", isActive("/") && "active-nav-link")}>
                <span className="dark:text-slate-200">Talent</span>
              </Link>
              <Link to="/jobs" className={cn("nav-link", isActive("/jobs") && "active-nav-link")}>
                <span className="dark:text-slate-200">Jobs</span>
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search talents or jobs..."
                className="pl-10 py-1.5 h-9"
              />
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleTheme}
              className="animate-scale-in hover:scale-105 transition-transform"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button variant="outline" size="icon" className="relative animate-scale-in hover:scale-105 transition-transform">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </Button>
            <Button variant="outline" size="icon" className="relative animate-scale-in hover:scale-105 transition-transform">
              <MessageSquare className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="animate-scale-in hover:scale-105 transition-transform"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="default" 
              className="bg-navy-700 hover:bg-navy-800 animate-scale-in hover:scale-105 transition-transform"
              onClick={() => setIsSignInOpen(true)}
            >
              Sign In
            </Button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy-800 hover:text-navy-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy-700"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="space-y-1 px-4 pt-2 pb-3">
            <Link 
              to="/" 
              className={cn(
                "block py-2 px-3 rounded-md font-medium", 
                isActive("/") 
                  ? "bg-navy-700 text-white" 
                  : "text-navy-800 hover:bg-navy-50"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Talent
            </Link>
            <Link 
              to="/jobs" 
              className={cn(
                "block py-2 px-3 rounded-md font-medium", 
                isActive("/jobs") 
                  ? "bg-navy-700 text-white" 
                  : "text-navy-800 hover:bg-navy-50"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="relative mt-3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 py-1.5 h-9 w-full"
                />
              </div>
              <div className="flex justify-between mt-4">
                <Button variant="outline" size="icon" className="relative animate-scale-in hover:scale-105 transition-transform">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </Button>
                <Button variant="outline" size="icon" className="relative animate-scale-in hover:scale-105 transition-transform">
                  <MessageSquare className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </Button>
                <Button variant="outline" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="default" className="bg-navy-700 hover:bg-navy-800 animate-scale-in hover:scale-105 transition-transform">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <SignInDialog
        open={isSignInOpen}
        onOpenChange={setIsSignInOpen}
      />
    </header>
  );
};

export default Navbar;
