"use client";
import Button from '@/components/ui/button/Button';
import { useRouter } from 'next/navigation';
import React from 'react';

const ConfirmAllocation = () => {
    const router = useRouter();
  return (
    <div className=" p-8 font-sans bg-white text-gray-900">
      
      {/* Success Banner */}
      <div className="bg-[#f0f8f1] border border-[#dcf0d9] p-4 mb-10 flex gap-3 shadow-sm">
        {/* Success Check Icon */}
        <div className="text-[#2e7d32] mt-0.5 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 11.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <h3 className="text-[#2e7d32] font-medium text-sm">Booking accepted successfully</h3>
          <p className="text-[#4caf50] text-xs mt-0.5">Anil Mehta has been notified. Room allocated and confirmed.</p>
        </div>
      </div>

      {/* User Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 rounded-full bg-[#f0f5f9] text-[#31668f] flex items-center justify-center font-medium text-lg shrink-0">
          AM
        </div>
        <div>
          <h2 className="font-semibold text-base">Anil Mehta</h2>
          <p className="text-gray-600 text-sm mt-0.5">Booking confirmed</p>
        </div>
      </div>

      {/* Booking Details List */}
      <div className="flex flex-col gap-6 text-sm mb-16 px-1">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Room</span>
          <span className="font-medium text-gray-900">Room 101 — Standard Room</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Check-in</span>
          <span className="font-medium text-gray-900">Apr 12, 10:00 AM</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Check-out</span>
          <span className="font-medium text-gray-900">Apr 14, 11:00 AM</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Guests</span>
          <span className="font-medium text-gray-900">2 Adults</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Room charge</span>
          <span className="font-medium text-gray-900">₹6,198</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Airport shuttle</span>
          <span className="font-medium text-gray-900">₹600</span>
        </div>
        <div className="flex justify-between items-center mt-2 pt-2">
          <span className="text-gray-900 font-medium">Total earning</span>
          <span className="font-semibold text-[#31668f]">₹6,798</span>
        </div>
      </div>

      {/* Action Footer */}
      
        <Button
          variant='primary'
                  onClick={() => {
                      router.push("/dashboard");
        }}        >
          Back to dashboard
        </Button>
   
   
      
    </div>
  );
};

export default ConfirmAllocation;