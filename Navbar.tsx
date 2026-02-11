import { useState } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                BEWDA.COM
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#categories" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Spirits</a>
                <a href="#featured" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Best Sellers</a>
                <a href="/upload" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Upload Product</a>
                <a href="#" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Search className="h-6 w-6" />
              </button>
              <button className="text-gray-400 hover:text-amber-400 transition-colors relative">
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">2</span>
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-gray-300 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#categories" className="text-gray-300 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium">Spirits</a>
            <a href="#featured" className="text-gray-300 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium">Best Sellers</a>
            <a href="/upload" className="text-gray-300 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium">Upload Product</a>
            <a href="#" className="text-gray-300 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium">About Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}
