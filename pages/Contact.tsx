
import React, { useState } from 'react';
import { FACEBOOK_LINK } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: 'Domestic',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("আপনার বার্তার জন্য ধন্যবাদ! আমরা শীঘ্রই যোগাযোগ করবো।");
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-sky-600 p-8 md:p-12 text-white">
            <h2 className="text-3xl font-black mb-8">যোগাযোগ করুন</h2>
            <p className="opacity-80 mb-12 font-light">ভ্রমণ নিয়ে যেকোনো প্রশ্ন বা কাস্টমাইজড প্ল্যানিংয়ের জন্য আমরা সবসময় আপনার পাশে আছি।</p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shadow-inner">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <p className="text-xs opacity-60 font-bold uppercase">কল করুন</p>
                  <p className="font-black text-xl">+৮৮০ ১২৩৪-৫৬৭৮৯০</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shadow-inner">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-xs opacity-60 font-bold uppercase">অফিস ঠিকানা</p>
                  <p className="font-black text-lg">জিন্দাবাজার, সিলেট, বাংলাদেশ</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="font-bold mb-4 uppercase text-xs opacity-60 tracking-widest">ফলো করুন</p>
              <div className="flex space-x-4">
                <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-sky-600 rounded-2xl flex items-center justify-center hover:bg-sky-50 transition-all shadow-lg">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-8 md:p-16">
            <h2 className="text-3xl font-black text-slate-800 mb-8">বুকিং বা তথ্য অনুসন্ধান</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">আপনার নাম</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    placeholder="নাম লিখুন"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">ইমেইল ঠিকানা</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    placeholder="ইমেইল লিখুন"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">ফোন নম্বর</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    placeholder="নম্বর লিখুন"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">পছন্দের প্যাকেজ</label>
                  <select 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    value={formData.package}
                    onChange={(e) => setFormData({...formData, package: e.target.value})}
                  >
                    <option>দেশি (বাংলাদেশ)</option>
                    <option>বিদেশি (দেশের বাইরে)</option>
                    <option>কাস্টম ট্যুর প্ল্যান</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">বিস্তারিত বলুন</label>
                <textarea 
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  placeholder="আপনার ট্যুর সম্পর্কে বলুন..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto px-16 py-5 bg-sky-600 text-white font-black rounded-2xl hover:bg-sky-700 transition-all shadow-xl shadow-sky-100 transform hover:-translate-y-1"
              >
                বার্তা পাঠান
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
