import React, { useState } from 'react';
import { Search, User, ShoppingCart, ChevronDown, Globe, Gamepad } from 'lucide-react';

interface HeaderProps {
  cartItems: number;
}

const Header: React.FC<HeaderProps> = ({ cartItems }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  return (
    <header className="bg-gamer-black py-4 border-b border-gamer-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Gamepad className="text-neon-blue mr-2" size={32} />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
              GamingGear
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search gaming accessories..."
                className="w-full bg-gamer-dark text-white border border-gamer-light rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-300 hover:text-neon-blue transition-colors"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              >
                <Globe size={20} className="mr-1" />
                <span className="mr-1">EN</span>
                <ChevronDown size={16} />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-gamer-dark rounded-md shadow-lg z-20 border border-gamer-light">
                  <ul className="py-1">
                    <li className="flex items-center px-4 py-2 hover:bg-gamer-gray cursor-pointer">
                      <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-5 mr-2" />
                      English
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gamer-gray cursor-pointer">
                      <img src="https://flagcdn.com/w20/es.png" alt="Spain" className="w-5 mr-2" />
                      Español
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gamer-gray cursor-pointer">
                      <img src="https://flagcdn.com/w20/fr.png" alt="France" className="w-5 mr-2" />
                      Français
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gamer-gray cursor-pointer">
                      <img src="https://flagcdn.com/w20/de.png" alt="Germany" className="w-5 mr-2" />
                      Deutsch
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-300 hover:text-neon-blue transition-colors"
                onClick={() => setShowUserDropdown(!showUserDropdown)}
              >
                <User size={20} className="mr-1" />
                <span className="mr-1">Account</span>
                <ChevronDown size={16} />
              </button>
              
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-gamer-dark rounded-md shadow-lg z-20 border border-gamer-light">
                  <ul className="py-1">
                    <li className="px-4 py-2 hover:bg-gamer-gray cursor-pointer">Login</li>
                    <li className="px-4 py-2 hover:bg-gamer-gray cursor-pointer">Register</li>
                    <li className="px-4 py-2 hover:bg-gamer-gray cursor-pointer">My Account</li>
                    <li className="px-4 py-2 hover:bg-gamer-gray cursor-pointer">Order History</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Shopping Cart */}
            <div className="relative">
              <button className="flex items-center text-gray-300 hover:text-neon-blue transition-colors">
                <ShoppingCart size={20} className="mr-1" />
                <span>Cart</span>
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-neon-blue text-gamer-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;