import React from "react";

export default function ContentContainer({ children }) {
  return (
    <div className="h-full w-full flex flex-col items-start justify-center mb-8">
      <div className="container mx-auto px-8 sm:px-16 md:px-24 lg:px-36 xl:px-48 text-[1.75em] md:text-[2.5em] text-left flex flex-col items-start">
        {children}
      </div>
    </div>
  );
}
