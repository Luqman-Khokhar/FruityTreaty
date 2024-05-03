import React from 'react'

const NumberSection = () => {
  return (
    <>
    
    <div className="flex flex-row mt-5 mb-20">
     <div className='flex flex-1 flex-col border-r-2 py-4 px-6'>
      <h1 className='font-bold text-3xl'>500+</h1>
      <p className='text-stone-500 text-xs text-center'>Organic Products</p>
     </div>
     <div className='flex flex-1 flex-col border-r-2 py-4 px-6'>
      <h1 className='font-bold text-3xl'>100+</h1>
      <p className='text-stone-500 text-xs text-center'>International Franchices</p>
     </div>
     <div className='flex flex-1 flex-col py-4 px-6'>
      <h1 className='font-bold text-3xl'>1 Million+</h1>
      <p className='text-stone-500 text-xs text-center'>Sales through-out the World</p>
     </div>
    </div>
    
    </>
  )
}

export default NumberSection