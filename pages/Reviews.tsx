import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { rating: '5 Stars', count: 90 },
  { rating: '4 Stars', count: 6 },
  { rating: '3 Stars', count: 2 },
  { rating: '2 Stars', count: 1 },
  { rating: '1 Star', count: 1 },
];

const reviews = [
  {
    name: 'Aarav Patel',
    date: '2 days ago',
    rating: 5,
    text: 'The Butter Chicken is simply divine, rich and creamy just like in Delhi.',
    tags: ['Dinner', 'Butter Chicken'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr0cHiXwU4UmMF3py6Y8pTy23w4dQsOl0TnCOfxB660vMaRS6HKTL-gMkQIweWmxCEX7-cBl5hyjXe0UzAWw_Lg4xqM4Zn6OAi_R_a070DzywmcqLYNs4wPpwvjbPu__Gzi1WsVQlhpGO14BGyG4NrIX81ZHmFLBkWF-xCC44QjeU60y_7ynLK1TNRkQIa26ZgUshNUu4wB9tRb0WURwl4Hma9l7Ff82_IIIE4SplT5v6u63pmb3SFsfbUAGrP5lkNCfTNv7nu'
  },
  {
    name: 'Sarah Jenkins',
    date: '1 week ago',
    rating: 5,
    text: 'An absolute gem! The ambience made our anniversary dinner unforgettable. Deep blacks and gold accents are stunning.',
    tags: ['Anniversary', 'Ambience'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUGQUenqbLO5J9xEAhOD3D-FvASz4KdTbUBzxrSRs0MK7mJnyflAYjofTTMTWrA_YR-AWxUzZiNgwOhDa1sdxxsQNcS5Zl-jJchALrRLStXyzAA_gq0pZfIe6tITUktqndfqA5Oo6eOCo-g1u1UUkEJqG7UggVpSCeUX3zLSRbZ9e6uyYw23pvA8addJ97o3-eEsCs4zrZ6gn0UC2JIYSAOkBqHL-0QPb5kyRJgcgfz7ZHxfYv2M7x0VygFLIweoZIMzeH7fdz'
  },
  {
    name: 'Michael Chen',
    date: '2 weeks ago',
    rating: 5,
    text: 'Exceptional service from the moment we walked in. The staff treated us like royalty.',
    tags: ['Service', 'Wine Pairing'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDilAauDxg38a83OYoKNU7kNztrCXVUqLiDqdGiAKMVvxLH6No7GjsX96ClRaAWHrPHAIl53F459xApDW_orQTZjsAQG8ogSaSZWsWVMtn82lJ_HnbICY7xjXBJDol1fOyqCKjCAK0o_zUw6TVM643SuVgLPIfUQ_d3xdU4wO-9k-ef1OyHWhqyFtRa4tnn_L-LjyNeKPZWnVauUsuTriQN0fSLmwx4FLq-RsQqIo4S6b9o2SyXLq9znLKXjrlDpmMP7hczVKsw'
  },
   {
    name: 'Priya Sharma',
    date: '3 weeks ago',
    rating: 4,
    text: 'Great food, slightly pricey but worth it for the luxury feel. The Dal Makhani is a must-try.',
    tags: ['Dal Makhani'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1JhWvvzcSxCIAdojpbZfgLRiXkGxcHnk5YPE_-bgHw081uXUOF6xbVOgB_fNqpfoTior_UWBTGYiIfy4_bhT8noACAREDAR4pLfYMSnr7Bao1ebDjaZn2nVyGXgcZy-p5DC4ECwKOeeekxjgSW2jj1EFK0n4o43A4jMGkk5jR5qD17AOSgtyWazk_Eox7I9dMLxFJF9j-KeuMdw-v896G6ZeH4e--BH4IkQU2RzRBOEwlsWjW-Mh1c_Ez_ifF4PcHdGrEZ6MR'
  },
];

const Reviews = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-background-dark border-b border-border-dark">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-40">
           <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Guest Reviews</h1>
           <p className="text-gray-400 font-light">Experience the Taste of Royalty through the eyes of our patrons.</p>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-6 py-12">
        {/* Rating Summary Card */}
        <div className="bg-surface-highlight p-8 rounded-xl border border-border-dark mb-12 flex flex-col md:flex-row gap-12 items-center shadow-2xl">
          <div className="flex flex-col gap-2 min-w-[200px]">
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-light text-white">4.9</span>
              <span className="text-gray-400 text-sm">out of 5</span>
            </div>
            <div className="flex gap-1 text-primary">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-white text-sm mt-1">Based on 2,000+ experiences</p>
          </div>
          
          <div className="flex-1 w-full h-[150px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart layout="vertical" data={data} margin={{ left: 40 }}>
                 <XAxis type="number" hide />
                 <YAxis dataKey="rating" type="category" stroke="#9ca3af" fontSize={12} width={50} tickLine={false} axisLine={false} />
                 <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: '#181711', border: '1px solid #393628', borderRadius: '4px' }}
                 />
                 <Bar dataKey="count" barSize={8} radius={[0, 4, 4, 0]}>
                   {data.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill="#ecc813" />
                   ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#1e1c15] p-6 rounded-xl border border-border-dark hover:border-primary/30 transition-all hover:shadow-lg">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                   <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full border border-primary/20 object-cover" />
                   <div>
                     <p className="text-white font-medium">{review.name}</p>
                     <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{review.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#ecc813]">
                           <CheckCircle size={12} /> Verified
                        </span>
                     </div>
                   </div>
                 </div>
               </div>
               
               <div className="flex gap-1 text-primary mb-4">
                  {Array.from({length: 5}).map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-gray-600" : ""} />
                  ))}
               </div>

               <p className="text-gray-300 italic font-light mb-4">"{review.text}"</p>

               <div className="flex gap-2">
                 {review.tags.map(tag => (
                   <span key={tag} className="px-2 py-1 bg-border-dark/40 rounded text-xs text-primary/80">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
