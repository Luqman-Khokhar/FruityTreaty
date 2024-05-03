import React from 'react'
// import { FiShoppingBag } from "react-icons/fi";
// import { FaRegHeart } from "react-icons/fa";

const Card =({ title })=> {
    return(
        <div class="flex w-full md:w-96 bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row  ">

        <form class="flex-2 p-6">
            <div class="flex flex-wrap">
                <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">{title}</h1>
                <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">$110.00</div>
                <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                <p className='text-left'>Indulge in the irresistible taste of Fruity Treaty's Banana Flavor Juice, a delightful blend that transports your taste buds to tropical paradise with every sip. Refreshingly sweet and undeniably smooth, it's a sip of sunshine in every bottle.</p>
                </div>
            </div>
            <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                <div class="flex space-x-2">

                    <label class="text-center">

                        <input type="radio"
                            class="flex items-center justify-center w-6 h-6 accent-violet-600 bg-gray-100 rounded-lg dark:bg-gray-600"
                            name="size" value="xs"/>XS
                    </label>
                    <label class="text-center">
                        <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                            value="s"/>S
                    </label>
                    <label class="text-center">
                        <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                            value="m"/>M
                    </label>
                    <label class="text-center">
                        <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                            value="l"/>L
                    </label>
                    <label class="text-center">
                        <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                            value="xl"/>XL
                    </label>
                </div>
                <h1 className="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300">Size
                    Guide
                </h1>
            </div>
            <div class="flex mb-4 text-sm font-medium">
                <button type="button"
                    class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Buy
                    now</button>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-300">Free shipping on all continental US orders.</p>
        </form>
        <div class="relative w-full md:w-48 flex flex-2 justify-center items-center">
            <img src="/images/orange.jpg" alt="shoppingImage"
                className="object-contain w-full h-auto md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"/>
        </div>
    </div>
    );
}
const PopularSection = () => {

    const data = [
        { title: "ORANGE FLAVOR" },
        { title: "ORANGE FLAVOR" },
        { title: "ORANGE FLAVOR" },
        { title: "ORANGE FLAVOR" },
        { title: "ORANGE FLAVOR" },
      ];
    
    return (
      <div className='px-10'>
        <h1 className='justify-center items-center text-5xl text-[#724c34] font-bold mb-20'>Popular This Week</h1>
  
        <div class="flex-col md:flex-row  overflow-x-auto justify-between flex gap-4 items-start mx-4 py-12">

        {data.map((card, index) => (
          <Card key={index} {...card} />
        ))}
</div>
      </div>
    );
  }
  
  

export default PopularSection