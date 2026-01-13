
import React from 'react';
import { DOMESTIC_PACKAGES } from '../constants';
import TourCard from '../components/TourCard';

const Domestic: React.FC = () => {
  return (
    <div className="pb-20 bg-gray-50 page-enter">
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://image-worker.mindtrip.ai/image-resize/format=webp,w=1920/https:/images.mindtrip.ai/attractions/06a8/cb44/0aaa/4b5f/0e9c/9c5c/4e9b/baf0" 
            alt="Domestic Background" 
            className="w-full h-full object-cover scale-105 animate-[pulse_10s_infinite]"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center animate-[revealUp_1s_ease-out]">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl">দেশি প্যাকেজসমূহ</h1>
          <div className="h-1.5 w-24 bg-sky-500 mx-auto rounded-full mb-8"></div>
          <p className="text-sky-100 max-w-2xl mx-auto text-xl font-medium drop-shadow-lg">নিজেদের দেশের সৌন্দর্য নতুন করে আবিষ্কার করুন। আমরা দিচ্ছি সাশ্রয়ী মূল্যে সেরা ভ্রমণ অভিজ্ঞতা।</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {DOMESTIC_PACKAGES.map((pkg, idx) => (
            <div key={pkg.id} className="animate-[revealUp_0.8s_ease-out]" style={{ animationDelay: `${idx * 0.15}s` }}>
              <TourCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domestic;
