import Image from 'next/image'
import React from 'react'

const SingleHotel = () => {
  return (
    <div className='w-7/12 mx-auto my-10' >
        <Image
        
        src={"https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        width={200} height={200} className='w-full h-largeBox my-5 '
        />
        <div className=''>
            <h3 className='text-3xl font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, magni!</h3>
            <p className='text-xl my-5 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid temporibus amet fugit voluptate natus corrupti quasi delectus distinctio assumenda ipsum esse, unde reiciendis rerum corporis soluta! Vero excepturi, nisi nostrum perspiciatis autem ullam unde iusto, ipsa rerum ab distinctio provident eligendi, quasi soluta dolorum quo earum dolor harum dicta ut!</p>
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg  "> ₹4500</button>
            <p className='text-2xl font-bold my-5'>Facilities:</p>
            <ul className='flex text-xl justify-between'>
              <li>Swimming pool</li>
              <li>Dogs</li>
              <li>Laundry</li>
              <li>Garden</li>
              <li>Cricket</li>
            </ul>
            <button className="w-60 h-14 rounded-lg bg-red-400 text-lg  my-5">Book Now</button>
        </div>
    </div>
  )
}

export default SingleHotel