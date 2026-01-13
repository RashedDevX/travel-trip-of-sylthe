
import React from 'react';
import { Link } from 'react-router-dom';
import { DOMESTIC_PACKAGES, DESTINATIONS, FACEBOOK_LINK } from '../constants';
import TourCard from '../components/TourCard';

const Home: React.FC = () => {
  return (
    <div className="w-full page-enter">
      {/* Gorgeous Hero Section with Handwriting Animation */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://image-worker.mindtrip.ai/image-resize/format=webp,w=1920/https:/images.mindtrip.ai/attractions/06a8/cb44/0aaa/4b5f/0e9c/9c5c/4e9b/baf0" 
            alt="Traveling Background" 
            className="w-full h-full object-cover scale-100 animate-[pulse_8s_infinite]"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl animate-[revealUp_1s_ease-out]">
          <div className="inline-flex items-center bg-sky-500/10 backdrop-blur-xl px-6 py-2 rounded-full border border-sky-400/30 text-sky-300 font-bold text-sm mb-10 shadow-2xl">
            <span className="flex h-2 w-2 rounded-full bg-sky-400 mr-3 animate-ping"></span>
            আপনার জন্য সেরা ট্যুর প্যাকেজগুলো এখানে
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            <div className="handwriting">
              অপূর্ব <span className="text-sky-400">বাংলাদেশ</span>
            </div>
            <br /> 
            <span className="text-gradient drop-shadow-2xl">ঘুরে দেখুন আমাদের সাথে</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            স্মরণীয় সব ভ্রমণের জন্য আমরা দিচ্ছি প্রিমিয়াম সার্ভিস এবং বিশেষজ্ঞ গাইড। আপনার নিরাপদ ভ্রমণই আমাদের প্রধান লক্ষ্য।
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/domestic" className="btn-primary w-full sm:w-auto px-12 py-5 text-white font-black rounded-3xl text-xl flex items-center justify-center shadow-2xl">
              দেশি প্যাকেজ দেখুন
              <i className="fas fa-arrow-right ml-3 text-sm"></i>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-white text-[#0f172a] font-black rounded-3xl text-xl hover:bg-sky-50 transition-all shadow-xl active:scale-95">
              বুকিং রিকোয়েস্ট
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40 animate-bounce">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/30 to-white/50"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        </div>
      </section>

      {/* Pop Destinations */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">জনপ্রিয় গন্তব্য</h2>
            <div className="h-1.5 w-20 bg-sky-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DESTINATIONS.map((dest, idx) => (
              <div 
                key={dest.id} 
                className={`group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl transition-all hover:-translate-y-4 duration-500 animate-[revealUp_0.8s_ease-out]`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase mb-3 inline-block shadow-lg">{dest.packageCount} প্যাকেজ</span>
                  <h3 className="text-3xl font-black text-white group-hover:text-sky-400 transition-colors">{dest.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black text-slate-900 mb-6">আমাদের বিশেষ অফার</h2>
              <p className="text-slate-500 text-lg font-medium">সাশ্রয়ী মূল্যে প্রিমিয়াম ট্যুর প্যাকেজগুলো বেছে নিন আপনার পরিবার বা প্রিয়জনের জন্য।</p>
            </div>
            <Link to="/domestic" className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-sky-600 transition-all shadow-xl active:scale-95">
              সব প্যাকেজ দেখুন
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {DOMESTIC_PACKAGES.map((pkg) => (
              <TourCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Sylhet Special */}
      <section className="py-32 bg-[#0f172a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="animate-[revealUp_1s_ease-out]">
              <span className="inline-block px-4 py-2 bg-sky-500/10 text-sky-400 rounded-xl text-sm font-black mb-6 border border-sky-500/20 uppercase tracking-widest">সিলেট স্পেশাল</span>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[1.1]">মায়াবী <span className="text-sky-400">সিলেট</span><br />ঘুরুন আমাদের সাথে</h2>
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed">সিলেটের সন্তান হিসেবে আমরা আপনাকে দেখাবো আমাদের এই অঞ্চলের লুকানো সৌন্দর্য যা অন্য কেউ দেখাতে পারবে না।</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <i className="fas fa-home text-2xl"></i>
                  </div>
                  <span className="text-white font-bold text-lg">সেরা রিসোর্ট</span>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <i className="fas fa-shield-alt text-2xl"></i>
                  </div>
                  <span className="text-white font-bold text-lg">নিরাপদ ভ্রমণ</span>
                </div>
              </div>
              
              <Link to="/domestic" className="btn-primary inline-flex px-12 py-5 text-white font-black rounded-3xl text-lg shadow-2xl active:scale-95">
                প্যাকেজগুলো দেখুন
              </Link>
            </div>
            <div className="relative img-hover-zoom rounded-[4rem] animate-[revealUp_1.2s_ease-out]">
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0SL3wsg9i9mXZK36kkzeToqdz8uCPqlaHagEDW04bBgTaalsyULbQ7lE&s=10" className="w-full h-[600px] object-cover transition-transform duration-[3s]" alt="Sylhet" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-sky-500 p-10 rounded-[3rem] shadow-2xl hidden md:block hover:scale-105 transition-transform">
                <p className="text-white text-4xl font-black leading-none mb-2">১৫+</p>
                <p className="text-sky-100 font-bold uppercase tracking-widest text-xs">বছরের অভিজ্ঞতা</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-sky-600 to-blue-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
              <h2 className="text-5xl md:text-7xl font-black mb-10">আপনি কি তৈরি?</h2>
              <p className="text-xl md:text-2xl mb-16 opacity-90 max-w-2xl mx-auto font-medium">আমাদের বিশেষজ্ঞ টীম আপনার স্বপ্নের ভ্রমণ সাজাতে অপেক্ষায় আছে।</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-12 py-6 bg-white text-sky-700 font-black rounded-3xl text-xl hover:scale-105 transition-all shadow-xl active:scale-95">
                  মেসেজ দিন
                </a>
                <a href="tel:+8801234567890" className="w-full sm:w-auto px-12 py-6 bg-sky-950 text-white font-black rounded-3xl text-xl hover:scale-105 transition-all shadow-xl active:scale-95">
                  সরাসরি কল
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
