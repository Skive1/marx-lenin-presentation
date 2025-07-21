// src/components/Header.jsx
import { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Header({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'I. Khái quát', to: 'about' },
    { name: 'II. Tính tất yếu', to: 'industrialization' },
    { name: 'III. Ngành nghề truyền thống', to: 'traditional' },
    { name: 'IV. Hội nhập kinh tế', to: 'integration' },
    { name: 'V. Giải pháp kết hợp', to: 'modernization' },
    { name: 'VI. Kết luận', to: 'conclusion' }
  ];

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400 font-display">
          Công Nghiệp Hóa & Hiện Đại Hóa
        </h1>
        
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
            {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-primary-800" />}
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-primary-800" />}
          </button>
          
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? (
              <FaTimes className="text-gray-700 dark:text-gray-300 text-2xl" />
            ) : (
              <FaBars className="text-gray-700 dark:text-gray-300 text-2xl" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-4 py-2">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
