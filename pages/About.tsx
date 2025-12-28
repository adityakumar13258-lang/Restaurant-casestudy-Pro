import React from 'react';
import { Award, Users, Heart, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(24, 23, 17, 0.6) 0%, rgba(24, 23, 17, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzdbObjgaQXWD8-t4PcfMjCY0ldFy8YZPEMIZsWUvNGptIkfvxrJuqylWXGIiY_3iA31hAYxKojYcMEGcOpYVk8dQLoZZPhUZioXPkRh-BP0CBdFWK3NWNJm0-gjXXMFJHhPnJc6tvV9y9KQzdom2ZbPASzUGmMXw07V22l9q--Lz0Jtthk1uv6fJtoRuDDbiw4mARJaq1ZBY135BltewSklcvK1ry5f17ts5blhPvBXLlmKzVPJQ3RoYtWw5sQJOZbVVOdfcZ")'}}></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="w-16 h-[1px] bg-primary/60 mx-auto mb-6"></div>
          <h2 className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">Since 1985</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 leading-tight">Preserving the <br/><span className="italic text-primary">Royal Heritage</span></h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            A culinary journey that spans generations, bringing the secrets of royal Indian kitchens to your table.
          </p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl"></div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-3xl"></div>
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiN1oUBvEVcsrFfQqrVHT21-AoVDRaT7g71hRMLCHcZLhw3fD6CMsOHBwCXrVygLcF8x14x16965EXJr3BDKhZi8Nx5BtVOKDzEp2r4UrbG55t-cSc1quUYcqTD_1sArD1rra-1rD4GeS8qATL_CfMVUiIKYgTku3pvQzrZQQ3YsiF6LhrW7cHawRlqceIKjCs4nr0Q0b3B2JOK6QePnupPzASB50lJMM7Sxe6ZpuoAIvQXXtSlct-GKj-K6cJorbrnjbIcWkE" 
               alt="Our Origins" 
               className="w-full rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">From Jaipur to the World</h2>
             <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
               <p>
                 Our story began in the bustling spice markets of Jaipur, where our founder, Mr. Vikram Singh, spent his childhood learning the ancient art of spice blending from his grandmother, a cook in the royal palace.
               </p>
               <p>
                 In 1985, armed with a handful of handwritten recipes and a dream, he opened the first "Royal Spice" as a humble eatery in New Delhi. It wasn't just about food; it was about storytelling through flavors.
               </p>
               <p>
                 Decades later, we have evolved into a global symbol of fine Indian dining, yet our soul remains rooted in those original recipes. We don't just serve food; we serve history on a plate.
               </p>
             </div>
             
             <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border-dark">
                <div className="text-center">
                   <span className="block text-3xl font-serif font-bold text-primary mb-1">35+</span>
                   <span className="text-xs uppercase tracking-widest text-gray-500">Years</span>
                </div>
                <div className="text-center border-l border-border-dark">
                   <span className="block text-3xl font-serif font-bold text-primary mb-1">3</span>
                   <span className="text-xs uppercase tracking-widest text-gray-500">Continents</span>
                </div>
                <div className="text-center border-l border-border-dark">
                   <span className="block text-3xl font-serif font-bold text-primary mb-1">2M+</span>
                   <span className="text-xs uppercase tracking-widest text-gray-500">Happy Guests</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface-dark border-y border-border-dark">
         <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Philosophy</span>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">The Royal Standard</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 {
                   icon: <Award className="w-12 h-12 text-primary" />,
                   title: "Uncompromised Quality",
                   desc: "We source our saffron from Kashmir, our cardamom from Kerala, and our meats from the finest sustainable farms. Excellence begins with the ingredient."
                 },
                 {
                   icon: <Heart className="w-12 h-12 text-primary" />,
                   title: "Atithi Devo Bhava",
                   desc: "The guest is god. This ancient Sanskrit saying is the cornerstone of our service. We strive to anticipate your needs before you even speak them."
                 },
                 {
                   icon: <Clock className="w-12 h-12 text-primary" />,
                   title: "Slow Cooking",
                   desc: "In a world of fast food, we believe in the luxury of time. Our Dal Makhani simmers for 24 hours, and our biryanis are slow-cooked in sealed clay pots."
                 }
               ].map((item, idx) => (
                 <div key={idx} className="bg-background-dark p-10 rounded-xl border border-border-dark group hover:border-primary/50 transition-all hover:-translate-y-2">
                    <div className="mb-6 bg-surface-dark w-20 h-20 rounded-full flex items-center justify-center border border-border-dark group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team Section */}
      <section className="py-24 max-w-[1440px] mx-auto px-6">
         <div className="text-center mb-16">
             <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">The Maestros</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Meet the Team</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Arjun Mehta",
                role: "Executive Chef",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp5lIBE4uBBRv-CevCmEfYWw2R3ARXnx6cxVPm0OGMCKIR7VMmQk3wwAzb5TJP7f0NhpwtAWjAJiY9LroU8xsPyqXKZCGAUj9dlJOCX1vah98jr1UQb4N84gP1lHwdsQYjFbzHIzmIjc4jSWJRKz7-C2cc8pRe7KKU84lWvG-B4-o0asHNdpQnxkhmmIf6JYuBo4TMQlX5iFQ82H5j99MksDt_c6QLMNchvq00K0Tmv0Gnwut56g0cnG3Uc5K0GlAfM0AckJGE"
              },
              {
                name: "Sarah Jenkins",
                role: "Restaurant Manager",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDilAauDxg38a83OYoKNU7kNztrCXVUqLiDqdGiAKMVvxLH6No7GjsX96ClRaAWHrPHAIl53F459xApDW_orQTZjsAQG8ogSaSZWsWVMtn82lJ_HnbICY7xjXBJDol1fOyqCKjCAK0o_zUw6TVM643SuVgLPIfUQ_d3xdU4wO-9k-ef1OyHWhqyFtRa4tnn_L-LjyNeKPZWnVauUsuTriQN0fSLmwx4FLq-RsQqIo4S6b9o2SyXLq9znLKXjrlDpmMP7hczVKsw"
              },
              {
                name: "Rajiv Kapoor",
                role: "Sommelier",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWI42UVxqCn_k7lC5o3n-FqydemzZEEmJW4hTE_tLes4UdUGytGXxa7p0MFHv9buC6C-G64HQ5XDdtwzZqRgCObWpXqI0RWeQZYRB80LnHSLoxAqFmZqrKxRnFj2RfUeCZQY-QRnHTLxgiayEFXsoH5MI-dK2CGCQa1Kz_GjBBPFAOvon0Pfv7gG13ozMKl36CT-EucTf17oQilnPRt9z0Z30dbXjY7_qvSia82_fIDKykRuCnwTdMQZgUT35O-c4ZmrlPg8em"
              },
              {
                 name: "Priya Sharma",
                 role: "Pastry Chef",
                 img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUGQUenqbLO5J9xEAhOD3D-FvASz4KdTbUBzxrSRs0MK7mJnyflAYjofTTMTWrA_YR-AWxUzZiNgwOhDa1sdxxsQNcS5Zl-jJchALrRLStXyzAA_gq0pZfIe6tITUktqndfqA5Oo6eOCo-g1u1UUkEJqG7UggVpSCeUX3zLSRbZ9e6uyYw23pvA8addJ97o3-eEsCs4zrZ6gn0UC2JIYSAOkBqHL-0QPb5kyRJgcgfz7ZHxfYv2M7x0VygFLIweoZIMzeH7fdz"
              }
            ].map((member, idx) => (
              <div key={idx} className="group text-center">
                 <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-6 relative">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                       <div className="flex gap-4">
                          {/* Social icons could go here */}
                       </div>
                    </div>
                 </div>
                 <h3 className="text-xl font-serif font-bold text-white mb-1">{member.name}</h3>
                 <p className="text-primary text-sm uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
         </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary/5 border-t border-border-dark">
         <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Experience the Legacy</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
               Join us for an unforgettable evening where tradition meets modernity. 
               We invite you to be a part of our continuing story.
            </p>
            <Link to="/reservations" className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-background-dark px-10 py-4 rounded text-sm font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(236,200,19,0.3)] hover:shadow-[0_0_30px_rgba(236,200,19,0.5)] transform hover:-translate-y-1">
               Reserve Your Table <ChevronRight size={18} />
            </Link>
         </div>
      </section>

    </div>
  );
};

export default About;