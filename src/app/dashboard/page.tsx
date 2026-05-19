"use client";
import type { Metadata } from "next";
import Notification from "./notification";
import { useDispatch, useSelector } from "react-redux";
import Notificatiom from "./notification";

export default function Ecommerce() {
   const dispatch = useDispatch();

  const showCard = useSelector(
    (state: any) => state.notification.showCard
  );
  return (
    <>
      
    <div className="p-4 md:p-8 font-sans bg-slate-50 ">
      <div className="max-w-7xl mx-auto space-y-8">
              {showCard && (
        <div className="">
        <Notificatiom />

        
        </div>
      )}
        {/* --- Top Section: Dashboard Overview --- */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Dashboard </h1>
          
          </div>

          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1: Available */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col justify-between h-28 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl text-emerald-500 tracking-tight font-bold">18</span>
              <div className="flex items-center text-sm font-medium text-gray-600 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2.5"></span>
                Available
              </div>
            </div>

            {/* Card 2: Occupied */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col justify-between h-28 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl text-blue-500 tracking-tight font-bold">14</span>
              <div className="flex items-center text-sm font-medium text-gray-600 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2.5"></span>
                Occupied
              </div>
            </div>

            {/* Card 3: Maintenance */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col justify-between h-28 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl text-amber-500 tracking-tight font-bold">3</span>
              <div className="flex items-center text-sm font-medium text-gray-600 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mr-2.5"></span>
                Maintenance
              </div>
            </div>

            {/* Card 4: Offline / Blocked */}
           
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-12 gap-6">
            {/* Doughnut Chart: Room Status */}
            <div className="col-span-12 lg:col-span-6 bg-white rounded-xl border border-gray-100 p-6 flex flex-col shadow-sm">
  <div className="flex items-center mb-10">
    <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center mr-3 text-white">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    </div>
    <div>
      <h2 className="text-base font-bold text-slate-800">Room Status Overview</h2>
      <p className="text-xs text-gray-400 mt-0.5">Current distribution of all rooms</p>
    </div>
  </div>

  <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-4 xl:gap-8">
    {/* SVG Doughnut Chart */}
    <div className="relative w-48 h-48 flex-shrink-0">
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-3xl font-bold text-slate-800">35</span>
        <span className="text-xs font-medium text-gray-400">Total</span>
      </div>
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 rounded-full drop-shadow-sm">
        {/* Available Segment (18/35 = ~51.4%) */}
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="16" strokeDasharray="129.2 251.3" strokeDashoffset="0"></circle>
        
        {/* Occupied Segment (14/35 = 40.0%) */}
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="16" strokeDasharray="100.5 251.3" strokeDashoffset="-129.2"></circle>
        
        {/* Maintenance Segment (3/35 = ~8.6%) */}
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="16" strokeDasharray="21.6 251.3" strokeDashoffset="-229.7"></circle>
      </svg>
    </div>

    {/* Legend */}
    <div className="flex flex-col gap-4">
      <div className="flex items-center text-sm font-semibold text-slate-700">
        <span className="w-3 h-3 rounded-full bg-emerald-500 mr-3"></span>
        Available (18)
      </div>
      <div className="flex items-center text-sm font-semibold text-slate-700">
        <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#31668f' }}></span>
        Occupied (14)
      </div>
      <div className="flex items-center text-sm font-semibold text-slate-700">
        <span className="w-3 h-3 rounded-full bg-amber-500 mr-3"></span>
        Maintenance (3)
      </div>
    </div>
  </div>
</div>

            {/* Recent Bookings List */}
            <div className="col-span-12 lg:col-span-6 bg-white rounded-xl border border-gray-100 p-6 flex flex-col shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mr-3 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-800">Recent Bookings</h2>
                    <p className="text-xs text-gray-400 mt-0.5">Latest reservations</p>
                  </div>
                </div>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">View All</button>
              </div>

              <div className="flex-1 overflow-auto">
                <div className="space-y-4">
                  {/* Booking Item 1 */}
                  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">JD</div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">John Doe</p>
                        <p className="text-xs text-gray-500">Deluxe King • Room 402</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-emerald-100 text-emerald-700 mb-1">Confirmed</span>
                      <p className="text-sm font-bold text-slate-800">₹8,500</p>
                    </div>
                  </div>

                  {/* Booking Item 2 */}
                  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm">AS</div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">Alice Smith</p>
                        <p className="text-xs text-gray-500">Standard Twin • Room 105</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-amber-100 text-amber-700 mb-1">Pending</span>
                      <p className="text-sm font-bold text-slate-800">₹4,200</p>
                    </div>
                  </div>

                  {/* Booking Item 3 */}
                  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-sm">MR</div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">Michael Ross</p>
                        <p className="text-xs text-gray-500">Executive Suite • Room 501</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-emerald-100 text-emerald-700 mb-1">Confirmed</span>
                      <p className="text-sm font-bold text-slate-800">₹14,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Detailed Room Status (Dark Mode Panel) --- */}
        {/* <div className="bg-gray-700 rounded-3xl p-6 md:p-8 shadow-xl mt-8">
          
        
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">Room Management</h2>
              <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase mt-1">Live Status Grid</p>
            </div>
            <div className="w-full md:w-96">
              <input 
                type="text" 
                placeholder="Search room or guest..." 
                className="w-full px-5 py-3.5 rounded-xl bg-neutral-700 text-white placeholder-neutral-400 text-sm shadow-inner border border-neutral-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none" 
              />
            </div>
          </div>

      
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500 flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-lg duration-200">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">Room 301</h3>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Available</span>
              </div>
              <p className="text-sm text-gray-500 mb-4 font-medium">Ocean View Suite</p>
              
              <div className="text-sm text-gray-700 mb-6 flex-grow bg-slate-50 rounded-lg p-3">
                <p className="flex justify-between">
                  <span className="text-gray-500">Floor:</span> 
                  <span className="font-semibold">3</span>
                </p>
                <p className="flex justify-between mt-1">
                  <span className="text-gray-500">Rate:</span> 
                  <span className="font-semibold">₹18,500/night</span>
                </p>
              </div>
              
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">Approve</button>
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">DisApprove</button>
              </div>
            </div>

     
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500 flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-lg duration-200">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">Room 302</h3>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Occupied</span>
              </div>
              <p className="text-sm text-gray-500 mb-4 font-medium">Premium Double Room</p>
              
              <div className="text-sm text-gray-700 mb-6 flex-grow bg-slate-50 rounded-lg p-3">
                <p className="flex justify-between">
                  <span className="text-gray-500">Guest:</span> 
                  <span className="font-semibold truncate ml-2">Sarah Jenkins</span>
                </p>
                <p className="flex justify-between mt-1">
                  <span className="text-gray-500">Checkout:</span> 
                  <span className="font-semibold">Oct 28, 11 AM</span>
                </p>
              </div>
              
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">View Booking</button>
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">DisApprove</button>
              </div>
            </div>


            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-400 flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-lg duration-200">    
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">Room 303</h3>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">Maintenance</span>
              </div>
              <p className="text-sm text-gray-500 mb-4 font-medium">Standard Queen</p>
              
              <div className="text-sm text-gray-700 mb-6 flex-grow bg-slate-50 rounded-lg p-3">
                <p className="flex justify-between">
                  <span className="text-gray-500">Issue:</span> 
                  <span className="font-semibold text-right">Plumbing repair</span>
                </p>
                <p className="flex justify-between mt-1">
                  <span className="text-gray-500">ETA:</span> 
                  <span className="font-semibold">Oct 26, 4 PM</span>
                </p>
              </div>
              
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">Mark Redy</button>
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">Edit</button>
              </div>
            </div>

       
            <div className="bg-neutral-200 rounded-xl p-6 shadow-inner border-l-4 border-neutral-400 flex flex-col h-full opacity-90">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-neutral-800">Room 401</h3>
                <span className="bg-neutral-300 text-neutral-700 text-xs font-bold px-3 py-1 rounded-full">Offline</span>
              </div>
              <p className="text-sm text-neutral-600 mb-4 font-medium">Penthouse Suite</p>
              
              <div className="text-sm text-neutral-700 mb-6 flex-grow bg-neutral-300/50 rounded-lg p-3">
                <p className="flex justify-between">
                  <span className="text-neutral-500">Status:</span> 
                  <span className="font-semibold text-right">Blocked by Mgmt</span>
                </p>
                <p className="flex justify-between mt-1">
                  <span className="text-neutral-500">Reason:</span> 
                  <span className="font-semibold">Deep cleaning</span>
                </p>
              </div>
              
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 bg-neutral-100 border border-neutral-300 text-neutral-700 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-50 transition-colors shadow-sm">Approve</button>
                <button className="flex-1 bg-neutral-100 border border-neutral-300 text-neutral-700 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-50 transition-colors shadow-sm">Edit</button>
              </div>
            </div>

          </div>
        </div> */}

      </div>
    </div>
    </>
  );
}          
