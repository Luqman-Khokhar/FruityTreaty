import React from 'react'

const FlavorSection = () => {
  return (
  <div className='m-10 '>
  <h1 className='justify-center items-center text-5xl text-[#724c34] font-bold mb-20 '>FLAVORS</h1>
{/* BANANA STARTS */}
  <div className='flex flex-1 flex-row bg-stone-100'>

    <div className='flex flex-1 justify-center items-center '>
<img src='/images/banana.jpeg' alt='banana' className='w-[80%] h-auto'/>
    </div>

  <div className='flex flex-1 flex-col   items-start space-y-10 lg:pt-[130px]'>
  <h1 className='font-bold text-7xl'>BANANA FLAVOR</h1>
  <p className='text-left pr-10'>Indulge in the irresistible taste of Fruity Treaty's Banana Flavor Juice, a delightful blend that transports your taste buds to tropical paradise with every sip. Refreshingly sweet and undeniably smooth, it's a sip of sunshine in every bottle.</p>
  <div className='flex flex-1 flex-row space-x-5'>
    <h1 className='text-yellow-500 font-bold text-xl'>700$</h1>
    <h1>Price</h1>
    <h1 className='text-yellow-500 font-bold text-xl'>7000</h1>
    <h1>Stock</h1>
  </div>
  <div>
  <button type="button" className="text-white w-[160px] justify-center  bg-yellow-500 hover:bg-yellow-500/80 focus:ring-4 focus:outline-none focus:ring-yellow-500/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-yellow-500/80 dark:focus:ring-yellow-500/40 mb-[200px]">
    Buy now
  </button>
  </div>
</div>




  </div>
{/* BANANA ENDS */}


{/* PAYA STARTS */}
<div className='flex flex-1 flex-row bg-stone-100 my-20 pl-5 '>

<div className='flex flex-1 flex-col   items-start space-y-10 lg:pt-[130px]'>
<h1 className='font-bold text-7xl'>PAYA FLAVOR</h1>
<p className='text-left pr-10'>Savor the exquisite taste of Fruity Treaty's Now Paya Flavor Juice, a symphony of flavors that tantalizes your palate with each sip. Crafted with precision, this blend seamlessly blends the richness of ripe now fruit with the subtle sweetness of paya, delivering a unique and refreshing burst of flavor in every drop.</p>
<div className='flex flex-1 flex-row space-x-5'>
<h1 className='text-[#ff7850] font-bold text-xl'>700$</h1>
<h1>Price</h1>
<h1 className='text-[#ff7850] font-bold text-xl'>7000</h1>
<h1>Stock</h1>
</div>
<div> 
<button type="button" className="text-white w-[160px] justify-center  bg-[#ff7850] hover:bg-[#ff7850]/80 focus:ring-4 focus:outline-none focus:ring-[#ff7850]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#ff7850]/80 dark:focus:ring-[#ff7850]/40 mb-[200px]">
Buy now
</button>
</div>
</div>

<div className='flex flex-1 justify-center items-center  '>
<img src='/images/paya.jpg' alt='paya' className='w-[80%] h-auto'/>
</div>

</div>
{/* PAYA ENDS */}


{/* COCONUT STARTS */}
<div className='flex flex-1 flex-row bg-stone-100'>

<div className='flex flex-1 justify-center items-center '>
<img src='/images/choco.jpeg' alt='coconut' className='w-[80%] h-auto'/>
</div>

<div className='flex flex-1 flex-col   items-start space-y-10 lg:pt-[130px]'>
<h1 className='font-bold text-7xl'>COCONUT FLAVOR</h1>
<p className='text-left pr-10'>
Fruity Treaty's Now Coconut Flavor Juice offers a tantalizing blend of creamy coconut essence, promising a refreshing tropical escape in every drop.Tropical fusion of creamy coconut essence, delivering a smooth and refreshing taste sensation with every sip</p>
<div className='flex flex-1 flex-row space-x-5'>
<h1 className='text-[#885445] font-bold text-xl'>700$</h1>
<h1>Price</h1>
<h1 className='text-[#885445] font-bold text-xl'>7000</h1>
<h1>Stock</h1>
</div>
<div>
<button type="button" className="text-white w-[160px] justify-center  bg-[#885445] hover:bg-[#885445]/80 focus:ring-4 focus:outline-none focus:ring-[#885445]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#885445]/80 dark:focus:ring-[#885445]/40 mb-[200px]">
Buy now
</button>
</div>
</div>




</div>
{/* COCONUT ENDS */}

</div>
  )
}

export default FlavorSection