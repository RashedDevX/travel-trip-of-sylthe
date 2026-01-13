
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pb-20 bg-white">
      {/* About Hero */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://image-worker.mindtrip.ai/image-resize/format=webp,w=1920/https:/images.mindtrip.ai/attractions/06a8/cb44/0aaa/4b5f/0e9c/9c5c/4e9b/baf0" 
            alt="About Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter">আমাদের সম্পর্কে</h1>
          <div className="h-1.5 w-24 bg-sky-500 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-sky-600 font-black uppercase tracking-widest text-sm mb-4 block">Travel Trip of Sylthe</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">আপনার বিশ্বস্ত ভ্রমণ সঙ্গী হিসেবে আমরা আছি সব সময়।</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                <strong>Travel Trip of Sylthe</strong> একটি আধুনিক ট্রাভেল এজেন্সি যা সিলেটের ঐতিহ্য এবং বাংলাদেশের সৌন্দর্য বিশ্ববাসীর কাছে তুলে ধরতে প্রতিশ্রুতিবদ্ধ। আমাদের রয়েছে দীর্ঘদিনের অভিজ্ঞতা এবং একঝাঁক দক্ষ গাইড যারা প্রতিটি ভ্রমণকে আনন্দদায়ক করতে কাজ করেন।
              </p>
              <p>
                আমরা শুধু টিকিট বা হোটেল বুকিং করি না, আমরা তৈরি করি আজীবনের শ্রেষ্ঠ স্মৃতি। আমাদের দেশি ও বিদেশি প্যাকেজগুলো এমনভাবে সাজানো হয়েছে যাতে আপনি সেরা বিলাসিতা এবং নিরাপত্তা নিশ্চিত করতে পারেন।
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="text-3xl font-black text-sky-600 mb-2">৫০০+</h4>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">সফল ভ্রমণ</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="text-3xl font-black text-sky-600 mb-2">১০০%</h4>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">নিরাপত্তা নিশ্চয়তা</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1544735049-717bd2df25ee?q=80&w=1000&auto=format&fit=crop" alt="Our Team" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-sky-600 p-8 rounded-[2.5rem] text-white shadow-2xl -rotate-3">
              <p className="text-xl font-black italic">"সেরা সেবার নিশ্চয়তা"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">আমাদের লক্ষ্য ও উদ্দেশ্য</h3>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">আমরা বিশ্বাস করি ভ্রমণ কেবল একটি স্থান পরিবর্তন নয়, এটি একটি নতুন অভিজ্ঞতা অর্জনের পথ।</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: 'fa-shield-heart', title: 'নিরাপত্তা', desc: 'ভ্রমণের প্রতিটি ধাপে আমরা আপনার এবং আপনার পরিবারের নিরাপত্তা নিশ্চিত করি।' },
            { icon: 'fa-gem', title: 'সেরা মান', desc: 'কম বাজেটেও আমরা সর্বোচ্চ মানের হোটেল এবং গাইড সুবিধা প্রদান করি।' },
            { icon: 'fa-earth-asia', title: 'নতুনত্ব', desc: 'আমরা নিয়মিত নতুন নতুন গন্তব্য যোগ করি যা আপনাকে রোমাঞ্চিত করবে।' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-50 text-center hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-sky-100 text-sky-600 rounded-3xl flex items-center justify-center text-3xl mx-auto mb-8">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto text-center py-20 px-6">
        <h3 className="text-3xl font-black text-slate-900 mb-8">আমাদের সাথে যুক্ত হতে চান?</h3>
        <Link to="/contact" className="btn-primary inline-flex px-16 py-6 text-white font-black rounded-3xl text-xl shadow-2xl">
          আজই যোগাযোগ করুন
        </Link>
      </div>
    </div>
  );
};

export default About;
