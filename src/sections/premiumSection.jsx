import React from 'react'
import pic from "../images/premium.png";
import './style.css';
const PremiumSection = () => {
  return (
  <div className='p-10 '>
  <h1 className=' text-7xl font-bold bebas-neue-regular '>Premium</h1>
  <div className='flex flex-1 flex-row'>
    <div className='flex flex-1 justify-center items-center '>
<img src={pic} alt='premium' className='w-[60%] h-auto'/>
    </div>

  <div className='flex flex-1 flex-col  items-start space-y-10  lg:pt-[130px] bebas-neue-regular'>
  <h1 className='font-bold text-7xl'>BANANA FLAVOR</h1>
  <p className='text-left pr-36 leading-9 text-xl '>Indulge in the irresistible taste of Fruity Treaty's Banana Flavor Juice, a delightful blend that transports your taste buds to tropical paradise with every sip. Refreshingly sweet and undeniably smooth, it's a sip of sunshine in every bottle.</p>
  <div className='flex flex-1 flex-row space-x-2 my-[-100px]'>
  <h1 className='text-2xl font-semibold '>Price :</h1>
    <h1 className='text-stone-500 font-bold text-3xl '>700$</h1>
  </div>
  <div>
  <button type="button" className="text-white  w-[160px] justify-center  bg-stone-500 hover:bg-stone-500/80 focus:ring-4 focus:outline-none focus:ring-stone-500/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-stone-500/80 dark:focus:ring-stone-500/40 mb-[200px]">
    Buy now
  </button>
  </div>
</div>




  </div>
{/* BANANA ENDS */}

</div>
  )
}

export default PremiumSection