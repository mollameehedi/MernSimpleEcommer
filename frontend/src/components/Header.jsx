import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <header className='bg-black text-white font-poppins py-3'>
        <div className="container">
        <div className="flex justify-center relative">
         <p className='text-sm font-normal leading-5 font-openSans'><Marquee pauseOnHover={true}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link>ShopNow</Link></Marquee></p>

       
        <select className='text-white absolute right-0 bg-transparent '>
            <option value="">En</option>
            <option value="">Bn</option>
        </select>
        </div>
        </div>
    </header>
  )
}

export default Header