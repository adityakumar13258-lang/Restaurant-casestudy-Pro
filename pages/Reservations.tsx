import React, { useState } from 'react';
import { ChevronRight, Check, Users, Calendar, Clock, Utensils } from 'lucide-react';

type Step = 'guests' | 'date' | 'meal' | 'time' | 'confirm';

const Reservations = () => {
  const [step, setStep] = useState<Step>('guests');
  const [data, setData] = useState({
    guests: 2,
    date: 'today',
    meal: 'Dinner',
    time: '20:00'
  });

  const nextStep = () => {
    const steps: Step[] = ['guests', 'date', 'meal', 'time', 'confirm'];
    const currentIdx = steps.indexOf(step);
    if (currentIdx < steps.length - 1) {
      setStep(steps[currentIdx + 1]);
    }
  };

  const dates = [
    { id: 'today', day: 'Mon', date: '12' },
    { id: 'tue', day: 'Tue', date: '13' },
    { id: 'wed', day: 'Wed', date: '14' },
    { id: 'thu', day: 'Thu', date: '15' },
    { id: 'fri', day: 'Fri', date: '16' },
  ];

  const times = [
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="w-full max-w-[480px] bg-white dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden border border-border-dark flex flex-col min-h-[600px] relative">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-border-dark flex items-center justify-between sticky top-0 bg-white/95 dark:bg-surface-dark/95 backdrop-blur z-20">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-slate-900 dark:text-white">Book a Table</h1>
            <span className="text-xs text-primary font-bold tracking-widest uppercase">Maharaja's Court</span>
          </div>
          <div className="text-xs font-mono text-gray-500">
            Step {['guests', 'date', 'meal', 'time', 'confirm'].indexOf(step) + 1}/5
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 pb-24 overflow-y-auto">
          {/* Image */}
          <div className="w-full h-40 rounded-xl overflow-hidden mb-8 relative shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHdX-x5wq-0b0FEE-RLCZl1zHBvX06OmUkp6rsfpkts1vy4a4lhE7y5i6bbB56m6S_oqyI-6JXIWGa1vnxPYvqOUmoFNtZdZ_-2BA4jV1oOqF5hjTRew4H44xA1bnVEV0a1kRvYnjGCycAoGKGLXWLvvfk-pL-hHETOFISnaXcWKh8KaT_PULCaK6oOvYgcZXaGHHExg_i0iQqEWo13xgbqGQaJ7taqkyvimPYWrXH8x4WX-8YKFhtr_TeTZ9S-ryjFx2BL8Z_" 
              alt="Restaurant interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-4 z-20 flex items-center gap-1 text-white/90 text-sm">
              <span className="text-primary"><Users size={16} /></span>
              <span>New Delhi, India</span>
            </div>
          </div>

          {/* Step 1: Guests */}
          <div className={`transition-opacity duration-300 ${step === 'guests' ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
             <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Number of Guests</h2>
              <span className="text-sm text-gray-500">Adults only</span>
            </div>
            <div className="flex gap-2 mb-8">
              {[1, 2, 3, 4, 5].map(num => (
                <button
                  key={num}
                  onClick={() => { setData({...data, guests: num}); if(step === 'guests') setStep('date'); }}
                  className={`flex-1 h-12 rounded-lg border flex items-center justify-center font-medium transition-all ${
                    data.guests === num 
                      ? 'bg-primary border-primary text-background-dark font-bold' 
                      : 'border-gray-200 dark:border-border-dark bg-transparent text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  {num}{num === 5 ? '+' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Date */}
          <div className={`transition-opacity duration-300 ${['guests'].includes(step) ? 'hidden' : step === 'date' ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Select Date</h2>
            <div className="flex gap-3 overflow-x-auto pb-4 mb-4 scrollbar-hide -mx-6 px-6">
              {dates.map(d => (
                <button
                  key={d.id}
                  onClick={() => { setData({...data, date: d.id}); if(step === 'date') setStep('meal'); }}
                  className={`flex-shrink-0 w-16 h-20 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                    data.date === d.id 
                      ? 'bg-primary border-primary text-background-dark shadow-lg shadow-primary/20' 
                      : 'border-gray-200 dark:border-border-dark bg-transparent text-gray-500 hover:border-primary/50'
                  }`}
                >
                  <span className="text-xs font-medium uppercase opacity-70">{d.day}</span>
                  <span className="text-xl font-bold">{d.date}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Meal */}
          <div className={`transition-opacity duration-300 ${['guests', 'date'].includes(step) ? 'hidden' : step === 'meal' ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
            <div className="flex p-1 rounded-xl bg-gray-100 dark:bg-border-dark border border-transparent mb-8">
              {['Breakfast', 'Lunch', 'Dinner'].map(m => (
                <button
                  key={m}
                  onClick={() => { setData({...data, meal: m}); if(step === 'meal') setStep('time'); }}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                    data.meal === m 
                      ? 'bg-white dark:bg-surface-dark text-slate-900 dark:text-white shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Time */}
          <div className={`transition-opacity duration-300 ${['guests', 'date', 'meal'].includes(step) ? 'hidden' : ''}`}>
             <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Available Times</h2>
             <div className="grid grid-cols-3 gap-3">
               {times.map((t, idx) => (
                 <button
                   key={t}
                   disabled={t === '19:00'}
                   onClick={() => setData({...data, time: t})}
                   className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                     t === '19:00' 
                       ? 'border-transparent bg-gray-100 dark:bg-white/5 text-gray-400 cursor-not-allowed line-through' 
                       : data.time === t
                         ? 'bg-primary border-primary text-background-dark font-bold'
                         : 'border-gray-200 dark:border-border-dark bg-transparent hover:border-primary/50'
                   }`}
                 >
                   {t}
                 </button>
               ))}
             </div>
          </div>

          {/* Confirmation Overlay */}
          {step === 'confirm' && (
             <div className="absolute inset-0 bg-surface-dark z-50 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
               <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(236,200,19,0.4)]">
                 <Check size={40} className="text-background-dark" />
               </div>
               <h2 className="text-2xl font-serif font-bold text-white mb-2">Reservation Confirmed!</h2>
               <p className="text-gray-400 mb-8">We look forward to hosting you at The Royal Spice.</p>
               
               <div className="bg-background-dark p-6 rounded-lg border border-border-dark w-full text-left space-y-4 mb-8">
                 <div className="flex items-center gap-4">
                   <Calendar className="text-primary" />
                   <div>
                     <p className="text-xs text-gray-500 uppercase tracking-widest">Date</p>
                     <p className="font-bold text-white">Aug {dates.find(d => d.id === data.date)?.date}, 2024</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <Clock className="text-primary" />
                   <div>
                     <p className="text-xs text-gray-500 uppercase tracking-widest">Time</p>
                     <p className="font-bold text-white">{data.time} PM</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <Users className="text-primary" />
                   <div>
                     <p className="text-xs text-gray-500 uppercase tracking-widest">Guests</p>
                     <p className="font-bold text-white">{data.guests} Adults</p>
                   </div>
                 </div>
               </div>
               
               <button onClick={() => setStep('guests')} className="text-primary text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
                 Make another reservation
               </button>
             </div>
          )}

        </div>

        {/* Action Bar */}
        {step !== 'confirm' && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent dark:from-surface-dark dark:via-surface-dark pt-12 z-20">
            <button 
              onClick={nextStep}
              className="w-full h-14 bg-primary text-surface-dark text-base font-bold rounded-xl shadow-[0_0_20px_rgba(236,200,19,0.3)] hover:shadow-[0_0_25px_rgba(236,200,19,0.5)] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>{step === 'time' ? 'Confirm Reservation' : 'Proceed'}</span>
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservations;
