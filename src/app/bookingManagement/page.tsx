"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import PopUp from './popup'; 

const BookingManagement = () => {
  const daysInMonth = 30;
  const startDay = 3; // April 1, 2026 is a Wednesday
  const router = useRouter();

  // State to handle the selected day's data for the popup
  const [selectedDayData, setSelectedDayData] = useState(null);

  const bookings = [
    { id: 1, guest: 'Barack Obama', room: 'Suite 107', start: 18, end: 22, price: '₹6,800', baseColor: 'indigo' },
    { id: 2, guest: 'Kiara John', room: 'Deluxe 105', start: 19, end: 21, price: '₹3,200', baseColor: 'rose' },
    { id: 3, guest: 'Amit Singh', room: 'Standard 101', start: 20, end: 22, price: '₹2,499', baseColor: 'brand' },
    { id: 4, guest: 'Kina Tia', room: 'Standard 102', start: 20, end: 21, price: '₹2,499', baseColor: 'brand' },
    { id: 5, guest: 'Sumit Arora', room: 'Standard 103', start: 20, end: 23, price: '₹2,499', baseColor: 'brand' },
    { id: 6, guest: 'Priya Mehta', room: 'Standard 201', start: 20, end: 21, price: '₹2,499', baseColor: 'brand' },
    { id: 7, guest: 'Raj Sharma', room: 'Deluxe 203', start: 20, end: 22, price: '₹3,200', baseColor: 'brand' },
    { id: 8, guest: 'Nora Kapoor', room: 'Suite 205', start: 20, end: 21, price: '₹6,800', baseColor: 'indigo' },
  ];

  const getThemeClasses = (colorName) => {
    if (colorName === 'brand') {
      return {
        bg: 'bg-[#e6f0f9]',
        border: 'border-[#31668f]/30',
        text: 'text-[#31668f]',
      };
    }
    return {
      bg: `bg-${colorName}-50`,
      border: `border-${colorName}-200`,
      text: `text-${colorName}-700`,
    };
  };

  const renderCells = () => {
    const cells = [];
    
    // Previous month padding
    for (let i = 0; i < startDay; i++) {
      cells.push(
        <div key={`prev-${i}`} className="bg-slate-50/50 min-h-[100px] p-2 border-b border-r border-slate-200">
          <span className="text-slate-300 text-sm font-medium">{31 - startDay + i + 1}</span>
        </div>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayBookings = bookings.filter(b => day >= b.start && day <= b.end);

      cells.push(
        <div key={`day-${day}`} className="bg-white min-h-[100px] p-2 flex flex-col justify-between border-b border-r border-slate-200 hover:bg-slate-50 transition-colors">
          <div className="font-medium text-sm text-slate-700 flex justify-between items-center">
            <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${day >= 18 && day <= 23 ? 'bg-slate-100 text-slate-900' : ''}`}>
              {day}
            </span>
          </div>
          
          {/* Calendar Box displays ONLY the count badge now */}
          <div className="mt-auto pt-2">
            {dayBookings.length > 0 && (
              <button 
                onClick={() => setSelectedDayData({ day, bookings: dayBookings })}
                className="w-full text-left bg-slate-100 hover:bg-[#31668f]/10 text-slate-700 hover:text-[#31668f] text-xs font-semibold py-1.5 px-2 rounded-md transition-colors border border-slate-200/60 flex justify-between items-center"
              >
                <span>Bookings</span>
                <span className="bg-[#31668f] text-white px-1.5 py-0.5 rounded-full text-[10px]">
                  {dayBookings.length}
                </span>
              </button>
            )}
          </div>
        </div>
      );
    }

    // Next month padding
    const remainingCells = 35 - cells.length;
    for (let i = 1; i <= remainingCells; i++) {
      cells.push(
        <div key={`next-${i}`} className="bg-slate-50/50 min-h-[100px] p-2 border-b border-r border-slate-200">
           <span className="text-slate-300 text-sm font-medium">{i}</span>
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="p-8 bg-slate-100 font-sans text-slate-800 relative ">
      
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        {/* Header Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-normal text-slate-700 tracking-tight">April 2026</h1>
            
            <div className="flex bg-slate-100 rounded-md p-1 shadow-inner border border-slate-200/60">
              <button className="px-5 py-1.5 text-sm font-medium bg-[#31668f] text-white rounded shadow-sm">
                Month
              </button>
              <button className="px-5 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">
                Week
              </button>
            </div>
            
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-500 tracking-wider">
              <button className="hover:bg-slate-100 p-1.5 rounded-full transition-colors">&lt;</button>
              <span>APRIL</span>
              <button className="hover:bg-slate-100 p-1.5 rounded-full transition-colors">&gt;</button>
            </div>
          </div>
        </div>

        {/* Unified Calendar Grid */}
        <div className="rounded-xl overflow-hidden border-t border-l border-slate-200">
          {/* Day Headers */}
          <div className="grid grid-cols-7 bg-slate-50/80">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
              <div key={day} className="py-4 text-center text-[11px] font-bold text-slate-400 tracking-widest border-b border-r border-slate-200">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Body */}
          <div className="grid grid-cols-7">
            {renderCells()}
          </div>
        </div>
      </div>

      {/* Render PopUp if a day is clicked */}
      {selectedDayData && (
        <PopUp 
          data={selectedDayData} 
          onClose={() => setSelectedDayData(null)} 
          getThemeClasses={getThemeClasses}
          router={router}
        />
      )}
    </div>
  );
};

export default BookingManagement;