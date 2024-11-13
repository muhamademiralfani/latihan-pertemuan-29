import React from "react";

const SectionTitle = ({ breadcrumb, sectionTitle }) => {
  return (
    <>
      <div className="flex flex-col justify-center min-h-32 pl-3 pr-10">
        <h1 className="text-accent text-xl py-1 text-left font-bold">
          \ {breadcrumb} \
        </h1>
        <p className="text-primary text-[2rem] py-1">{sectionTitle}</p>
      </div>
    </>
  );
};

export default SectionTitle;
