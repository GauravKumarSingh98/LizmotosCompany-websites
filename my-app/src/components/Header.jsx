import { Link } from 'react-router-dom';
import React from 'react'
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineCloseCircle} from "react-icons/ai";


export default function Header() {
    const [toggle, setToggle] = useState(false);
  return (
    <div className='bg-[#00e4b1] p-4'>
      <div className='max-w-[1240px] py-[10px] items-center flex justify-between border-black mx-auto'>
        <div className='text-3xl font-bold'>
          Lizmotors
        </div>
        {
          toggle ?
          <AiOutlineCloseCircle onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
          :
          <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
        }
        
        <ul className='hidden md:flex text-black text-l gap-20 '>
        <li className='hover:bg-white cursor-pointer p-[8px] rounded'><Link to='/home'>Home</Link></li>
          <li className='hover:bg-white cursor-pointer p-[8px] rounded'><Link to='/research'>Market Research</Link></li>
          <li className='hover:bg-white cursor-pointer p-[8px] rounded'><Link to='/planning'>Planning</Link></li>
          <li className='hover:bg-white cursor-pointer p-[8px] rounded'><Link to='/design'>Design</Link></li>
          <li className='hover:bg-white cursor-pointer p-[8px] rounded'><Link to='/manufacturing'>Manufacturing</Link></li>
          <li className='hover:bg-white cursor-pointer p-[8px] rounded'><Link to='/sales'>Sales</Link></li>
        </ul>
        {/* For responsive */}
        <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[88px] ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
        <li className='hover:bg-violet-600 cursor-pointer p-[8px] rounded'><Link to='/home'>Home</Link></li>
          <li className='py-5 hover:bg-violet-600 cursor-pointer p-[8px] rounded'><Link to='/research'>Market Research</Link></li>
          <li className='py-5 hover:bg-violet-600 cursor-pointer p-[8px] rounded'><Link to='/planning'>Planning</Link></li>
          <li className='py-5 hover:bg-violet-600 cursor-pointer p-[8px] rounded'><Link to='/design'>Design</Link></li>
          <li className='py-5 hover:bg-violet-600 cursor-pointer p-[8px] rounded'><Link to='/manufacturing'>Manufacturing</Link></li>
          <li className='py-5 hover:bg-violet-600 cursor-pointer p-[8px] rounded'><Link to='/sales'>Sales</Link></li>
        </ul>
      </div>
    </div>
  )
}
