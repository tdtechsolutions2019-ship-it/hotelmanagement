import React from 'react';

const PopUp = ({ data, onClose, getThemeClasses, router }) => {
  const { day, bookings } = data;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Modal Container - Increased max-w to 6xl to accommodate 4 columns side-by-side */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-6xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Bookings for April {day}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{bookings.length} reservations found</p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 p-1.5 rounded-lg transition-colors text-xl font-medium"
          >
            &times;
          </button>
        </div>

        {/* Modal Body Container - Changed from flex-col to a 4-column responsive grid */}
        <div className="p-5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[60vh] scrollbar-thin">
          {bookings.map((booking) => {
            const theme = getThemeClasses(booking.baseColor);
            
            // Dynamic check-in/checkout status relative to the clicked day
            let currentStatus = 'Staying';
            let statusClasses = 'bg-blue-100 text-blue-700';

            if (day === booking.start) {
              currentStatus = 'Check-in';
              statusClasses = 'bg-green-100 text-green-700';
            } else if (day === booking.end) {
              currentStatus = 'Checkout';
              statusClasses = 'bg-red-100 text-red-700';
            }

            return (
              <div 
                key={`${booking.id}-${day}`} 
                onClick={() => {
                  onClose(); // Clean up overlay
                  router.push("/bookingDetails");
                }}
                className={`p-3.5 cursor-pointer rounded-xl border flex flex-col justify-between gap-3 shadow-sm transition-transform duration-300 hover:scale-[1.02] ${theme.bg} ${theme.border}`}
              >
                <div className="flex justify-between items-start gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border truncate ${theme.bg} ${theme.text} ${theme.border}`}>
                    {booking.room}
                  </span>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-semibold tracking-wide uppercase whitespace-nowrap ${statusClasses}`}>
                    {currentStatus}
                  </span>
                </div>
                
                <div className="mt-0.5">
                  <div className="font-semibold text-base text-slate-800 leading-tight truncate">
                    {booking.guest}
                  </div>
                  <div className="text-xs font-medium text-slate-500 mt-2 flex justify-between items-center gap-1">
                    <span className="whitespace-nowrap">{booking.price}/night</span>
                    {currentStatus !== 'Check-in' && currentStatus !== 'Checkout' && (
                      <span className="text-[10px] text-slate-400 font-normal whitespace-nowrap">{booking.start} - {booking.end} Apr</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 flex justify-end bg-slate-50">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200/50 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;