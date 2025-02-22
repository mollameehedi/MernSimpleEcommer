import React, { useState } from 'react'
import { FaAlignJustify } from "react-icons/fa";
import { Slider } from "@material-tailwind/react";


const ShopSidbar = () => {
 
  return (
    <div className='bg-white me-3 p-5 rounded-md'>
  <h3 className='text-xl font-bold text-primary font-roboto flex justify-between' ><span className=' text-center flex items-center'><FaAlignJustify className='text-lg me-3'/>Categories</span>  </h3> 
  <div className="mt-4">
        <ul className="mt-2">
          <li>
            <a href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Audience
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Posts
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Schedules
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Promote
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="w-full my-2">
        <h4>Price Filter</h4>
      <Slider defaultValue={50} />
    </div>
    </div>
  )
}

export default ShopSidbar