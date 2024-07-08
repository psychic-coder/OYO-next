"use client"
import Image from "next/image";
import Block from "./Block";

const Header1 = () => {
  return (
    <div className="flex items-center justify-between h-24 px-10 border-b-2 border-gray-200 overflow-hidden">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className="w-30 h-30 px-5 object-contain"
      />
      <div className="h-full flex ">
        <Block
          img1={"/members.jpg"}
          title={"Become a member"}
          para={"Additional 10% off on stays. "}
        />
        <Block
          img1={"/business.png"}
          title={"OYO for business"}
          para={"Trusted by 5000 corporates. "}
        />
        <Block
          img1={"/buildings.jpg"}
          title={"List your property"}
          para={"Start earning in 30 mins. "}
        />
        <Block
          img1={"/call.png"}
          title={"6261968762"}
          para={"Call us to book now ."}
        />
        <div className="flex items-center px-3 ">
          <Image
            src={"/profile.webp"}
            alt="demo"
            width={200}
            height={200}
            className="w-10 h-10 rounded-full mr-5 "
          />
          <h3 className="font-bold">Login / SignUp</h3>
        </div>
      </div>
    </div>
  );
};

export default Header1;
