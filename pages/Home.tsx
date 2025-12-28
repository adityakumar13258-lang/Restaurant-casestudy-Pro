import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, Leaf, Utensils, Award, Quote, ArrowRight, Bike, MessageSquare, Loader2 } from 'lucide-react';

const chefSpecials = [
  {
    id: '1',
    name: 'Smoked Paneer Tikka',
    price: 550,
    desc: 'Cottage cheese marinated in yogurt and yellow chili, smoked with cloves, served with mint chutney.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6ISvpu4GvG-knSd6UMXeiSK3-vJ6jaUAkB8zVqYFnpjaf_txkMgZZj25aWiUxKs0DeqFAg2oRfRfqE2mKvwvCPiMomfbf9Q-gzr9usR-_WB3GyBNn4XbgCxTXzaXJyTIG7ZwFIkzrJ4nnLcmo1wDhfq5IvR3B3QnWZChcRA4JpwL-T4AMUVN7SD3DFxBRsVs6eyUWhHiI1siM8xfu2dUKQUSO3iUOKJIs9azVwmhiK1KtYUvnhTWbP9wqGbQfQuOXT8-Mvmf7',
  },
  {
    id: '2',
    name: 'Butter Chicken 1947',
    price: 1400,
    desc: 'Our signature dish. Tandoor-grilled chicken simmered in a satin-smooth tomato gravy.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhN_GuxSouj7pg9fBUMWLdu05xSKkFMoF8h0D0pGQ_Obd_sbj5NKsBEHHdf8j0aRFkG_kt_G_EZdPt4UJbjQqkG_wq5t5BnzE7RHVQS8hlqE0uSox5MJRzuTwyMFTJYJ80bSniC6vZytxRgL2dMEmCz0qBtU9ruQ1EVVgXDY-kSV4Fcx1ZDCe0mBnd4Xd6UqlmCn-fdaSF2HK8inRDH-hEAD1JnGeNyAA3c5Okdls75fLVqDmCm60-_8QGrmHAfEbCAU5zQwge',
  },
  {
    id: '3',
    name: 'Rogan Josh',
    price: 1200,
    desc: 'Kashmiri delicacy. Tender lamb braised with aromatic spices, Kashmiri chilies, and saffron.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMcYbkXNWAotMtLeB_GbMg5qs-VzTN53bk_MKkv_AfMVAqVymwsmYHOryNMC5eFQ06aH8JLpjxUtlXThtfv9jJiLQ0u0ySp62mhnFjVUx6d617djAmwQpPdM2tDHbLjqsMBLyg-Os_gC6w43GlE6144XQGQuZD0Rgj4AnLw_UiXi2cnqnyC2MAxvedVMrgrwQTkwyqzOiiq2bw9qDKYJ8Klf1wfck8V2CyJS03eYWxcAatFjj4Pddbqdc1Z7jOzIZQDfW1bs7i',
  }
];

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const scriptId = 'elfsight-platform-script';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        document.body.appendChild(script);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) return;

    setIsSubmitting(true);

    // Prepare WhatsApp Message
    const phoneNumber = "919142002446";
    const text = `*New Website Enquiry/Feedback*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.mobile}\n*Message:* ${formData.message || 'N/A'}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Simulate a brief UX delay then redirect
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setIsSubmitting(false);
        setFormData({ name: '', mobile: '', message: '' });
    }, 1000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/70 via-background-dark/30 to-background-dark z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHdX-x5wq-0b0FEE-RLCZl1zHBvX06OmUkp6rsfpkts1vy4a4lhE7y5i6bbB56m6S_oqyI-6JXIWGa1vnxPYvqOUmoFNtZdZ_-2BA4jV1oOqF5hjTRew4H44xA1bnVEV0a1kRvYnjGCycAoGKGLXWLvvfk-pL-hHETOFISnaXcWKh8KaT_PULCaK6oOvYgcZXaGHHExg_i0iQqEWo13xgbqGQaJ7taqkyvimPYWrXH8x4WX-8YKFhtr_TeTZ9S-ryjFx2BL8Z_" 
            alt="Luxury interior" 
            className="w-full h-full object-cover animate-[scale_20s_linear_infinite] scale-105"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <span className="text-primary tracking-[0.3em] text-xs font-bold uppercase animate-fade-in-up">Est. 1985 • New Delhi</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight tracking-tight">
            A Culinary <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecc813] to-[#fff5a0] italic">Voyage</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Experience the confluence of royal Indian heritage and modern gastronomy. Where every spice tells a story of the past.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/reservations" className="min-w-[160px] h-12 flex items-center justify-center bg-primary hover:bg-primary-hover text-background-dark font-bold tracking-widest uppercase rounded transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(236,200,19,0.3)]">
              Book a Table
            </Link>
            <Link to="/menu" className="min-w-[160px] h-12 flex items-center justify-center border border-white/30 hover:border-primary hover:text-primary text-white font-bold tracking-widest uppercase rounded transition-all">
              View Menu
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-dark border-y border-border-dark py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Star size={32} />, val: "2", label: "Michelin Stars" },
              { icon: <Award size={32} />, val: "35", label: "Years Heritage" },
              { icon: <Utensils size={32} />, val: "200+", label: "Signature Dishes" },
              { icon: <Leaf size={32} />, val: "100%", label: "Sustainable Sourcing" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-2 group">
                <div className="text-primary mb-2 transform transition-transform group-hover:scale-110">{stat.icon}</div>
                <span className="text-3xl font-bold font-serif">{stat.val}</span>
                <span className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy/Timeline Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ecc813 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        
        <div className="max-w-[960px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Our Legacy</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative border-l border-border-dark ml-4 md:ml-12 pl-8 md:pl-12 space-y-16">
            {[
              {
                year: "1985",
                title: "Roots in Rajasthan",
                desc: "It began in the royal kitchens of Jaipur, where recipes were guarded like state secrets. Our founder, realizing these flavors deserved a global stage, began documenting the ancestral blends of spices.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiN1oUBvEVcsrFfQqrVHT21-AoVDRaT7g71hRMLCHcZLhw3fD6CMsOHBwCXrVygLcF8x14x16965EXJr3BDKhZi8Nx5BtVOKDzEp2r4UrbG55t-cSc1quUYcqTD_1sArD1rra-1rD4GeS8qATL_CfMVUiIKYgTku3pvQzrZQQ3YsiF6LhrW7cHawRlqceIKjCs4nr0Q0b3B2JOK6QePnupPzASB50lJMM7Sxe6ZpuoAIvQXXtSlct-GKj-K6cJorbrnjbIcWkE"
              },
              {
                year: "1999",
                title: "The Move to London",
                desc: "Crossing oceans to Mayfair, we brought more than just ingredients; we brought a philosophy of hospitality. The first location opened to critical acclaim, introducing authentic, uncompromised flavors to a discerning audience.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmHKhjUCL69chKRB2kgrD2q2Mb-X5bLeMXLwVUd9-o8AGy-_JFHMamG9TNYqLtYZo0q4Z9GxHAyf628lgnGRYFJH1A4rB5UipANgv1zCvqBc3MBYDhHraFCh2gK_m0FZXePGAxGtz1GI4xVONZGQwSCd_PLZPKb-WPoLeJBUAVtS55C6JpmeLh1Z1nC-uHtc16qv2iJpR3MjtEOieSEdylKSNRLoYxC7vMJYozilSCVz7zLgKyNFJur3whL1ORM0gG83RgNkLp"
              },
              {
                year: "Present",
                title: "Modern Alchemy",
                desc: "Today, we reinvent the classics. Using molecular gastronomy alongside clay ovens, we create textures and tastes that honor the past while boldly embracing the future of fine dining.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGr6TLEzdu0XGGdYKqKoVRL8zLJma-0o2qUt2vAZIpG-e-1LmOn8R-icnAM1ct5NOexpVBR1PICwVCAPi_WmA1k9FWzA8aODWbHV2J4VFvB2d0vGCt6F8GX8L9VKdeEA0ZzdyTZUkPGSCuLMSDH2mis5LBmr73UiDAI-vhL594HBgkssbrtJiueAhr21GoESohHBzpFTXbB9FvI6ANaQFz3769tJoD3y6T_yztexxgJOhi2UNA20cnPTocqQwbxanxWXNSAvXh"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background-dark shadow-[0_0_10px_rgba(236,200,19,0.5)]">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                </span>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                      <span className="text-primary font-mono text-xs border border-primary/30 px-2 py-0.5 rounded bg-primary/5">{item.year}</span>
                    </div>
                    <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                   <div className="w-16 h-16 md:w-24 md:h-24 shrink-0 rounded-full border-2 border-border-dark overflow-hidden group-hover:border-primary transition-colors">
                     <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-24 bg-surface-dark">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp5lIBE4uBBRv-CevCmEfYWw2R3ARXnx6cxVPm0OGMCKIR7VMmQk3wwAzb5TJP7f0NhpwtAWjAJiY9LroU8xsPyqXKZCGAUj9dlJOCX1vah98jr1UQb4N84gP1lHwdsQYjFbzHIzmIjc4jSWJRKz7-C2cc8pRe7KKU84lWvG-B4-o0asHNdpQnxkhmmIf6JYuBo4TMQlX5iFQ82H5j99MksDt_c6QLMNchvq00K0Tmv0Gnwut56g0cnG3Uc5K0GlAfM0AckJGE" 
                  alt="Head Chef" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Head Chef</p>
                  <h3 className="text-3xl font-serif font-bold text-white">Arjun Mehta</h3>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <Quote size={48} className="text-primary rotate-180" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic leading-tight text-white/90">
                  Cooking is an act of love. It is the language through which we speak to the soul.
                </h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                  My philosophy is simple: respect the ingredient. We blend traditional methods with avant-garde techniques to create a symphony of flavors. Every dish on our menu is a tribute to the royal kitchens of my childhood, reimagined for the modern palate.
                </p>
              </div>
              <Link to="/menu" className="inline-block border border-primary text-primary hover:bg-primary hover:text-black px-8 py-3 rounded uppercase tracking-widest text-sm font-bold transition-all">
                View Chef's Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delicious Menu Categories Section */}
      <section className="py-24 bg-background-dark relative">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Offerings</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Delicious Menu</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
             {/* Item 1 */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-full aspect-[4/5] rounded-t-[50%] overflow-hidden relative mb-8 border-t border-x border-primary/20 hover:border-primary/50 transition-colors p-2">
                 <div className="w-full h-full rounded-t-[48%] overflow-hidden relative">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWI42UVxqCn_k7lC5o3n-FqydemzZEEmJW4hTE_tLes4UdUGytGXxa7p0MFHv9buC6C-G64HQ5XDdtwzZqRgCObWpXqI0RWeQZYRB80LnHSLoxAqFmZqrKxRnFj2RfUeCZQY-QRnHTLxgiayEFXsoH5MI-dK2CGCQa1Kz_GjBBPFAOvon0Pfv7gG13ozMKl36CT-EucTf17oQilnPRt9z0Z30dbXjY7_qvSia82_fIDKykRuCnwTdMQZgUT35O-c4ZmrlPg8em" alt="Veg Main Course" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
               </div>
               <h3 className="text-2xl font-serif font-bold text-white mb-4 uppercase tracking-wide">Veg Main Course</h3>
               <p className="text-gray-400 font-light leading-relaxed max-w-sm">A delightful selection of flavorful vegetarian main courses, crafted to perfection.</p>
             </div>

             {/* Item 2 */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-full aspect-[4/5] rounded-t-[50%] overflow-hidden relative mb-8 border-t border-x border-primary/20 hover:border-primary/50 transition-colors p-2">
                 <div className="w-full h-full rounded-t-[48%] overflow-hidden relative">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhN_GuxSouj7pg9fBUMWLdu05xSKkFMoF8h0D0pGQ_Obd_sbj5NKsBEHHdf8j0aRFkG_kt_G_EZdPt4UJbjQqkG_wq5t5BnzE7RHVQS8hlqE0uSox5MJRzuTwyMFTJYJ80bSniC6vZytxRgL2dMEmCz0qBtU9ruQ1EVVgXDY-kSV4Fcx1ZDCe0mBnd4Xd6UqlmCn-fdaSF2HK8inRDH-hEAD1JnGeNyAA3c5Okdls75fLVqDmCm60-_8QGrmHAfEbCAU5zQwge" alt="Non-Veg Main Course" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
               </div>
               <h3 className="text-2xl font-serif font-bold text-white mb-4 uppercase tracking-wide">Non-Veg Main Course</h3>
               <p className="text-gray-400 font-light leading-relaxed max-w-sm">Succulent non-vegetarian main courses bursting with rich flavors and aromas.</p>
             </div>

             {/* Item 3 */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-full aspect-[4/5] rounded-t-[50%] overflow-hidden relative mb-8 border-t border-x border-primary/20 hover:border-primary/50 transition-colors p-2">
                 <div className="w-full h-full rounded-t-[48%] overflow-hidden relative">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfwdtoKjUi_83mqYVTATYBVJbaK37a9gYxW09AKnst5y4973U6fLZI13HyOMs5JHQT1YKSyR_60KZLkgLfDYXUu-DnAoOGjZJP3nVgBBRPqHSWFfTUaQTaDSWsvnJU3RLl-S470Znx9noY4E8bOttcZoXQXVHlUGHB_rLIAwbx3Xp35Vg5ljGll5mShSEJ-XH7581irLmZ4ACqxflPt_2FOjlCeRW8aT9quO_S-PpnBmabIh2vK4POHw9iEMpLdH-gcBOvIDYn" alt="Biryanis/Rice" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
               </div>
               <h3 className="text-2xl font-serif font-bold text-white mb-4 uppercase tracking-wide">Shaan -E Biryanis/Rice</h3>
               <p className="text-gray-400 font-light leading-relaxed max-w-sm">Fragrant biryanis and perfectly cooked rice dishes to delight every palate.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Menu Section - Chef's Specials */}
      <section className="py-24 bg-surface-dark border-t border-border-dark relative z-10">
        <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Taste of Royalty</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Chef's Special</h2>
                <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {chefSpecials.map((item) => (
                    <div key={item.id} className="group bg-surface-dark rounded-lg overflow-hidden border border-border-dark hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                        <div className="h-64 w-full overflow-hidden relative">
                             <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute top-4 right-4 bg-background-dark/80 backdrop-blur px-3 py-1 rounded text-primary font-bold border border-primary/30">
                                 ₹{item.price}
                              </div>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.name}</h3>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">{item.desc}</p>
                            <Link to="/menu" className="text-xs font-bold text-white uppercase tracking-widest border-b border-primary pb-1 hover:text-primary transition-colors">Order Now</Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                 <Link to="/menu" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background-dark px-8 py-4 rounded text-sm font-bold uppercase tracking-widest transition-all">
                     View Full Menu <ArrowRight size={18} />
                 </Link>
            </div>
        </div>
      </section>

      {/* Ambience Section */}
      <section className="flex flex-col md:flex-row h-auto min-h-[600px]">
        <div className="w-full md:w-1/2 relative group overflow-hidden">
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuABzTkHfbFC5eshmLylr9X5vIkC_6Jr7Xm9z_FN6xMJg6l6G2iRlpTegJyOX9UQr3Kj1c6Jcri4E2WDdtgrptJLkoMF1hi5i9vM8kKNrR7piQpDusMrvhYA7tR0F4Af6HqhjSPeWQ7npZniKTq_eloUS5BSpjxDO_GdJcnnLWbeWwSUpO412rEqYtORbFxIOABsUFI_0V2x-EkRtvh5COlXZ5j6XKbq1UC0TpLEWlBLbleeBPgTXPB4D_ePvr23mcuqoZFdmub1" 
               alt="Ambience" 
               className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </div>
        <div className="w-full md:w-1/2 bg-surface-dark p-12 md:p-24 flex flex-col justify-center items-start border-y md:border-y-0 md:border-l border-border-dark">
             <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">The Atmosphere</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Dining in <br/><span className="italic text-primary">Splendour</span></h2>
             <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
               Every corner of The Royal Spice is designed to transport you to the era of Maharajas. From the hand-carved pillars to the soft glow of crystal chandeliers, our ambience is as curated as our menu.
             </p>
             <Link to="/gallery" className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-primary text-white hover:text-primary transition-all uppercase tracking-widest text-sm font-bold">
               View Gallery <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
             </Link>
        </div>
      </section>

      {/* Home Delivery Section */}
      <section className="py-24 bg-surface-dark border-t border-border-dark relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-background-dark border border-border-dark mb-6">
                <Bike className="text-primary" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Home Delivery</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12">
                Enjoy the Royal Spice experience in the comfort of your home. We've partnered with India's leading delivery platforms to ensure our signature dishes reach you fresh and hot.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-[#E23744] hover:bg-[#d02532] text-white min-w-[200px] h-14 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-red-900/20">
                    <span className="font-black text-2xl italic tracking-tighter">zomato</span>
                </a>
                
                <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-[#FC8019] hover:bg-[#e37015] text-white min-w-[200px] h-14 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-orange-900/20">
                     <span className="font-bold text-2xl tracking-tight">SWIGGY</span>
                </a>
            </div>
            
            <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
                Available daily • 11:00 AM - 11:00 PM
            </p>
        </div>
      </section>

      {/* Feedback Section (WhatsApp Integration) */}
      <section className="py-24 bg-background-dark border-t border-border-dark relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ecc813 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
                  <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Contact Us</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">We Value Your Feedback</h2>
                  <p className="text-gray-400 font-light text-lg">
                    Your experience at The Royal Spice matters to us. Please share your thoughts, suggestions, or compliments.
                  </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-surface-dark p-8 md:p-12 rounded-2xl border border-border-dark shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-all duration-700 group-hover:bg-primary/10"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider font-bold text-primary">Full Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name" 
                          className="w-full h-12 px-4 rounded bg-background-dark border border-border-dark text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors placeholder:text-gray-600" 
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider font-bold text-primary">Mobile Number <span className="text-red-500">*</span></label>
                        <input 
                          type="tel" 
                          name="mobile"
                          required
                          value={formData.mobile}
                          onChange={handleInputChange}
                          placeholder="Enter your mobile number" 
                          className="w-full h-12 px-4 rounded bg-background-dark border border-border-dark text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors placeholder:text-gray-600" 
                        />
                    </div>
                </div>
                <div className="space-y-2 relative z-10">
                    <label className="text-xs uppercase tracking-wider font-bold text-primary">Message</label>
                    <textarea 
                      name="message"
                      rows={4} 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your feedback..." 
                      className="w-full p-4 rounded bg-background-dark border border-border-dark text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none placeholder:text-gray-600"
                    ></textarea>
                </div>
                <div className="relative z-10 pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting || !formData.name || !formData.mobile}
                      className={`w-full h-14 bg-primary hover:bg-primary-hover text-background-dark font-bold rounded uppercase tracking-widest text-sm transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
                    >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            <span>Redirecting to WhatsApp...</span>
                          </>
                        ) : (
                          <>
                            <MessageSquare size={18} />
                            <span>Send via WhatsApp</span>
                          </>
                        )}
                    </button>
                </div>
            </form>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-background-dark border-t border-border-dark">
         <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center mb-10">
               <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Social</span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Follow Our Journey</h2>
               <p className="text-gray-400">@RoyalSpiceDining</p>
            </div>
            <div className="elfsight-app-f848c67b-adf4-448a-9249-c17f305d9952" data-elfsight-app-lazy></div>
         </div>
      </section>

    </div>
  );
};

export default Home;