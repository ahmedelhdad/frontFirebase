import React,{useState,useEffect} from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion'
import {MdChevronLeft , MdChevronRight} from 'react-icons/md'
import RowContainer from './RowContainer'
import MenuContainer from './MenuContainer'
import { useSelector } from 'react-redux'
import CartContainer from './CartContainer'
const MainContainer = () => {
  const foodItems = useSelector((state) => state.user.foodItems)
  
  const [scrollValue,setscrollValue] = useState(0)
  useEffect(() => {
  },[scrollValue])
  // console.log('MainContiner')
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />
      <section className='w-full my-6  '>
      <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold  hover:before:w-full cursor-pointer before:transition-all before:ease-in-out capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>

          {
            foodItems && 
            (<div className=" hidden md:flex gap-3 items-center">
            <motion.div
             
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => scrollValue <=0 ? setscrollValue(0) : setscrollValue(scrollValue - 350)}
            >
              <MdChevronLeft  className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => window.scrollY < scrollValue ? setscrollValue(window.scrollY):setscrollValue(scrollValue + 350)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>)
          }
        </div>
        <RowContainer flag={true} data={foodItems.filter((item) => item.category === 'fruits')} scrollValue={scrollValue}/>
      </section>
      <MenuContainer/>
      <CartContainer />
    </div>
  )
}

export default MainContainer
