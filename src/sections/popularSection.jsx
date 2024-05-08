import React from 'react';
import pic from "../images/premium.png";
import "./style.css";

const PopularSection = () => {
  const cards = [
    {
      title: "CRAFT FLAVOR",
      description: "Indulge in the irresistible taste of Fruity Treaty's Banana Flavor Juice, a delightful blend that transports your taste buds to tropical paradise with every sip.",
      price: "$700"
    },
    {
      title: "EXOTIC FLAVOR",
      description: "Experience the exotic flavors of Fruity Treaty's Mango Flavor Juice, a succulent blend that tantalizes your senses and transports you to a sun-kissed tropical island with every sip.",
      price: "$800"
    },
    {
      title: "TROPICAL FLAVOR",
      description: "Savor the taste of paradise with Fruity Treaty's Pineapple Flavor Juice, a tropical delight bursting with tangy sweetness and refreshing goodness.",
      price: "$900"
    },
    {
      title: "SUMMER FLAVOR",
      description: "Cool off with Fruity Treaty's Watermelon Flavor Juice, a refreshing summer treat bursting with juicy goodness and mouthwatering flavor.",
      price: "$750"
    },
    {
      title: "BERRY FLAVOR",
      description: "Delight in the flavors of summer with Fruity Treaty's Mixed Berry Flavor Juice, a delightful blend of strawberries, blueberries, raspberries, and blackberries in every sip.",
      price: "$850"
    }
  ];

  return (
    <>
      <h1 className='justify-center items-center  text-[#724c34]  mb-20 text-5xl font-bold  font-mono'>Premium</h1>
      <div className="w-screen carousel">
        {cards.map((card, index) => (
          <div key={index} className="carousel-item w-[500px] flex justify-center items-center">
            <div className='flex flex-1 flex-row justify-center items-center'>
              <div className='flex flex-1 justify-center items-center '>
                <img src={pic} alt='premium' className='w-76 h-auto mb-32'/>
              </div>
              <div className='flex flex-1 flex-col  items-center justify-center bebas-neue-regular gap-3 '>
                <h1 className='font-bold text-4xl'>{card.title}</h1>
                <p className='text-left leading-9 text-lg'>{card.description}</p>
                <div className='flex flex-1 flex-row space-x-2 '>
                  <h1 className='text-xl font-semibold '>Price :</h1>
                  <h1 className='text-stone-500 font-bold text-2xl '>{card.price}</h1>
                </div>
                <div>
                  <button type="button" className="text-white  w-[160px] justify-center  bg-stone-500 hover:bg-stone-500/80 focus:ring-4 focus:outline-none focus:ring-stone-500/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-stone-500/80 dark:focus:ring-stone-500/40 mb-[200px]">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div> 
        ))}
      </div>
    </>
  );
};

export default PopularSection;
