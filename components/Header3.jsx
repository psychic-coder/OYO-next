"use client";

import Link from "next/link";

const Header3 = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
      <div className=" p-5">
        <h2 className="text-4xl font-bold text-white text-center">
          Over 174,000+ hotels and homes across 35+ countries
        </h2>
        <div className="grid grid-cols-5 my-5 mx-20">
          <input
            type="text"
            placeholder="Search..."
            className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2"
          />
          <input
            type="text"
            placeholder="Search..."
            className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <input
            type="text"
            placeholder="Search..."
            className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />

          <button
            type="submit"
            className="h-16 px-3 py-2 col-span-1 bg-green-500 text-white hover:cursor-pointer hover:bg-green-600 text-xl"
          >
            <Link href={"/hotels?city=Mumbai"}>Search</Link>
          </button>
        </div>
        <div className="flex mx-20 my-5 font-bold">
          <button
            type="submit"
            className="h-16 px-3 py-2 text-white hover:cursor-pointer text-md mr-5"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className="h-16 px-3 py-2 text-white border-2 border-white hover:cursor-pointer text-md mr-5 hover:bg-slate-900 hover:text-slate-100 rounded-xl"
          >
            Homestay in India Hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
