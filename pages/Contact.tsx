import React from 'react';
import { MapPin, Phone, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Map Hero */}
      <div className="w-full h-[40vh] min-h-[300px] relative">
         <div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4z7Hsg545NlYKYUYAb7gBU5JVXVhXK6CFWDOfd0xuj6p-tottwiV03rMkSGhcJWoF7Z6Mmm-_CVzkZ3dZPFG7JcpwRqiyW6XcTPnrSZ-xJZ_C2s7nnDzzpJmZMZsekkdDXL7V2BZZSMvjwKckVeiianOga0Rfgosz2_2iP7oA0gUwJD06ZqHI3kB6cCxjYQhjg6SFXGFl0I8ZUGm7rUVcULUFnsyFb4hy2Eig05TxPzBwcdk8ju3OTI6o6FfJipnFjBlDyF_o")'}}></div>
         <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-bounce shadow-xl">
               <MapPin size={24} className="text-background-dark" />
            </div>
         </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <div className="space-y-10">
               <div>
                  <h1 className="text-4xl font-serif font-bold text-white mb-6">Contact Information</h1>
                  <p className="text-gray-400 leading-relaxed">Located in the heart of the Culinary District, Saffron & Spice offers an oasis of calm and luxury. Reach out to us directly or visit us during our operating hours.</p>
               </div>

               <div className="space-y-6">
                  <div className="flex gap-4 p-6 rounded-xl bg-surface-dark border border-border-dark">
                     <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        <MapPin size={24} />
                     </div>
                     <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wide opacity-80 mb-1">Visit Us</h4>
                        <p className="text-white font-medium">123 Culinary Avenue</p>
                        <p className="text-gray-400 text-sm">Luxury District, New York 10012</p>
                     </div>
                  </div>

                  <div className="flex gap-4 p-6 rounded-xl bg-surface-dark border border-border-dark">
                     <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Phone size={24} />
                     </div>
                     <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wide opacity-80 mb-1">Call Us</h4>
                        <p className="text-white font-medium">+1 (212) 555-0199</p>
                        <p className="text-gray-400 text-sm">Mon-Sun, 11am - 10pm</p>
                     </div>
                  </div>

                  <div className="flex gap-4 p-6 rounded-xl bg-surface-dark border border-border-dark">
                     <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Clock size={24} />
                     </div>
                     <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wide opacity-80 mb-1">Opening Hours</h4>
                        <div className="text-sm space-y-1">
                           <div className="flex justify-between w-48"><span className="text-gray-400">Mon - Thu</span> <span className="text-white">5pm - 10pm</span></div>
                           <div className="flex justify-between w-48"><span className="text-gray-400">Fri - Sat</span> <span className="text-white">5pm - 11pm</span></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form */}
            <div className="bg-surface-dark rounded-2xl p-8 md:p-10 border border-border-dark shadow-2xl">
               <h3 className="text-2xl font-bold text-white mb-2">Send an Enquiry</h3>
               <p className="text-gray-400 text-sm mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
               
               <form className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-xs uppercase tracking-wider font-bold text-primary">Full Name</label>
                     <input type="text" placeholder="John Doe" className="w-full h-12 px-4 rounded-lg bg-background-dark border border-border-dark text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider font-bold text-primary">Email</label>
                        <input type="email" placeholder="john@example.com" className="w-full h-12 px-4 rounded-lg bg-background-dark border border-border-dark text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider font-bold text-primary">Phone</label>
                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full h-12 px-4 rounded-lg bg-background-dark border border-border-dark text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs uppercase tracking-wider font-bold text-primary">Message</label>
                     <textarea rows={4} placeholder="How can we help?" className="w-full p-4 rounded-lg bg-background-dark border border-border-dark text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"></textarea>
                  </div>
                  
                  <button className="w-full h-12 bg-primary hover:bg-primary-hover text-background-dark font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                     <span>Send Enquiry</span>
                     <Send size={18} />
                  </button>
               </form>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Contact;
