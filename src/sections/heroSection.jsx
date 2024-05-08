import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaVine } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <div className="flex flex-row bg-orange-200 w-full h-screen ">
    {/* {LEFT SIDE STARTS} */}
    <div className="flex-5 h-screen border-stone-400 border-r-2">
        <div className="flex flex-col justify-between items-center w-full h-screen py-4">
          {/* Company name at the top */}
          <div className="px-2 justify-start items-start">
          <h1 className="text-xl font-bold font-mono">Treaty</h1>
          <h1 className="text-xl font-bold font-mono mt-[-10px]">Fruity</h1>
          </div>
          {/* Company name at the bottom */}
          <div className="py-4">
          <ul className="flex flex-col justify-end items-center space-y-6">
              <li><FaTwitter /></li>
              <li><FaSquareFacebook /></li>
              <li><FaVine /></li>
              <li><FaSquareInstagram /></li>
            </ul>
          </div>
        </div>
      </div>
{/* {LEFT SIDE ENDS} */}


      {/* Right side */}
      <div className="flex-1 w-full h-screen">
{/* {MENU BAR STARTS} */}
        <div className='flex flex-row'>
        <div className="flex-1 md:flex-0 sm:flex-0 "></div>
            <div className="flex-1 md:flex-2 sm:flex-4 ">
  <nav className="  px-4 py-2 rounded">
    <ul className="flex justify-center space-x-10">
      <li><h1 className="hover:underline font-semibold">Flavors</h1></li>
      <li><h1 className="hover:underline font-semibold">Store</h1></li>
      <li><h1 className="hover:underline font-semibold">Blog</h1></li>
      <li><h1 className="hover:underline font-semibold">About Us</h1></li>
    </ul>
  </nav>``
</div>
        <div className="flex-1  ">
          {/* Navbar */}
          <nav className="  px-[100px] py-4 ">
            <ul className="flex justify-end items-center space-x-6">
              <li><FaSearch/></li>
              <li><FaShoppingBag /></li>
              <li><FaRegUser /></li>
            </ul>
          </nav>
        </div>

        </div>
        <div className='flex flex-row h-full '>
{/* {MENU BAR ENDS}} */}


            {/* {LEFT BUTTON SIDE STARTS} */}
       <div className='flex flex-1 flex-col  items-center justify-center'>
        <div className='' >
<h1 className='text-[80px] text-[#724c34] font-mono'>
    Treaty 
</h1>
<h1 className='text-[80px] mt-[-30px] font-mono'>
     Fruity
</h1>
</div>
<p className='px-10 text-left  my-4 '> "Treaty Fruity" is here to tantalize your taste buds with its delightful blend of exotic flavors. With its convenient size and eye-catching design, it's the perfect on-the-go companion for your active lifestyle.</p>
       <div className='mt-10'>
       <button type="button" class="text-white w-[160px] justify-center bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
       <FaShoppingBag style={{marginRight:"10%"}}/>
Add to cart
</button>
<button type="button" class=" w-[160px] justify-center bg-[#f8f6f5] hover:bg-[#f8f6f5]/80 focus:ring-4 focus:outline-none focus:ring-[#f8f6f5]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#f8f6f5]/80 dark:focus:ring-[#f8f6f5]/40 me-2 mb-2">
    View details
</button>
       </div>
       </div>
{/* {LEFT BUTTON SIDE ENDS} */}

{/* {Right SIDE = IMAGE SIDE STARTS} */}
<div className='flex flex-1 flex-col items-center justify-center'>
  <img src='/images/canImage.png' alt='productImage' className='w-[70%] h-auto mx-auto' />
</div>

{/* {Right IMAGE SIDE STARTS} */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
