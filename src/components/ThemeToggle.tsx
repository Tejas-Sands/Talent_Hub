
import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ThemeToggle = () => {
  // Theme state (no persistence, resets on refresh)
  const [isDark, setIsDark] = useState(false);

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // Placeholder front-end functions
  const handleMessageSend = (message: string) => {
    console.log('Message sent:', message);
    toast.success('Message sent successfully!');
  };

  const handleSaveProfile = (profileData: Record<string, unknown>) => {
    console.log('Profile saved:', profileData);
    toast.success('Profile saved successfully!');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      <div className="container mx-auto p-4">
        {/* Theme Toggle Button */}
        <Button
          onClick={toggleTheme}
          variant="outline"
          size="icon"
          className="fixed top-4 right-4 h-10 w-10 animate-scale-in hover:scale-105 transition-transform"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-navy-700" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Demo Content */}
        <div className="mt-20 space-y-8">
          <h1 className={`text-3xl font-bold ${
            isDark ? 'text-white' : 'text-navy-900'
          }`}>
            Theme Toggle Demo
          </h1>

          {/* Message Demo */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Message Demo</h2>
            <Button
              onClick={() => handleMessageSend('Hello World!')}
              className={`${
                isDark ? 'bg-navy-600 hover:bg-navy-700' : 'bg-navy-700 hover:bg-navy-800'
              } text-white`}
            >
              Send Test Message
            </Button>
          </div>

          {/* Profile Demo */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Profile Demo</h2>
            <Button
              onClick={() => handleSaveProfile({ name: 'John Doe', role: 'Developer' })}
              className={`${
                isDark ? 'bg-navy-600 hover:bg-navy-700' : 'bg-navy-700 hover:bg-navy-800'
              } text-white`}
            >
              Save Test Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
