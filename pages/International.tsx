
import React from 'react';
import { INTERNATIONAL_PACKAGES } from '../constants';
import TourCard from '../components/TourCard';

const International: React.FC = () => {
  return (
    <div className="pb-20 bg-gray-50">
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://image-worker.mindtrip.ai/image-resize/format=webp,w=1920/https:/images.mindtrip.ai/attractions/06a8/cb44/0aaa/4b5f/0e9c/9c5c/4e9b/baf0" 
            alt="International Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl">বিদেশি প্যাকেজসমূহ</h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-xl font-medium drop-shadow-lg">বিদেশের নামী গন্তব্যে ভ্রমণের স্বপ্ন পূরণ করুন আমাদের প্রিমিয়াম প্যাকেজের সাথে।</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {INTERNATIONAL_PACKAGES.map((pkg) => (
            <TourCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default International;
