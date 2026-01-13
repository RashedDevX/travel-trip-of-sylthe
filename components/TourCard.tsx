
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TourPackage } from '../types';

interface Props {
  pkg: TourPackage;
}

const TourCard: React.FC<Props> = ({ pkg }) => {
  const [showDetail, setShowDetail] = useState(false);
  const navigate = useNavigate();

  const handleBooking = () => {
    setShowDetail(false);
    navigate('/contact');
  };

  return (
    <>
      <div className="premium-card group bg-white rounded-[2.5rem] overflow-hidden shadow-lg flex flex-col h-full border border-slate-100">
        <div className="relative h-72 img-hover-zoom">
          <img 
            src={pkg.image} 
            alt={pkg.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 flex space-x-2">
            <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
              {pkg.type === 'Domestic' ? 'বাংলাদেশ' : 'আন্তর্জাতিক'}
            </span>
          </div>
          <div className="absolute bottom-6 right-6 bg-sky-500 text-white px-4 py-2 rounded-xl text-sm font-black shadow-lg">
            <i className="far fa-clock mr-2"></i> {pkg.duration}
          </div>
        </div>
        
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center text-sky-500 text-sm font-bold mb-4 uppercase tracking-tighter">
            <i className="fas fa-location-dot mr-2"></i>
            {pkg.location}
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-sky-600 transition-colors leading-tight">
            {pkg.title}
          </h3>
          <p className="text-slate-500 font-medium mb-8 line-clamp-2 leading-relaxed">
            {pkg.description}
          </p>
          
          <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">প্যাকেজ শুরু</p>
              <p className="text-3xl font-black text-slate-900 tracking-tight">{pkg.price}</p>
            </div>
            <button 
              onClick={() => setShowDetail(true)}
              className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-sky-500 transition-all shadow-lg active:scale-90"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* High-End Detail Modal */}
      {showDetail && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-md transition-opacity duration-300" onClick={() => setShowDetail(false)}></div>
          
          <div className="animate-modal bg-white rounded-[3rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl z-10">
            <button 
              onClick={() => setShowDetail(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/20 shadow-xl rounded-full flex items-center justify-center text-white z-50 hover:bg-red-500 hover:text-white transition-all active:scale-90"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="h-96 w-full relative">
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-10">
                <span className="inline-block px-5 py-1.5 bg-sky-500 text-white rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-xl">
                  {pkg.type === 'Domestic' ? 'দেশি প্যাকেজ' : 'বিদেশি প্যাকেজ'}
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{pkg.title}</h2>
              </div>
            </div>
            
            <div className="p-10 md:p-14">
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="text-center p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-sky-200 transition-colors">
                  <i className="far fa-clock text-sky-500 text-xl mb-2"></i>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">সময়কাল</p>
                  <p className="font-bold text-slate-800">{pkg.duration}</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-sky-200 transition-colors">
                  <i className="fas fa-location-dot text-sky-500 text-xl mb-2"></i>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">গন্তব্য</p>
                  <p className="font-bold text-slate-800">{pkg.location.split(',')[0]}</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-sky-200 transition-colors">
                  <i className="fas fa-tags text-sky-500 text-xl mb-2"></i>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ক্যাটাগরি</p>
                  <p className="font-bold text-slate-800">লাক্সারি</p>
                </div>
              </div>

              <div className="space-y-8 mb-16">
                <div>
                  <h4 className="font-black text-slate-900 text-2xl mb-4 border-l-4 border-sky-500 pl-4 uppercase tracking-tighter">ট্যুর ডেসক্রিপশন</h4>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">{pkg.description}</p>
                </div>
                
                <div>
                  <h4 className="font-black text-slate-900 text-2xl mb-6 border-l-4 border-sky-500 pl-4 uppercase tracking-tighter">যা যা থাকছে</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-sky-50 rounded-2xl text-sky-700 font-bold border border-sky-100 hover:bg-sky-100 transition-colors cursor-default">
                        <i className="fas fa-check-circle text-lg"></i>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-slate-100">
                <div className="text-center md:text-left">
                  <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em] mb-2">সর্বমোট প্যাকেজ মূল্য</p>
                  <p className="text-5xl font-black text-slate-900 tracking-tighter">{pkg.price}</p>
                </div>
                <button 
                  onClick={handleBooking}
                  className="w-full md:w-auto btn-primary text-white font-black px-16 py-6 rounded-2xl text-xl shadow-2xl active:scale-95"
                >
                  বুকিং রিকোয়েস্ট পাঠান
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourCard;
