// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Header({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'I. Khái quát', to: 'about' },
    { name: 'II. Tính tất yếu', to: 'industrialization' },
    { name: 'III. Hội nhập kinh tế', to: 'integration' },
    { name: 'IV. Ngành nghề truyền thống', to: 'traditional' },
    { name: 'V. Giải pháp kết hợp', to: 'modernization' },
    { name: 'VI. Kết luận', to: 'conclusion' }
  ];

  return (
    <header className={`fixed w-full backdrop-blur-md z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/85 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]' 
        : 'bg-transparent'
    }`}>
      <div className={`absolute inset-0 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
        <div className="absolute inset-0 bg-pattern-dark opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <h1 className="text-2xl font-bold font-display transition-all duration-300 text-white">
          <span className="font-accent bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Công Nghiệp Hóa & Hiện Đại Hóa</span> 
        </h1>
        
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-sm uppercase tracking-wide font-medium transition-all duration-300
                relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 
                after:bg-gradient-gold after:transition-all after:duration-300 hover:after:w-full
                ${isScrolled 
                  ? 'text-gray-300 hover:text-gold-300' 
                  : 'text-white/90 hover:text-gold-300'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 mr-2 rounded-full bg-gray-800/80 border border-gray-700/50 hover:border-gold-600/30"
          >
            {darkMode ? 
              <FaSun className="text-gold-400" /> : 
              <FaMoon className="text-gold-400" />
            }
          </button>
          
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full bg-gray-800/60 border border-gray-700/50 hover:border-gold-600/30"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-gold-300" />
            ) : (
              <FaBars className="text-2xl text-gold-300" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md px-4 py-2 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] border-t border-gold-900/30">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block py-3 text-gray-300 hover:text-gold-300 cursor-pointer border-b border-gray-800 last:border-0 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-gold-500 mr-2">{item.name.split('.')[0]}.</span>
              {item.name.split('.')[1]}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
