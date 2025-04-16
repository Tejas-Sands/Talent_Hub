
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-navy-900">
      <div className="text-center p-8 rounded-xl shadow-lg bg-white dark:bg-navy-800 animate-fade-in">
        <h1 className="text-6xl font-bold mb-4 text-navy-700 dark:text-white">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Oops! Page not found</p>
        <Link to="/" className="inline-block px-6 py-3 rounded-lg bg-navy-700 text-white hover:bg-navy-800 transition-all duration-300 hover:scale-105">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
