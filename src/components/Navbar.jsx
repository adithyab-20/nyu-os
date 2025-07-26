import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-purple-800">
          NYU Operating Systems
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-purple-800' 
                  : 'text-gray-600 hover:text-purple-800'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/homework" 
              className={`font-medium transition-colors ${
                location.pathname.includes('/homework') 
                  ? 'text-purple-800' 
                  : 'text-gray-600 hover:text-purple-800'
              }`}
            >
              Homework Assignments
            </Link>
          </li>
          <li>
            <Link 
              to="/installations" 
              className={`font-medium transition-colors ${
                location.pathname.includes('/installations') 
                ? 'text-purple-800' 
                : 'text-gray-600 hover:text-purple-800'
              }`}
            >
              Installations
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar; 