
import React from 'react';
import { Link } from 'react-router-dom';
import { FACEBOOK_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <div className="flex flex-col">
            <span className="font-black text-3xl tracking-tighter text-sky-500">TRAVEL TRIP</span>
            <span className="text-xs font-bold tracking-[0.3em] text-white">OF SYLTHE</span>
          </div>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            বাংলাদেশের সৌন্দর্য বিশ্বের কাছে পৌঁছে দেওয়ার জন্য আমাদের এই ক্ষুদ্র প্রয়াস। আপনার প্রতিটি ভ্রমণ হোক নিরাপদ ও স্মরণীয়।
          </p>
          <div className="flex space-x-4 pt-4">
            <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" className="bg-sky-600 w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-sky-500 transition-all">
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a href="#" className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 w-12 h-12 rounded-2xl flex items-center justify-center hover:scale-110 transition-all">
              <i className="fab fa-instagram text-lg"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-black mb-8 border-b border-white/10 pb-4">লিঙ্কসমূহ</h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            <li><Link to="/" className="hover:text-sky-400 transition-colors">হোম পেজ</Link></li>
            <li><Link to="/domestic" className="hover:text-sky-400 transition-colors">দেশি প্যাকেজ</Link></li>
            <li><Link to="/international" className="hover:text-sky-400 transition-colors">বিদেশি প্যাকেজ</Link></li>
            <li><Link to="/contact" className="hover:text-sky-400 transition-colors">যোগাযোগ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-black mb-8 border-b border-white/10 pb-4">গন্তব্যসমূহ</h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            <li>কক্সবাজার রিট্রিট</li>
            <li>সাজেক ভ্যালি</li>
            <li>সিলেট চা বাগান</li>
            <li>সেন্ট মার্টিন</li>
            <li>থাইল্যান্ড ও বালি</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-black mb-8 border-b border-white/10 pb-4">যোগাযোগ</h4>
          <ul className="space-y-6 text-slate-400 text-sm font-medium">
            <li className="flex items-start space-x-4">
              <i className="fas fa-map-marker-alt text-sky-500 text-lg mt-1"></i>
              <span>জিন্দাবাজার, সিলেট শহর, বাংলাদেশ</span>
            </li>
            <li className="flex items-center space-x-4">
              <i className="fas fa-phone-alt text-sky-500 text-lg"></i>
              <span>+৮৮০ ১২৩৪-৫৬৭৮৯০</span>
            </li>
            <li className="flex items-center space-x-4">
              <i className="fas fa-envelope text-sky-500 text-lg"></i>
              <span>info@traveltripofsylthe.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 pt-10 border-t border-white/5 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} TRAVEL TRIP OF SYLTHE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
