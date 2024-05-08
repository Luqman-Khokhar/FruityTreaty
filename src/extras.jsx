import React from 'react';
import pic from "../images/premium.png";
import "./style.css";
const PopularSection = () => {
 

  return (
    <>
    <h1 className='justify-center items-center  text-[#724c34]  mb-20 text-7xl font-bold bebas-neue-regular '>Premium</h1>
<div className="w-screen h-80 carousel">
  <div className="carousel-item w-[530px] h-80 ">
  <div className='flex flex-1 flex-row'>
    <div className='flex flex-1 justify-center items-center '>
<img src={pic} alt='premium' className='w-[60%] h-auto'/>
    </div>

  <div className='flex flex-1 flex-col  items-start  bebas-neue-regular'>
  <h1 className='font-bold text-4xl'>BANANA FLAVOR</h1>
  <p className='text-left  leading-9 text-lg '>Indulge in the irresistible taste of Fruity Treaty's Banana Flavor Juice, a delightful blend that transports your taste buds to tropical paradise with every sip. </p>
  <div className='flex flex-1 flex-row space-x-2 '>
  <h1 className='text-xl font-semibold '>Price :</h1>
    <h1 className='text-stone-500 font-bold text-2xl '>700$</h1>
  </div>
  <div>
  <button type="button" className="text-white  w-[160px] justify-center  bg-stone-500 hover:bg-stone-500/80 focus:ring-4 focus:outline-none focus:ring-stone-500/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-stone-500/80 dark:focus:ring-stone-500/40 mb-[200px]">
    Buy now
  </button>
  </div>
</div>




  </div>
  </div> 
  <div className="carousel-item w-[530px] h-80">
    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-[530px] h-80">
    <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-[530px] h-80">
    <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-[530px] h-80">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-[530px] h-80">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-[530px] h-80">
    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div>
</div>
</>
  );
};

export default PopularSection;
