"use client"
import Image from 'next/image'
import React from 'react'

const Header4 = () => {
  return (
    <div className="flex my-14 border-2 rounded-lg  border-gray-300 px-5 items-center justify-between">
        <div className="flex items-center">
            <Image src={'/fire.jpg'} alt='fire' width={200} height={200} className="w-32 h-32 rounded-full mr-5"  />
            <div className="text-xl">
                <p className="font-bold">Get access to exclusive deals </p>
                <p>Only the best deals reach your inbox </p>
            </div>
        </div>
        <div className="flex ">
                <input type="email" className="px-6 py-3 outline-none border w-80 h-14 border-gray-300 rounded-lg mr-5 " placeholder='e.g. john@gmail.com'/>
                <button type='submit' className="w-48 h-14 bg-red-500 text-xl text-white cursor-pointer rounded-lg">Notify</button>
        </div>
    </div>
  )
}

export default Header4