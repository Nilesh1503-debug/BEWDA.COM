import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">BEWDA.COM</h3>
            <p className="mb-4 text-sm leading-relaxed">
              India's #1 online liquor store. We deliver premium quality alcohol including Whiskey, 
              Beer, Rum, Vodka, Wine, and more right to your doorstep. Fast, reliable, and 100% authentic.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>+91 9876 543 210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>support@bewda.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Available in 50+ Indian Cities</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Shop by Category</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Whiskey</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Beer</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Vodka</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Rum</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Wine</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Scotch</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Tequila</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Popular Brands</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Royal Stag</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Kingfisher</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Old Monk</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Blenders Pride</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Johnnie Walker</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Smirnoff</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Budweiser</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Delivery Areas</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 p-8 bg-zinc-900 rounded-xl border border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Get Exclusive Offers!</h4>
              <p className="text-gray-400 text-sm">Subscribe to our newsletter for special discounts and new arrivals.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-800 border border-zinc-700 rounded-l-lg px-4 py-3 focus:outline-none focus:border-amber-500 w-full md:w-64"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-r-lg transition-colors font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">We accept:</p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="px-3 py-1 bg-zinc-800 rounded">UPI</span>
              <span className="px-3 py-1 bg-zinc-800 rounded">Visa</span>
              <span className="px-3 py-1 bg-zinc-800 rounded">Mastercard</span>
              <span className="px-3 py-1 bg-zinc-800 rounded">Paytm</span>
              <span className="px-3 py-1 bg-zinc-800 rounded">PhonePe</span>
              <span className="px-3 py-1 bg-zinc-800 rounded">Google Pay</span>
              <span className="px-3 py-1 bg-zinc-800 rounded">COD</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-900 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Bewda.com. All rights reserved.</p>
          <p className="mt-2 text-xs text-zinc-600">
            ⚠️ Alcohol is injurious to health. Drink Responsibly. Only for 21+ years. 
            Please check your local laws for alcohol consumption and delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}
