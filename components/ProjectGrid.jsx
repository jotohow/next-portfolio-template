import React from "react";
import Link from "next/link";

// TODO: How do they create pages from the data in the other blog page?
export default function ProjectGrid({ data = [] }) {
  return (
    <div
      className={`
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
        w-full h-full gap-4
    `}
    >
      {data.map((project, index) => (
        <ProjectCard key={index} data={project} />
      ))}
    </div>
  );
}

// I want this to be passed a set of .md files and it should take the info from that...

function ProjectCard({ data }) {
  return (
    <Link href={`/projects/${data.slug}`} className="block flex justify-center">
      <div
        className="border-2 border-transparent h-[300px] w-full max-w-xs flex flex-col hover:border-white 
        focus:border-white w-full rounded p-4 my-4 flex flex-col transition-all justify-center items-center
        duration-300 ease-in-out shadow-2xl "
      >
        <img
          src={data.image || "/ldn.avif"}
          className="w-full h-[150px] border-4 border-white rounded"
          alt={data.title}
        />
        <div className="p-4 flex-1 flex flex-col justify-center">
          <h2 className="text-base md:text-base font-bold">{data.title}</h2>
          {data.subtitle && (
            <p className="text-sm text-gray-300 mt-2">{data.subtitle}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
