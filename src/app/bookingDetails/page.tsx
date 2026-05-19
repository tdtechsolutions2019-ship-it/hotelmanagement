"use client";
import Button from '@/components/ui/button/Button';
import { useRouter } from 'next/navigation';

import React from 'react';
                     
const BookingDetails = () => {
    const router=useRouter();
  return (
    <div className=" bg-white min-h-screen font-sans border border-gray-200 shadow-sm rounded-lg overflow-hidden">
             
      {/* Top Dark Header */}
      <div className="bg-[#0a1628] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 className="text-lg font-medium tracking-wide">Booking details — Amit Singh</h1>
        </div>
        <span className="bg-white text-[#31668f] text-sm font-semibold px-4 py-1.5 rounded-full">
          Currently staying
        </span>
      </div>

      <div className="p-6 flex flex-col gap-6">
        
        {/* Room Info Banner */}
        <div className="bg-[#e6f0f9] rounded-xl p-4 flex items-center justify-between border border-[#31668f]/10">
          <div className="flex items-center gap-4">
            <div className="bg-[#31668f] text-white p-3 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-[#31668f] font-semibold text-lg">Standard Room 101</h2>
              <p className="text-[#31668f]/80 text-sm">Floor 1 • ₹2,499 / night</p>
            </div>
          </div>
          <span className="text-[#31668f] text-sm font-medium mr-2">Standard</span>
        </div>

        {/* Info Grid (Guest & Stay Details) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Guest Information Card */}
          <div className="bg-[#f6f5f2] rounded-xl p-6 border border-gray-100/50">
            <h3 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-5">Guest Information</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#e6f0f9] text-[#31668f] flex items-center justify-center text-xl font-medium">
                AS
              </div>
              <div>
                <h4 className="text-gray-900 font-medium text-lg">Amit Singh</h4>
                <p className="text-gray-500 text-sm">2 guests</p>
              </div>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <span className="text-gray-500">Phone</span>
                <span className="font-medium text-gray-800">+91 98765 00101</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <span className="text-gray-500">Email</span>
                <a href="mailto:amit.singh@email.com" className="font-medium text-[#31668f] hover:underline">amit.singh@email.com</a>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <span className="text-gray-500">Booking ID</span>
                <span className="font-mono font-semibold text-gray-800">BK-20240101</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-gray-500">Payment</span>
                <span className="font-medium text-gray-800">Online • Paid</span>
              </div>
            </div>
          </div>

          {/* Stay Details Card */}
          <div className="bg-[#f6f5f2] rounded-xl p-6 border border-gray-100/50">
            <h3 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-5">Stay Details</h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <span className="text-gray-500">Check-in</span>
                <span className="font-medium text-gray-800">Apr 20 • 10:00 AM</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <span className="text-gray-500">Check-out</span>
                <span className="font-medium text-gray-800">Apr 22 • 11:00 AM</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <span className="text-gray-500">Nights</span>
                <span className="font-medium text-gray-800">2</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <span className="text-gray-500">Guests</span>
                <span className="font-medium text-gray-800">2 adults</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <span className="text-gray-500">Room rate</span>
                <span className="font-medium text-gray-800">₹2,499 / night</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-gray-500">Room charges</span>
                <span className="font-semibold text-gray-900">₹4,998</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#f6f5f2] p-5 rounded-xl flex flex-col justify-center">
            <span className="text-2xl font-semibold text-gray-800">2</span>
            <span className="text-gray-500 text-sm">Nights booked</span>
          </div>
          <div className="bg-[#f6f5f2] p-5 rounded-xl flex flex-col justify-center">
            <span className="text-2xl font-semibold text-gray-800">2</span>
            <span className="text-gray-500 text-sm">Guests</span>
          </div>
          <div className="bg-[#f6f5f2] p-5 rounded-xl flex flex-col justify-center">
            <span className="text-2xl font-semibold text-[#31668f]">₹4,998</span>
            <span className="text-gray-500 text-sm">Total earning</span>
          </div>
        </div>

        {/* Stay Timeline */}
        <div className="mt-4">
          <h3 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-6">Stay Timeline</h3>
          
          <div className="relative border-l-[3px] border-gray-200 ml-3 space-y-8 pb-4">
            
            {/* Check-in Dot */}
            <div className="relative">
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
              <div className="pl-8">
                <p className="text-xs text-gray-500 font-medium">Apr 20 • 10:00 AM</p>
                <h4 className="text-gray-900 font-medium text-[15px]">Check-in</h4>
                <p className="text-gray-500 text-sm mt-0.5">Guest arrived, room keys issued</p>
              </div>
            </div>

            {/* Staying Dot */}
            <div className="relative">
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#31668f] border-4 border-white shadow-sm"></div>
              <div className="pl-8">
                <p className="text-xs text-[#31668f] font-medium">During stay</p>
                <h4 className="text-gray-900 font-medium text-[15px]">Staying • Room 101</h4>
                <p className="text-gray-500 text-sm mt-0.5">2 nights • 2 guests</p>
              </div>
            </div>

            {/* Check-out Dot */}
            <div className="relative">
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-gray-400 border-4 border-white shadow-sm"></div>
              <div className="pl-8">
                <p className="text-xs text-gray-500 font-medium">Apr 22 • 11:00 AM</p>
                <h4 className="text-gray-900 font-medium text-[15px]">Check-out</h4>
                <p className="text-gray-500 text-sm mt-0.5">Scheduled</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="border-t border-gray-200 pt-6 mt-2 flex flex-wrap gap-4">
        
                  <Button onClick={() => {
                      router.push("/bookingManagement");
          }} variant='primary'>
            Cancel
          </Button>
        </div>

      </div>
    </div>
  );
};

export default BookingDetails;