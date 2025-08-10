import React from "react";

export default function Timeline({ data }) {
  return (
    <div className="max-w-[90%] mx-auto">
      {data.map((d, index) => (
        <TimelineCard key={index} data={d} />
      ))}
    </div>
  );
}

function TimelineCard({ data }) {
  return (
    <div
      className={`
        cursor-pointer group border-2 border-transparent hover:border-white 
        focus:border-white w-full rounded p-4 my-4 flex flex-col transition-all justify-center items-center
        duration-300 ease-in-out shadow-2xl 
    `}
      tabIndex={0}
    >
      <div
        className={`
            h-full flex flex-row justify-between items-stretch self-stretch
        `}
      >
        <div className="self-stretch flex flex-col justify-between">
          <div>
            <h2 className="text-base md:text-xl font-bold">
              {data.cardSubtitle}
            </h2>
          </div>
          <div>
            <h3 className="text-xs md:text-base font-bold">{data.cardTitle}</h3>
            <h3 className="text-xs md:text-base">{data.date_show}</h3>
          </div>
        </div>
        <img
          src={data.image}
          className="h-20 w-20 md:h-32 md:w-32 object-cover rounded"
          alt={data.cardTitle}
        />
      </div>

      <div className="group-focus:mt-5 group-hover:mt-5 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr] transition-all duration-500 ease-in-out">
        <div className="overflow-hidden">
          <div>
            <p className="text-xs md:text-base text-white text-justify">
              {data.cardDetailedText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
