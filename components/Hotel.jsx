import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotel = () => {
  return (
    <div className="border-2 border-red-500 rounded-lg w-full h-72 mb-5 p-5 overflow-hidden ">
      <div className="flex ">
        <Image
          src={
            "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={200}
          height={200}
          alt="hotel"
          className="w-96 h-60 mr-3"
        />
        <div className="grid grid-rows-3 ">
        <Image
          src={
            "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={200}
          height={200}
          alt="hotel"
          className="w-20 h-12 "
        />
        <Image
          src={
            "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={200}
          height={200}
          alt="hotel"
          className="w-20 h-12 "
        />
        <Image
          src={
            "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={200}
          height={200}
          alt="hotel"
          className="w-20 h-12 "
        />
        <Image
          src={
            "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={200}
          height={200}
          alt="hotel"
          className="w-20 h-12 "
        />
        </div>
        <div className="ml-20 text-2xl line-clamp-1">
            <h2 className="font-bold text-xl ">Lorem ipsum dolor sit amet.</h2>
            <p className="text-justify my-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at nobis enim quod temporibus explicabo id voluptatem, itaque nam cupiditate.</p>
            <p className="text-xl my-10 ">
                <span className="font-bold ">Facilities:</span>
                <span>Free wifi, Pet care, Swimming pool , Beaches , Resort</span>
            </p>
            <div className="flex items-center">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg  "> ₹4500</button>
            <Link href={"/hotels/2"} className="text-xl font-bold text-red-600 ml-10">See Details ...</Link>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Hotel;
