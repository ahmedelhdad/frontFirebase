import React, { useRef, useEffect } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import {AddCart} from '../Redux toolkit/Slice/SliceCart'
import { useDispatch } from 'react-redux';
const RowContainer = ({ flag, data, scrollValue }) => {
  const dispatch = useDispatch()
  const rowcontainerRef = useRef()
  useEffect(() => {
    rowcontainerRef.current.scrollLeft = scrollValue
  }, [scrollValue])
  return (
    <div ref={rowcontainerRef} className={`w-full flex items-center  scroll-smooth gap-3  my-12 bg-rowbg 
    ${flag ? ' overflow-x-scroll scrollbar-none' : ' overflow-x-hidden flex flex-wrap justify-center'}`}
    >
      {
        data ? data.map((item) => {
          return (
            <div key={item.id} className="w-300 min-w-[300px]  md:w-340 md:min-w-[340px] h-[225px] bg-gray-100 shadow-md rounded-lg p-2 my-12  backdrop-blur-lg hover:drop-shadow-lg flex items-center justify-between flex-col">
              <div className="w-full flex items-center justify-between" onClick={() => dispatch(AddCart(item))}>
                <motion.img whileHover={{ scale: 1.2 }} className='w-40 h-40 -mt-8 drop-shadow-2xl' src={item?.imageURL} alt={item.title} />
                <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-full bg-red-600 flex justify-center items-center cursor-pointer hover:shadow-md">
                  <MdShoppingBasket className='text-white' />
                </motion.div>
              </div>
              <div className="w-full flex items-end flex-col justify-end">
                <p className='text-textColor font-semibold text-base md:text-lg'>
                  {item.title}
                </p>
                <p className='mt-1 text-sm text-gray-500'> {item.calories} Calories</p>
                <div className='flex items-center gap-8 '>
                  <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-red-500'>$</span>{item.price}</p>
                </div>


              </div>
            </div>
          )
        }) : <div className='w-full flex justify-center items-center flex-col gap-4'>
          <img src={NotFound} alt='NotFound' className='w-full h-340' />
          <p className='text-2xl font-semibold '>Items Not Available</p>
        </div>
      }
    </div>
  )
}

export default RowContainer
