"use client";

import React, { useState } from "react";
import { AlertTriangle, ChevronDown, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button/Button";
import Label from "@/components/form/Label";

const DenyRequestPage = () => {
  const [reason, setReason] = useState(
    "rooms_not_available"
  );    

  const reasons = [
    {
      value: "rooms_not_available",
      label: "Rooms not available for selected dates"
    },
    {
      value: "maintenance",
      label: "Hotel under maintenance"
    },
    {
      value: "capacity_exceeded",
      label: "Guest capacity exceeded"
    },
    {
      value: "payment_issue",
      label: "Payment verification issue"
    },
    {
      value: "other",
      label: "Other"
    }
  ];
 const routre=useRouter()
  return (
    <div className=" bg-gradient-to-br from-red-50 via-white to-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-red-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        
        {/* Top Accent */}
        <div className="h-2 w-full bg-gradient-to-r from-red-500 via-red-400 to-red-600" />

        {/* Close Button */}
              <button
              onClick={() => {
                              routre.push("/acceptRequest")
                          }}          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-gray-700">
          <X size={18} />
        </button>

        <div className="p-7 sm:p-9">

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 ring-8 ring-red-50/50">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle
                size={30}
                className="text-red-600"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Deny Booking Request
            </h1>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              You are about to deny the availability
              request submitted by{" "}
              <span className="font-semibold text-gray-800">
                Anil Mehta
              </span>{" "}
              for a{" "}
              <span className="font-semibold text-gray-800">
                Standard Room
              </span>{" "}
              between{" "}
              <span className="font-semibold text-gray-800">
                Apr 12 – Apr 14
              </span>.
            </p>
          </div>

          {/* Alert Box */}
          <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-4">
            <div className="flex gap-3">
              <AlertTriangle
                size={18}
                className="mt-0.5 text-red-500"
              />

              <div>
                <h3 className="text-sm font-semibold text-red-700">
                  This action cannot be undone
                </h3>

                <p className="mt-1 text-sm leading-6 text-red-600">
                  The guest will immediately receive a
                  notification that their request has
                  been denied.
                </p>
              </div>
            </div>
          </div>

          {/* Reason */}
          <div className="mt-7">
            <Label className="mb-2 block text-sm font-semibold text-gray-700">
              Select Reason
            </Label>

            <div className="relative">
              <select
                value={reason}
                onChange={(e) =>
                  setReason(e.target.value)
                }
                className="h-14 w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50 px-4 pr-12 text-sm font-medium text-gray-800 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
              >
                {reasons.map((item) => (
                  <option
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

          {/* Additional Note */}
          <div className="mt-5">
            <Label className="mb-2 block text-sm font-semibold text-gray-700">
              Comments
              <span className="ml-1 font-normal text-gray-400">
                (optional)
              </span>
            </Label>

            <textarea
              rows={4}
              placeholder="Add extra details for the guest..."
              className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
            />
          </div>

          {/* Footer Buttons */}
          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                      <Button
                                onClick={() => {
                              routre.push("/acceptRequest")
                          }}
              type="button"
              variant="outline"
              
            >
              Cancel
            </Button>

            <Button
              variant="outline"
                          onClick={() => {
                              routre.push("/confirmdeny")
                          }}
              type="button"
              className="ring-red-600 bg-red-400 text-red-600"
             
            >
              Deny Request
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DenyRequestPage;