import React from "react";

const MainCard = ({ icon, title, descripttion, number}) => {
  return (
    <div className="bg-secondary rounded-xl p-4 relative">
			<p className="float-end mr-5 text-5xl text-[#0E1F51]/30 font-bold">{number}</p>
			<div className="bg-white inline p-1 rounded-xl">
				<i className={`bx ${icon} text-accent text-5xl`}></i>
			</div>
      <p className="text-lg font-extrabold text-primary my-4">{title}</p>
      <div className="flex gap-1 mb-4"><div className="bg-accent h-1 w-14 rounded-lg"></div><div className="bg-accent h-1 w-4 rounded-lg"></div></div>
      <p className="">{descripttion}</p>
    </div>
  );
};

export default MainCard;
