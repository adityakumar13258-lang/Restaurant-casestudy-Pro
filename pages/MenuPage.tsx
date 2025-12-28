import React, { useState } from 'react';
import { Leaf, Flame, Star, Info } from 'lucide-react';

// Types
type Category = 'Starters' | 'Main Course' | 'Breads & Rice' | 'Desserts' | 'Beverages';
interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tags: ('veg' | 'spicy' | 'chef-special' | 'non-veg')[];
  category: Category;
}

// Data
const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Smoked Paneer Tikka',
    price: 550,
    description: 'Cottage cheese marinated in yogurt and yellow chili, smoked with cloves, served with mint chutney.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6ISvpu4GvG-knSd6UMXeiSK3-vJ6jaUAkB8zVqYFnpjaf_txkMgZZj25aWiUxKs0DeqFAg2oRfRfqE2mKvwvCPiMomfbf9Q-gzr9usR-_WB3GyBNn4XbgCxTXzaXJyTIG7ZwFIkzrJ4nnLcmo1wDhfq5IvR3B3QnWZChcRA4JpwL-T4AMUVN7SD3DFxBRsVs6eyUWhHiI1siM8xfu2dUKQUSO3iUOKJIs9azVwmhiK1KtYUvnhTWbP9wqGbQfQuOXT8-Mvmf7',
    tags: ['veg', 'chef-special'],
    category: 'Starters'
  },
  {
    id: '2',
    name: 'Galouti Kebab',
    price: 850,
    description: 'Melt-in-mouth minced lamb patties, seasoned with saffron and rose water, served on saffron paratha.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeB3wEvr4hlkq9zzBaqYjR1sqKCn28N2PSI43y8au7iklD5EeKlitJMXf-ZE0ZaXPmDQabGvDeoO-bKCGFDKYpl4y3zXKPvqLeh6P2bk4PLt_FvRyMe-Z3EPquwi9qNr4Z64AMF_IPqAib2zvO4Ue-EwIk3njowUtArIHOC73ty00fTGTw0xkNgXU0-NSFijS8ObkbsY0A_zRzSZc3xXljYyBUtZwHEr9RY1xR7_eZnoNftkdXv0ivSwfXZqORUQljWkCKtCIp',
    tags: ['non-veg'],
    category: 'Starters'
  },
  {
    id: '3',
    name: 'Truffle Samosa',
    price: 450,
    description: 'Classic potato pastry infused with black truffle oil, served with a sweet tamarind glaze.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSJ0CikWrwdshUUlwN7LVuLWYBkEDiGQ01CPlKk4wFozGVsF_KsIwo8fVyAVKqSNQmlNpjx15EDV8BjXEF4UBdwJhZpTtxhulrDiT5OeJ4C5wUAU0MtTwClY9sN_ne90f2YPCo72P56q_yRT254l1k5_pJ8mNkfQllJ6urHXuKQPIpS18GzFd39Z3FcnnzmW8KJC6X83t5AlsZFv6fDKKoHsCa_V_zpAH01DF8WVrE1g25XTZTXiUb5nBjgAZ-Pk_btMyacN3T',
    tags: ['veg'],
    category: 'Starters'
  },
  {
    id: '4',
    name: 'Butter Chicken 1947',
    price: 1400,
    description: 'Our signature dish. Tandoor-grilled chicken simmered in a satin-smooth tomato gravy, finished with fenugreek and butter.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhN_GuxSouj7pg9fBUMWLdu05xSKkFMoF8h0D0pGQ_Obd_sbj5NKsBEHHdf8j0aRFkG_kt_G_EZdPt4UJbjQqkG_wq5t5BnzE7RHVQS8hlqE0uSox5MJRzuTwyMFTJYJ80bSniC6vZytxRgL2dMEmCz0qBtU9ruQ1EVVgXDY-kSV4Fcx1ZDCe0mBnd4Xd6UqlmCn-fdaSF2HK8inRDH-hEAD1JnGeNyAA3c5Okdls75fLVqDmCm60-_8QGrmHAfEbCAU5zQwge',
    tags: ['non-veg', 'chef-special', 'spicy'],
    category: 'Main Course'
  },
  {
    id: '5',
    name: 'Dal Makhani',
    price: 900,
    description: 'Black lentils slow-cooked overnight on the tandoor, finished with fresh cream and churned butter.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWI42UVxqCn_k7lC5o3n-FqydemzZEEmJW4hTE_tLes4UdUGytGXxa7p0MFHv9buC6C-G64HQ5XDdtwzZqRgCObWpXqI0RWeQZYRB80LnHSLoxAqFmZqrKxRnFj2RfUeCZQY-QRnHTLxgiayEFXsoH5MI-dK2CGCQa1Kz_GjBBPFAOvon0Pfv7gG13ozMKl36CT-EucTf17oQilnPRt9z0Z30dbXjY7_qvSia82_fIDKykRuCnwTdMQZgUT35O-c4ZmrlPg8em',
    tags: ['veg'],
    category: 'Main Course'
  },
  {
    id: '6',
    name: 'Rogan Josh',
    price: 1200,
    description: 'Kashmiri delicacy. Tender lamb braised with aromatic spices, Kashmiri chilies, and saffron.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMcYbkXNWAotMtLeB_GbMg5qs-VzTN53bk_MKkv_AfMVAqVymwsmYHOryNMC5eFQ06aH8JLpjxUtlXThtfv9jJiLQ0u0ySp62mhnFjVUx6d617djAmwQpPdM2tDHbLjqsMBLyg-Os_gC6w43GlE6144XQGQuZD0Rgj4AnLw_UiXi2cnqnyC2MAxvedVMrgrwQTkwyqzOiiq2bw9qDKYJ8Klf1wfck8V2CyJS03eYWxcAatFjj4Pddbqdc1Z7jOzIZQDfW1bs7i',
    tags: ['non-veg', 'spicy'],
    category: 'Main Course'
  },
  {
    id: '7',
    name: 'Garlic Naan',
    price: 150,
    description: 'Clay oven bread topped with garlic.',
    image: '',
    tags: ['veg'],
    category: 'Breads & Rice'
  },
  {
    id: '8',
    name: 'Truffle Naan',
    price: 250,
    description: 'With truffle oil and parmesan.',
    image: '',
    tags: ['veg', 'chef-special'],
    category: 'Breads & Rice'
  },
  {
    id: '9',
    name: 'Saffron Kulfi',
    price: 300,
    description: 'Traditional Indian ice cream infused with saffron and pistachios.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoJt9HnI-qfSiSz9hOWPcH8owj153AxqzQFOZIXR-OrpUmg-KbdWFLDtjCHNfZ3r2DFju1LICZYBP8r8ekGqLpayTfoi3BE3_oMx1RJormtyQfXBH-YTHm7DK-lKvTkQs7Fnbyb51HkPeY25B2JrUiUjOWxtYt1DxSmq7snVBS36OYUAfXrmVp1LVKO1WTgM_zQq_EhvpTz9keTgc_h0QAQNh1nE424ELeBff-UhFKH1HgWKZWVvp3U5RmUdq3HkfSfCQtGcVX',
    tags: ['veg'],
    category: 'Desserts'
  }
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Starters');
  const [filters, setFilters] = useState({
    veg: false,
    spicy: false,
    chefSpecial: false
  });

  const categories: Category[] = ['Starters', 'Main Course', 'Breads & Rice', 'Desserts', 'Beverages'];

  const filteredItems = menuItems.filter(item => {
    if (item.category !== activeCategory) return false;
    if (filters.veg && !item.tags.includes('veg')) return false;
    if (filters.spicy && !item.tags.includes('spicy')) return false;
    if (filters.chefSpecial && !item.tags.includes('chef-special')) return false;
    return true;
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Menu Header */}
      <div className="bg-surface-dark py-12 md:py-20 border-b border-border-dark">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Our Menu</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            A curated selection of India's finest culinary treasures, featuring our chef's interpretation of classic recipes.
          </p>
        </div>
      </div>

      {/* Categories Sticky Nav */}
      <div className="sticky top-[73px] z-30 bg-background-dark/95 backdrop-blur-md border-b border-border-dark">
        <div className="max-w-[1440px] mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex justify-center min-w-max gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-4 px-2 text-sm font-bold uppercase tracking-widest border-b-2 transition-colors ${
                  activeCategory === cat 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => toggleFilter('veg')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wide transition-all ${filters.veg ? 'bg-green-900/30 border-green-500 text-green-500' : 'bg-surface-dark border-border-dark text-gray-400 hover:border-gray-500'}`}
          >
            <Leaf size={14} /> Vegetarian
          </button>
          <button 
            onClick={() => toggleFilter('spicy')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wide transition-all ${filters.spicy ? 'bg-red-900/30 border-red-500 text-red-500' : 'bg-surface-dark border-border-dark text-gray-400 hover:border-gray-500'}`}
          >
            <Flame size={14} /> Spicy
          </button>
          <button 
            onClick={() => toggleFilter('chefSpecial')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wide transition-all ${filters.chefSpecial ? 'bg-primary/20 border-primary text-primary' : 'bg-surface-dark border-border-dark text-gray-400 hover:border-gray-500'}`}
          >
            <Star size={14} /> Chef's Special
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-surface-dark rounded-lg overflow-hidden border border-border-dark hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              {item.image && (
                <div className="h-48 w-full overflow-hidden relative">
                  {item.tags.includes('chef-special') && (
                    <span className="absolute top-2 left-2 z-10 bg-primary text-background-dark text-[10px] font-bold px-2 py-0.5 rounded-sm">
                      CHEF'S SPECIAL
                    </span>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-primary transition-colors">{item.name}</h3>
                  <span className="text-primary font-bold font-serif text-lg">₹{item.price}</span>
                </div>
                
                <div className="flex gap-2 mb-3">
                  {item.tags.includes('veg') ? (
                    <span className="w-4 h-4 border border-green-500 flex items-center justify-center p-0.5" title="Veg">
                      <span className="w-full h-full rounded-full bg-green-500"></span>
                    </span>
                  ) : (
                    <span className="w-4 h-4 border border-red-500 flex items-center justify-center p-0.5" title="Non-Veg">
                      <span className="w-full h-full transform rotate-45 bg-red-500"></span>
                    </span>
                  )}
                  {item.tags.includes('spicy') && <Flame size={16} className="text-red-500" title="Spicy" />}
                </div>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                <button className="text-xs font-bold text-primary uppercase tracking-widest border border-primary px-4 py-2 rounded hover:bg-primary hover:text-background-dark transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <Info size={48} className="mx-auto mb-4 opacity-50" />
            <p>No items found with these filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
