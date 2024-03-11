import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heroData } from '../Utils/data'
const HomeContainer = () => {

  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start  md:items-start justify-center gap-6 '>
        <div className='flex items-center gap-2 justify-center   bg-orange-200 px-4 py-1 rounded-full '>
          <p>Bike Delivery</p>
          <div className='w-8 h-8 drop-shadow-xl bg-white rounded-full overflow-hidden text-base text-orange-500 font-semibold '>
            <img src={Delivery} className='w-full h-full object-contain ' alt="" />
          </div>
        </div>

        <p className='text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor'>
          The Fastest Delivery in  <span className=' text-orange-600 text-[3rem] md:text-[5rem]'>Your City</span>
        </p>
        <p className='text-base text-textColor text-center md:text-left md:pr-14  '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolor expedita deleniti hic architecto porro in ut doloremque magnam laboriosam ipsam ab ipsa commodi, nihil quas ea dicta eos id?
        </p>
        <button className=' bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto mr-auto   px-4 py-2 cursor-pointer rounded-lg hover:shadow-lg transition-all ease-out duration-100'>Order Now</button>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
        <img src={HeroBg} alt="hero-bg" className=" ml-auto h-420 w-full lg:w-auto lg:h-650" />
        <div className="w-full h-full absolute left-0 top-0 flex  items-center justify-center lg:px-20 gap-4 py-4 flex-wrap">
        {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 lg:hover:scale-75 transition-all duration-100 ease-in-out cursor-pointer "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
