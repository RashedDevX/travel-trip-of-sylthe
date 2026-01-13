
import { TourPackage, Destination } from './types';

export const LOGO_TEXT = "Travel Trip of Sylthe";
export const FACEBOOK_LINK = "https://www.facebook.com/traveltripofsylthe.ttos";

/** 
 * নির্দেশিকা (কিভাবে নতুন প্যাকেজ যোগ করবেন):
 * ১. নিচের [ ] ব্র্যাকেটের ভেতরে নতুন একটি অংশ { } কপি করে বসান।
 * ২. প্রতিটি অংশের পর একটি কমা (,) দিন।
 * ৩. image এর জায়গায় আপনার ছবির অনলাইন লিঙ্ক দিন।
 */

export const DOMESTIC_PACKAGES: TourPackage[] = [
  {
    id: 'p1', // এটাকে ইউনিক রাখবেন (যেমন: p1, p2, p3...)
    title: 'কক্সবাজার লাক্সারি রিট্রিট',
    location: 'কক্সবাজার, বাংলাদেশ',
    price: '৳১২,৫০০',
    duration: '৩ দিন, ২ রাত',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345053324.webp?k=dbe74b0f66f3da28af32685e74f5fc73727e41d5c990af392e6463bd3b31da5b&o=',
    description: 'পাঁচ তারকা হোটেলের সুবিধা এবং সমুদ্রের নোনা বাতাসের এক চমৎকার মিলনমেলা।',
    highlights: ['ফাইভ স্টার রিসোর্ট', 'সি-ভিউ ব্যালকনি', 'পারসোনাল গাইড'],
    type: 'Domestic'
  },
  {
    id: 'p2',
    title: 'সাজেক ভ্যালি ক্লাউড ট্যুর',
    location: 'রাঙ্গামাটি, বাংলাদেশ',
    price: '৳৮,৫০০',
    duration: '২ দিন, ৩ রাত',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelxK9IgvM87_8RPgI8KA7tj3nT04uJi7u8Sr2TrhfOw&s=10',
    description: 'মেঘের রাজ্যে হারিয়ে যাওয়ার জন্য সাজেক ভ্যালি সেরা।',
    highlights: ['মেঘের পাহাড়', 'কংলাক পাহাড়', 'জিপ রাইড'],
    type: 'Domestic'
  },
  {
    id: 'p3',
    title: 'সেন্ট মার্টিন নীল জলরাশি',
    location: 'সেন্ট মার্টিন, বাংলাদেশ',
    price: '৳৯,০০০',
    duration: '৩ দিন, ২ রাত',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBLurTY9MxCrnQT2GOREhkhoAupsB2AHgTKp5daAjBdqIfH9x88jxaOIa&s=10',
    description: 'প্রবাল দ্বীপ সেন্ট মার্টিনের স্বচ্ছ নীল জলরাশি উপভোগ করুন।',
    highlights: ['শিপ রাইড', 'ছেঁড়া দ্বীপ ভ্রমণ', 'সি-ফুড'],
    type: 'Domestic'
  }
];

export const INTERNATIONAL_PACKAGES: TourPackage[] = [
  {
    id: 'i1',
    title: 'থাইল্যান্ড লাক্সারি ট্যুর',
    location: 'ব্যাংকক ও পাতায়া',
    price: '$৪৫০',
    duration: '৫ দিন, ৪ রাত',
    image: 'https://images.unsplash.com/photo-1504214208698-ea1919a2435a?q=80&w=1000&auto=format&fit=crop',
    description: 'থাইল্যান্ডের আধুনিক জীবনযাত্রা উপভোগ করুন আমাদের স্পেশাল প্যাকেজে।',
    highlights: ['রিভার ক্রুজ', 'শপিং ম্যারাথন', 'প্রিমিয়াম হোটেল'],
    type: 'International'
  }
];

export const DESTINATIONS: Destination[] = [
  { id: 'd1', name: 'কক্সবাজার', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345053324.webp?k=dbe74b0f66f3da28af32685e74f5fc73727e41d5c990af392e6463bd3b31da5b&o=', packageCount: 12 },
  { id: 'd2', name: 'সাজেক', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelxK9IgvM87_8RPgI8KA7tj3nT04uJi7u8Sr2TrhfOw&s=10', packageCount: 8 },
  { id: 'd3', name: 'সিলেট', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0SL3wsg9i9mXZK36kkzeToqdz8uCPqlaHagEDW04bBgTaalsyULbQ7lE&s=10', packageCount: 15 },
  { id: 'd4', name: 'সেন্ট মার্টিন', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBLurTY9MxCrnQT2GOREhkhoAupsB2AHgTKp5daAjBdqIfH9x88jxaOIa&s=10', packageCount: 6 },
];
