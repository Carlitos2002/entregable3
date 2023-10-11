import React from "react";
import ResidentCard from "./ResidentCard";

const ResidentList = ({ residents }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-6 max-w-[1000px] mx-auto py-10">
      {residents.map((resident) => (
        <ResidentCard key={resident} residentEndpoint={resident} />
      ))}
    </section>
  );
};

export default ResidentList;
