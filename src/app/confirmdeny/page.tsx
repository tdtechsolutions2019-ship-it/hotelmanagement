"use client";
import Button from '@/components/ui/button/Button';
import { useRouter } from 'next/navigation';
import React from 'react';


const ConfirmDeny = () => {
    const router = useRouter();
  return (
    <div className=" bg-white font-sans">
      {/* Top Header */}
      <div className="bg-[#0f172a] text-white px-6 py-4 shadow-sm">
        <h1 className="font-medium text-base">Request denied</h1>
      </div>

      {/* Main Content Area */}
      <div className="p-4 md:p-6 w-full mx-auto">
        
        {/* Error/Denial Banner */}
        <div className="bg-[#fcf3f3] border border-[#f3cdd0] p-4 flex gap-3 w-full">
          {/* X Circle Icon */}
          <div className="text-[#ba4549] mt-0.5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <div>
            <h3 className="text-[#ba4549] font-medium text-sm">Request denied</h3>
            <p className="text-[#c66568] text-sm mt-0.5">
              Anil Mehta has been notified. No room has been allocated.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-12 flex justify-center">
          <Button
            variant='primary'
                      onClick={() => {
                          router.push("/dashboard")
          }}            >
            Back to dashboard
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default ConfirmDeny;