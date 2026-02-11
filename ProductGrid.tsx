import { Star, ShoppingCart, Flame } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Royal Stag',
    category: 'Whiskey',
    price: '₹650',
    originalPrice: '₹750',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    size: '750ml'
  },
  {
    id: 2,
    name: 'Blenders Pride',
    category: 'Whiskey',
    price: '₹890',
    originalPrice: '₹950',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Popular',
    size: '750ml'
  },
  {
    id: 3,
    name: 'McDowell\'s No.1',
    category: 'Whiskey',
    price: '₹480',
    originalPrice: '₹520',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1602858983899-5e6e4a52f721?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: null,
    size: '750ml'
  },
  {
    id: 4,
    name: 'Old Monk Rum',
    category: 'Rum',
    price: '₹350',
    originalPrice: '₹400',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1598018553943-de1a457836c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Legend',
    size: '750ml'
  },
  {
    id: 5,
    name: 'Kingfisher Premium',
    category: 'Beer',
    price: '₹120',
    originalPrice: '₹140',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Chilled',
    size: '650ml'
  },
  {
    id: 6,
    name: 'Smirnoff Vodka',
    category: 'Vodka',
    price: '₹950',
    originalPrice: '₹1100',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1616423664074-907f1ea5d7d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Premium',
    size: '750ml'
  },
  {
    id: 7,
    name: 'Black Dog Scotch',
    category: 'Scotch',
    price: '₹1,450',
    originalPrice: '₹1,600',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1574770118700-201ed92f3a93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Premium',
    size: '750ml'
  },
  {
    id: 8,
    name: 'Jose Cuervo Tequila',
    category: 'Tequila',
    price: '₹2,800',
    originalPrice: '₹3,200',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Imported',
    size: '750ml'
  },
];

const whiskeys = [
  {
    id: 9,
    name: 'Johnnie Walker Black',
    category: 'Scotch Whisky',
    price: '₹3,200',
    originalPrice: '₹3,600',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1608885898957-a559228e5003?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Premium',
    size: '750ml'
  },
  {
    id: 10,
    name: 'Jack Daniel\'s',
    category: 'Tennessee Whiskey',
    price: '₹2,950',
    originalPrice: '₹3,300',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1609767580028-7b884c4d7f11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Imported',
    size: '750ml'
  },
  {
    id: 11,
    name: 'Chivas Regal 12',
    category: 'Scotch Whisky',
    price: '₹2,800',
    originalPrice: '₹3,100',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1558730570-ff2a2f1a9d2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Premium',
    size: '750ml'
  },
  {
    id: 12,
    name: 'Imperial Blue',
    category: 'Whiskey',
    price: '₹540',
    originalPrice: '₹600',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Value',
    size: '750ml'
  },
];

const beers = [
  {
    id: 13,
    name: 'Budweiser',
    category: 'Lager Beer',
    price: '₹180',
    originalPrice: '₹200',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'King of Beers',
    size: '650ml'
  },
  {
    id: 14,
    name: 'Heineken',
    category: 'Premium Lager',
    price: '₹190',
    originalPrice: '₹220',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Imported',
    size: '650ml'
  },
  {
    id: 15,
    name: 'Corona Extra',
    category: 'Mexican Beer',
    price: '₹210',
    originalPrice: '₹250',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1619550073338-a4b75bdae098?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Imported',
    size: '355ml'
  },
  {
    id: 16,
    name: 'Tuborg Strong',
    category: 'Strong Beer',
    price: '₹140',
    originalPrice: '₹160',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Strong',
    size: '650ml'
  },
];

const wines = [
  {
    id: 17,
    name: 'Sula Vineyards Red',
    category: 'Red Wine',
    price: '₹750',
    originalPrice: '₹850',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Indian',
    size: '750ml'
  },
  {
    id: 18,
    name: 'Jacob\'s Creek',
    category: 'White Wine',
    price: '₹1,200',
    originalPrice: '₹1,400',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Australian',
    size: '750ml'
  },
  {
    id: 19,
    name: 'Big Banyan Merlot',
    category: 'Red Wine',
    price: '₹890',
    originalPrice: '₹1,000',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Indian',
    size: '750ml'
  },
  {
    id: 20,
    name: 'Fratelli Sparkling',
    category: 'Sparkling Wine',
    price: '₹1,100',
    originalPrice: '₹1,300',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Celebration',
    size: '750ml'
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden group border border-white/5 hover:border-amber-500/30 transition-all hover:shadow-xl hover:shadow-amber-500/10">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-bold">{product.rating}</span>
        </div>
        {product.badge && (
          <div className="absolute top-4 left-4 bg-amber-600 px-3 py-1 rounded-full flex items-center gap-1">
            {product.badge === 'Best Seller' || product.badge === 'Legend' ? (
              <Flame className="w-3 h-3 text-white" />
            ) : null}
            <span className="text-white text-xs font-bold">{product.badge}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-amber-500 font-medium">{product.category}</span>
          <span className="text-xs text-gray-500">{product.size}</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-3">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
            )}
          </div>
          <button className="p-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors group-hover:scale-105">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProductGrid() {
  return (
    <div id="featured">
      {/* Best Sellers Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🔥 Best Sellers</h2>
              <p className="text-gray-400">India's most loved drinks at unbeatable prices</p>
            </div>
            <a href="#" className="hidden md:block text-amber-500 hover:text-amber-400 font-medium">
              View All Products &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Whiskey Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🥃 Premium Whiskey & Scotch</h2>
              <p className="text-gray-400">For the true connoisseur - imported & Indian favorites</p>
            </div>
            <a href="#" className="hidden md:block text-amber-500 hover:text-amber-400 font-medium">
              View All Whiskey &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whiskeys.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Beer Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🍺 Chilled Beer</h2>
              <p className="text-gray-400">Ice-cold beer delivered fresh - domestic & imported</p>
            </div>
            <a href="#" className="hidden md:block text-amber-500 hover:text-amber-400 font-medium">
              View All Beer &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Wine Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🍷 Fine Wines</h2>
              <p className="text-gray-400">Premium wines from India and around the world</p>
            </div>
            <a href="#" className="hidden md:block text-amber-500 hover:text-amber-400 font-medium">
              View All Wine &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wines.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🎉 Weekend Special Offer!
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get <span className="font-bold text-white">20% OFF</span> on orders above ₹2,000 | Use Code: <span className="font-bold text-white bg-black/20 px-3 py-1 rounded">BEWDA20</span>
          </p>
          <button className="px-8 py-4 bg-black hover:bg-zinc-900 text-white font-bold rounded-lg transition-all">
            Shop Now & Save
          </button>
        </div>
      </section>
    </div>
  );
}
