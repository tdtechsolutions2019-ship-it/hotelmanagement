"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button/Button"; // Adjust path if needed
import BookingDenyedPopup from "./popup"; // Import the popup component

const AcceptRequest = () => {
  const router = useRouter();
  
  // State to control popup visibility
  const [showDenyPopup, setShowDenyPopup] = useState(false);

  return (
    <div className="p-8 font-sans bg-white text-gray-900 relative">
      {/* User Header Profile */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center font-medium text-lg shrink-0">
          AM
        </div>
        <div>
          <h2 className="font-semibold text-base">Anil Mehta</h2>
          <p className="text-gray-600 text-sm mt-0.5">
            +91 98765 43210 · 2 Guests
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
        {/* Left Column: Request Details */}
        <div>
          <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-6">
            Request Details
          </h3>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Room grade</span>
              <span className="font-medium text-gray-900">Standard</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Guests</span>
              <span className="font-medium text-gray-900">2 Adults</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Check-in</span>
              <span className="font-medium text-gray-900">Apr 12, 10:00 AM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Check-out</span>
              <span className="font-medium text-gray-900">Apr 14, 11:00 AM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Nights</span>
              <span className="font-medium text-gray-900">2</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-gray-600">Total value</span>
              <span className="font-medium text-blue-600">₹6,798</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Airport shuttle</span>
              <span className="font-medium text-gray-900">Yes · ₹600</span>
            </div>
             <div className="flex justify-between items-center">
              <span className="text-gray-600">Request Time</span>
              <span className="font-medium text-gray-900">10:00 AM</span>
            </div>
          </div>
        </div>

        {/* Right Column: Standard Rooms */}
        <div>
          <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-6">
            Standard Rooms — Apr 12–14
          </h3>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-medium">Room 101</span>
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                Available
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-medium">Room 102</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                Occupied
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-medium">Room 105</span>
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                Available
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-medium">Room 201</span>
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                Available
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-medium">Room 204</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                Occupied
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Only Standard grade shown — matching request grade.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-12 pt-4">
        <Button
          variant="primary"
          onClick={() => {
            router.push("/allocation");
          }}
        >
          Accept request
        </Button>
        <Button
          variant="outline"
          onClick={() => setShowDenyPopup(true)} // Open the popup here
          className="ring-red-600 bg-red-400 text-red-600"
        >
          Deny request
        </Button>
      </div>

      {/* Render the Popup conditionally */}
      {showDenyPopup && (
        <BookingDenyedPopup onClose={() => setShowDenyPopup(false)} />
      )}
    </div>
  );
};

export default AcceptRequest;