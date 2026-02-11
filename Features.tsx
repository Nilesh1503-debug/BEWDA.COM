import { Truck, ShieldCheck, Clock, CreditCard, MapPin, Headphones } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: '100% Original Products',
    description: 'All products are sourced directly from authorized distributors. FSSAI certified.'
  },
  {
    icon: Truck,
    title: 'Fast Home Delivery',
    description: 'Get your order delivered in 30 minutes to 2 hours across major Indian cities.'
  },
  {
    icon: Clock,
    title: 'Order Till Late Night',
    description: 'Place orders till 10 PM in most cities. Perfect for your party plans!'
  },
  {
    icon: CreditCard,
    title: 'Multiple Payment Options',
    description: 'Pay via UPI, Cards, Net Banking, Wallets or Cash on Delivery.'
  },
  {
    icon: MapPin,
    title: '50+ Cities Covered',
    description: 'Delhi, Mumbai, Bangalore, Hyderabad, Pune, Chennai & many more cities.'
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Our team is available round the clock to assist with your orders.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-zinc-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Bewda.com?</h2>
          <p className="text-gray-400">India's most trusted online liquor delivery platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-zinc-800/50 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Age Verification Notice */}
        <div className="mt-16 p-6 bg-red-900/20 border border-red-500/30 rounded-xl text-center">
          <p className="text-red-400 font-medium">
            ⚠️ Alcohol delivery is available only for customers above 21 years of age. 
            Valid ID proof required at the time of delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
