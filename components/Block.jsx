import Image from 'next/image'
import React from 'react'



const Block = ({title,para,img1}) => {
  return (
    <div className="w-60 h-full flex items-center px-3  border-r border-gray-300 ">
      <div className='overflow-hidden rounded-full w-10 h-10 mr-5'>
      <Image src={img1} alt='demo' width={200} height={200} className='rounded-full h-full w-full object-cover'/>
      </div>
        <div>
            <h3 className='font-bold'>{title}</h3>
            <p className="text-gray-400 text-xs line-clamp-1">{para}</p>
        </div>
    </div>
  )
}

export default Block