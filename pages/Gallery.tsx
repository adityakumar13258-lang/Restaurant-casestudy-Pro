import React from 'react';

const Gallery = () => {
  return (
    <div className="pt-20 min-h-screen bg-background-dark">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(24, 23, 17, 0.5) 0%, rgba(24, 23, 17, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzdbObjgaQXWD8-t4PcfMjCY0ldFy8YZPEMIZsWUvNGptIkfvxrJuqylWXGIiY_3iA31hAYxKojYcMEGcOpYVk8dQLoZZPhUZioXPkRh-BP0CBdFWK3NWNJm0-gjXXMFJHhPnJc6tvV9y9KQzdom2ZbPASzUGmMXw07V22l9q--Lz0Jtthk1uv6fJtoRuDDbiw4mARJaq1ZBY135BltewSklcvK1ry5f17ts5blhPvBXLlmKzVPJQ3RoYtWw5sQJOZbVVOdfcZ")'}}></div>
        <div className="relative z-10 text-center px-6">
          <div className="w-16 h-[1px] bg-primary/60 mx-auto mb-6"></div>
          <h2 className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">The Gallery</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white mb-6">A Visual Symphony</h1>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[73px] z-30 bg-background-dark/95 backdrop-blur-md border-b border-border-dark py-4">
        <div className="max-w-[1440px] mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex justify-center gap-4 min-w-max">
            {['All', 'Culinary Art', 'Interior', 'Events'].map((filter, idx) => (
              <button key={filter} className={`px-6 py-2 rounded-full border text-sm tracking-wide transition-all ${idx === 0 ? 'border-primary bg-primary/10 text-primary' : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          
          {/* Item 1 - Large */}
          <div className="group relative rounded-lg overflow-hidden md:col-span-2 md:row-span-2 cursor-pointer border border-transparent hover:border-primary/30 transition-all">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7WS3ew2AOry3zxapatvrdqoO4wk9SWMUo-3MZ6NbNNApnKzsJNDGcbFMOd9Gj6I41v7KxQppqULLG7z7IYuHIg_ff0v6hjZeSuA0_vlTfbFE66bYBNlivYhXOeNCRqIyVQmTa3k_55Wr603A-qsN-z5cjdWT6T64TtTEiyWz9uot5KZE2tzYbwOdYtdrQRRdsQNY28ZKh4Gc4j9X-f1Gt3KlwzzKsqfdqW6rxc_ZP-BN1KJ4PuIHrlPqWcnSmt3RnW02CloNY")'}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Signature Dish</p>
              <h3 className="text-white text-3xl font-serif">Royal Lamb Rogan Josh</h3>
            </div>
          </div>

          {/* Item 2 - Tall */}
          <div className="group relative rounded-lg overflow-hidden md:row-span-2 cursor-pointer border border-transparent hover:border-primary/30 transition-all">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABzTkHfbFC5eshmLylr9X5vIkC_6Jr7Xm9z_FN6xMJg6l6G2iRlpTegJyOX9UQr3Kj1c6Jcri4E2WDdtgrptJLkoMF1hi5i9vM8kKNrR7piQpDusMrvhYA7tR0F4Af6HqhjSPeWQ7npZniKTq_eloUS5BSpjxDO_GdJcnnLWbeWwSUpO412rEqYtORbFxIOABsUFI_0V2x-EkRtvh5COlXZ5j6XKbq1UC0TpLEWlBLbleeBPgTXPB4D_ePvr23mcuqoZFdmub1")'}}></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
             <div className="absolute bottom-0 left-0 p-6">
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Ambience</p>
                <h3 className="text-white text-xl font-serif">Grand Hall Chandelier</h3>
             </div>
          </div>

          {/* Item 3 */}
          <div className="group relative rounded-lg overflow-hidden cursor-pointer border border-transparent hover:border-primary/30 transition-all">
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfwdtoKjUi_83mqYVTATYBVJbaK37a9gYxW09AKnst5y4973U6fLZI13HyOMs5JHQT1YKSyR_60KZLkgLfDYXUu-DnAoOGjZJP3nVgBBRPqHSWFfTUaQTaDSWsvnJU3RLl-S470Znx9noY4E8bOttcZoXQXVHlUGHB_rLIAwbx3Xp35Vg5ljGll5mShSEJ-XH7581irLmZ4ACqxflPt_2FOjlCeRW8aT9quO_S-PpnBmabIh2vK4POHw9iEMpLdH-gcBOvIDYn")'}}></div>
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
             <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-medium">Saffron Sunset</p>
             </div>
          </div>

           {/* Item 4 */}
          <div className="group relative rounded-lg overflow-hidden cursor-pointer border border-transparent hover:border-primary/30 transition-all">
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqqGtBrytdBYYyZK6ooZGfFi6_8ywclVtCTYaaAtFsfJC7WRo36I5HWz2aiHO_F5YAd3cLoU04ELx4tdNjS8LZPNi9vuJ5ZDeoxR1n0UKdK01iPlY_UiovbhEwS7kyym7oE-PUnUr4Wc1h_E8Bj8rfEXG7HXQupB3tJV3A1b9rLZpCGVA-M7TSXgx5VlpBQGuWR98meOYe9-5v0_Pe1KMbXxSrXd6ZpbBAtZfZJ4jJbNEUuSfd29Jys6wyyUHI9AO27XJsegIx")'}}></div>
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-medium">Garlic Naan Basket</p>
             </div>
          </div>

          {/* Item 5 - Wide */}
          <div className="group relative rounded-lg overflow-hidden md:col-span-2 cursor-pointer border border-transparent hover:border-primary/30 transition-all">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8h_4Lat_mQycNCCqT1471wn8XNUOatZq9g7f2urGsXAEUEdL6Dxbweii5cAfd77eFFm2qgahV573yQtA_l0_DjXIgkCRx8cuDdgJ4l9kWA7QjAElAz7wOzTxFy4AB890aLksqWTN22ZkpPIN04ED3bdGWhPvIgqpASb3XTYUgJQMBv_pdyM61MvSibxCf9KtRF7ubdvmfm9SCglJJoWFRJBVlgLmh7g2SmTJ93YWQmTm7Vtzkd2xMnB4ki_iuntdT7kvzYbDW")'}}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
               <p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Private Dining</p>
               <h3 className="text-white text-2xl font-serif">The Maharaja Room</h3>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Gallery;
