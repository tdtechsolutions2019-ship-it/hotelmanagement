"use client";
import Button from '@/components/ui/button/Button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const AllocationPage = () => {
  // 1. Change state to an array to hold multiple selections
  const [selectedRooms, setSelectedRooms] = useState([]);

  const rooms = [
    { id: '101', type: 'Standard Room', floor: 'Floor 1', price: '₹2,499', status: 'Available' },
    { id: '105', type: 'Standard Room', floor: 'Floor 1', price: '₹2,499', status: 'Available' },
    { id: '201', type: 'Standard Room', floor: 'Floor 2', price: '₹2,499', status: 'Available' },
    { id: '207', type: 'Standard Room', floor: 'Floor 2', price: '₹2,799', status: 'Available' },
  ];
  const router = useRouter();

  // 2. Function to handle toggling a room selection
  const toggleRoomSelection = (roomId) => {
    setSelectedRooms((prevSelected) => {
      // If the room is already selected, remove it from the array
      if (prevSelected.includes(roomId)) {
        return prevSelected.filter((id) => id !== roomId);
      }
      // Otherwise, add it to the array
      else {
        return [...prevSelected, roomId];
      }
    });
  };

  return (
    <div className=" p-8 font-sans bg-white">
      {/* Top Banner */}
      <div className="bg-[#f0f5f9] text-[#31668f] px-4 py-3 text-sm mb-6 shadow-sm border border-[#e2e8f0]">
        Showing only <span className="font-bold">Standard grade</span> rooms available for Apr 12–14 · 2 nights
      </div>

      {/* Instruction Text */}
      <p className="text-[#31668f] text-sm mb-10">
        Select rooms to allocate to Anil Mehtas booking.
      </p>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-16">
        {rooms.map((room) => (
          <div 
            key={room.id} 
            className={`flex flex-col gap-1 p-3 rounded-md cursor-pointer transition-all border ${
              // 3. Check if the array includes this room's ID
              selectedRooms.includes(room.id) 
                ? 'border-[#31668f] bg-[#f8fafc] shadow-sm' 
                : 'border-transparent hover:border-gray-200'
            }`}
            onClick={() => toggleRoomSelection(room.id)}
          >
            <h3 className="text-[17px] font-medium text-gray-900">Room {room.id}</h3>
            <p className="text-[13px] text-gray-600">
              {room.type} · {room.floor}
            </p>
            <p className="text-sm text-[#31668f] font-medium mt-0.5">
              {room.price} <span className="font-normal">/ night</span>
            </p>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#e6f4ea] text-[#1e8e3e] w-fit mt-1">
              {room.status}
            </span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <Button 
        variant='primary' 
        onClick={() => {
          // Note: You may want to pass the selectedRooms array to your next page
          // e.g., router.push(`/confirmallocation?rooms=${selectedRooms.join(',')}`)
          router.push('/confirmallocation');
        }} 
        // 4. Disable the button if the array is empty
        disabled={selectedRooms.length === 0}
      >
        Confirm allocation {selectedRooms.length > 0 ? `(${selectedRooms.length})` : ''}
      </Button>
    </div>
  );
};

export default AllocationPage;