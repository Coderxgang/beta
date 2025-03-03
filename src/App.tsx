import React, { useState, useRef } from 'react';
import { 
  Search, User, ShoppingCart, ChevronDown, Zap, Trophy, Star, 
  MousePointer, Keyboard, Headphones, Square, Gamepad, HardDrive, 
  Armchair, Mic, Globe, ChevronLeft, ChevronRight, ArrowRight
} from 'lucide-react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import { products } from './data/products';

function App() {
  const [cartItems, setCartItems] = useState<number>(0);
  const flashSaleRef = useRef<HTMLDivElement>(null);
  const bestSellerRef = useRef<HTMLDivElement>(null);
  const newArrivalRef = useRef<HTMLDivElement>(null);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  const flashSaleProducts = products.filter(product => product.onSale);
  const bestSellerProducts = products.filter(product => product.bestSeller);
  const newArrivalProducts = products.filter(product => product.newArrival);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 300;
      const scrollPosition = direction === 'left' 
        ? ref.current.scrollLeft - scrollAmount 
        : ref.current.scrollLeft + scrollAmount;
      
      ref.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gamer-black text-gray-200">
      <Header cartItems={cartItems} />
      
      {/* Main Navigation */}
      <nav className="bg-gamer-dark py-2 sticky top-0 z-10 shadow-md overflow-hidden border-b border-gamer-light">
        <div className="container mx-auto px-4">
          <ul className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
            <li className="nav-item">
              <MousePointer size={16} className="text-neon-blue" />
              <span>Mice</span>
            </li>
            <li className="nav-item">
              <Keyboard size={16} className="text-neon-purple" />
              <span>Keyboards</span>
            </li>
            <li className="nav-item">
              <Headphones size={16} className="text-neon-pink" />
              <span>Headsets</span>
            </li>
            <li className="nav-item">
              <Square size={16} className="text-neon-green" />
              <span>Pads</span>
            </li>
            <li className="nav-item">
              <Gamepad size={16} className="text-neon-blue" />
              <span>Controllers</span>
            </li>
            <li className="nav-item">
              <HardDrive size={16} className="text-neon-purple" />
              <span>PC Parts</span>
            </li>
            <li className="nav-item">
              <Armchair size={16} className="text-neon-pink" />
              <span>Chairs</span>
            </li>
            <li className="nav-item">
              <Mic size={16} className="text-neon-green" />
              <span>Streaming</span>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="relative rounded-lg overflow-hidden mb-12 border border-gamer-light">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Gaming Setup" 
            className="w-full h-[400px] object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gamer-black/90 to-transparent flex flex-col justify-center px-12">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
              Level Up Your Game
            </h1>
            <p className="text-xl mb-6 max-w-md text-gray-300">Premium gear for the competitive edge you need.</p>
            <button className="bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 font-medium py-3 px-6 rounded-md w-fit transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Flash Sales Section */}
        <section className="mb-16 relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Zap className="text-neon-blue mr-2" size={24} />
              <h2 className="text-2xl font-bold text-white">Flash Sales</h2>
            </div>
            <a href="#" className="flex items-center text-neon-blue hover:text-neon-purple transition-colors">
              <span className="mr-1">See More</span>
              <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => scroll(flashSaleRef, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gamer-dark/80 hover:bg-neon-blue/20 p-2 rounded-full shadow-lg text-white transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div 
              ref={flashSaleRef}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
            >
              {flashSaleProducts.map((product) => (
                <div key={product.id} className="min-w-[260px] max-w-[260px]">
                  <ProductCard 
                    product={product} 
                    addToCart={addToCart} 
                  />
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => scroll(flashSaleRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gamer-dark/80 hover:bg-neon-blue/20 p-2 rounded-full shadow-lg text-white transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="mb-16 relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Trophy className="text-neon-purple mr-2" size={24} />
              <h2 className="text-2xl font-bold text-white">Best Sellers</h2>
            </div>
            <a href="#" className="flex items-center text-neon-purple hover:text-neon-blue transition-colors">
              <span className="mr-1">See More</span>
              <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => scroll(bestSellerRef, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gamer-dark/80 hover:bg-neon-purple/20 p-2 rounded-full shadow-lg text-white transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div 
              ref={bestSellerRef}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
            >
              {bestSellerProducts.map((product) => (
                <div key={product.id} className="min-w-[260px] max-w-[260px]">
                  <ProductCard 
                    product={product} 
                    addToCart={addToCart} 
                  />
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => scroll(bestSellerRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gamer-dark/80 hover:bg-neon-purple/20 p-2 rounded-full shadow-lg text-white transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="mb-16 relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Star className="text-neon-green mr-2" size={24} />
              <h2 className="text-2xl font-bold text-white">New Arrivals</h2>
            </div>
            <a href="#" className="flex items-center text-neon-green hover:text-neon-blue transition-colors">
              <span className="mr-1">See More</span>
              <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => scroll(newArrivalRef, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gamer-dark/80 hover:bg-neon-green/20 p-2 rounded-full shadow-lg text-white transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div 
              ref={newArrivalRef}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
            >
              {newArrivalProducts.map((product) => (
                <div key={product.id} className="min-w-[260px] max-w-[260px]">
                  <ProductCard 
                    product={product} 
                    addToCart={addToCart} 
                  />
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => scroll(newArrivalRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gamer-dark/80 hover:bg-neon-green/20 p-2 rounded-full shadow-lg text-white transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gamer-dark py-10 border-t border-gamer-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">GamingGear</h3>
              <p className="text-gray-400">Premium gaming accessories for professional gamers and enthusiasts.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">Shipping Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">Gaming Mice</a></li>
                <li><a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">Mechanical Keyboards</a></li>
                <li><a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">Headsets</a></li>
                <li><a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">Gaming Chairs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
              <p className="text-gray-400 mb-2">Subscribe for exclusive deals and updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gamer-gray text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-neon-blue w-full"
                />
                <button className="bg-neon-blue/80 hover:bg-neon-blue text-gamer-black font-medium px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gamer-light mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 GamingGear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;