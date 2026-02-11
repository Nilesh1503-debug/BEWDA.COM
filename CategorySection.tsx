import { Wine, Beer, Martini, GlassWater, Sparkles, Cherry } from 'lucide-react';

const categories = [
  { 
    name: 'Whiskey', 
    icon: GlassWater, 
    count: '50+ Brands',
    popular: 'Royal Stag, Blenders Pride',
    gradient: 'from-amber-600 to-amber-800'
  },
  { 
    name: 'Beer', 
    icon: Beer, 
    count: '30+ Brands',
    popular: 'Kingfisher, Budweiser',
    gradient: 'from-yellow-500 to-yellow-700'
  },
  { 
    name: 'Vodka', 
    icon: Martini, 
    count: '25+ Brands',
    popular: 'Smirnoff, Absolut',
    gradient: 'from-blue-400 to-blue-600'
  },
  { 
    name: 'Rum', 
    icon: Wine, 
    count: '20+ Brands',
    popular: 'Old Monk, Bacardi',
    gradient: 'from-red-600 to-red-800'
  },
  { 
    name: 'Tequila', 
    icon: GlassWater, 
    count: '15+ Brands',
    popular: 'Jose Cuervo, Don Julio',
    gradient: 'from-lime-500 to-lime-700'
  },
  { 
    name: 'Scotch', 
    icon: Sparkles, 
    count: '40+ Brands',
    popular: 'JW, Chivas Regal',
    gradient: 'from-orange-600 to-orange-800'
  },
  { 
    name: 'Wine', 
    icon: Cherry, 
    count: '35+ Brands',
    popular: 'Sula, Jacob\'s Creek',
    gradient: 'from-purple-600 to-purple-800'
  },
  { 
    name: 'Shots', 
    icon: Martini, 
    count: '20+ Options',
    popular: 'Jägermeister, Fireball',
    gradient: 'from-pink-500 to-pink-700'
  },
];

export function CategorySection() {
  return (
    <section id="categories" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Shop by Category</h2>
          <p className="text-gray-400">Explore our wide selection of premium alcohol - English & Indian brands</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all cursor-pointer border border-white/5 hover:border-amber-500/50 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative flex flex-col items-center text-center">
                <div className={`p-4 bg-gradient-to-br ${category.gradient} rounded-full mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{category.name}</h3>
                <p className="text-sm text-amber-500 font-medium mb-2">{category.count}</p>
                <p className="text-xs text-gray-500">{category.popular}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Brands */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Trusted by India's favorite brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-2xl font-bold text-white">Kingfisher</span>
            <span className="text-2xl font-bold text-white">Royal Stag</span>
            <span className="text-2xl font-bold text-white">Old Monk</span>
            <span className="text-2xl font-bold text-white">Smirnoff</span>
            <span className="text-2xl font-bold text-white">Budweiser</span>
            <span className="text-2xl font-bold text-white">JW</span>
          </div>
        </div>
      </div>
    </section>
  );
}
