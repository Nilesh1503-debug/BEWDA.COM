import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Luxury Bar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-600/50 rounded-full px-4 py-2 mb-6">
              <span className="text-amber-400 text-sm font-medium">🇮🇳 India's #1 Online Liquor Store</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Premium Daru <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Ab Ghar Pe Milega!
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-300 mb-8">
              Whiskey, Rum, Beer, Vodka, Wine - India's favorite brands at MRP. 
              Fast delivery in Delhi, Mumbai, Bangalore, Hyderabad & more!
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-amber-500" />
                <span>Delivery in 30 mins</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>50+ Cities</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 group">
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-gray-500 hover:border-white text-white font-bold rounded-lg transition-all">
                Browse Collection
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10L+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-zinc-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-500">Brands Available</div>
              </div>
              <div className="w-px h-12 bg-zinc-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8⭐</div>
                <div className="text-sm text-gray-500">Customer Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
