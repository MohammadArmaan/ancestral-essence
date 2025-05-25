"use client";
import React from "react";

export default function ScrollingRibbon() {
  return (
    <div className="relative overflow-hidden bg-primary text-white text-sm font-semibold py-2">
      <div className="animate-marquee whitespace-nowrap flex gap-8">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>
            100% Original Products &nbsp;|&nbsp; Cash on Delivery Available &nbsp;|&nbsp; Secure Payments
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

