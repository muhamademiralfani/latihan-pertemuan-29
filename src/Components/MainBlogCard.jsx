import React from "react";

const MainBlogCard = () => {
  return (
    <div className={`flex flex-col bg-white border shadow-sm rounded-xl p-6`}>
      <img
        className="w-full h-auto rounded-xl"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
        alt="Card Image"
      />
      <div className="pt-4 md:pt-5">
        <h3 className="text-sm font-bold text-gray-800">Card title</h3>
        <p className="mt-1 text-accent text-xl font-bold">
          Some quick example text
        </p>
        <div className="flex flex-row justify-between">
          <div className="pt-4 md:ty-5 flex flex-row justify-between items-center gap-5">
            <img
              className="w-20 h-20 rounded-full"
              src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
              alt="Card Image"
            />
            <p className=" text-base text-primary font-bold">Jeff</p>
          </div>
          <div className="pt-4 md:pt-5 text-end">
            <p className="mt-5 text-sm text-gray-500">2 Min Read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogCard;
