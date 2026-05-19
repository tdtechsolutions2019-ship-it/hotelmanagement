"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import {useTranslations} from "next-intl";
import Button from '@/components/ui/button/Button';


const Availability = () => {
  const router = useRouter();
  const t = useTranslations();
  return (
    <div className=" p-6 font-sans">
      {/* Alert Section */}
     

      {/* Pending Requests Section */}
      <div>
        <h3 className="text-gray-800 font-medium text-sm mb-6">Other pending requests</h3>

        <div className="flex flex-col gap-6">
          {/* Request Item 1 */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-900 text-sm font-medium">Nora Kapoor</p>
              <p className="text-gray-600 text-xs mt-1">Double Deluxe · Apr 12–13</p>
            </div>
            <span className="bg-[#fbf0e1] text-[#866642] text-xs px-3 py-1.5 rounded-md font-medium">
              Pending
            </span>
          </div>

          {/* Request Item 2 */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-900 text-sm font-medium">Raj Sharma</p>
              <p className="text-gray-600 text-xs mt-1">Standard Room · Apr 15–16</p>
            </div>
            <span className="bg-[#fbf0e1] text-[#866642] text-xs px-3 py-1.5 rounded-md font-medium">
              Pending
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Availability