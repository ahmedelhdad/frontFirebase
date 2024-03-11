import React, { useEffect } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import NoFound from '../img/emptyCart.svg'
import { SHOWCART, ClearAll, increase, decrease, getCartTotal } from '../Redux toolkit/Slice/SliceCart'
const CartContainer = () => {
    const state = useSelector((state) => state.cart.cart)
    const cartShow = useSelector((state) => state.cart.cartShow)
    const totalPrice = useSelector((state) => state.cart.totalPrice)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch, state])
    const HandlerCart = () => {
        if (state.length > 0) {
            return (
                
                <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
                <div className="w-full  h-370 md:h-42 px-6 py-10 flex flex-col  gap-3 overflow-y-scroll scrollbar-none">
                    {
                        state.map((item) => (
                            <div className='flex items-center' key={item.id}>
                        <img src={item.imageURL} className='w-20' alt="" />
                        <div className='flex flex-col ml-4 gap-2'>
                            <p className=' text-base text-gray-50'>{item.title}</p>
                            <p className='text-sm block text-gray-300 font-semibold'>${item.price}</p>
                        </div>
                        <div className=' group flex items-center gap-2 ml-auto cursor-pointer'>
                            <motion.div whileTap={{ scale: 0.7 }} onClick={() => dispatch(decrease(item))}>
                                <BiMinus className='text-gray-50' />
                            </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>{item.qty}</p>
                            <motion.div whileTap={{ scale: 0.7 }} onClick={() => dispatch(increase(item))}>
                                <BiPlus className='text-gray-50' />
                            </motion.div>

                        </div>

                    </div>
                    ))
                    }
                    

                </div>
                <div className="w-full flex-1  bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Sub Total </p>
                        <p className='text-gray-400 text-lg'>$ 6.4 </p>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Delivery </p>
                        <p className='text-gray-400 text-lg'>$ 2.6 </p>

                    </div>
                    <div className='w-full border-b py-2 border-gray-600'></div>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Total </p>
                        <p className='text-gray-400 text-lg'>$ {totalPrice} </p>

                    </div>
                    <motion.button whileTap={{ scale: '0.8' }} type='button' className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-in-out'>
                        Check Out
                    </motion.button>
                </div>
            </div>
            )
        } else {
            return (
                <div className="w-full h-full  rounded-t-[2rem] flex ">
                    <img src={NoFound} alt="" />
                </div>
            )

        }

    }
    return cartShow && (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className=' fixed top-0 right-0 w-full md:w-[380px] h-[100vh] z-50  rounded-b-3xl  bg-white 
    flex flex-col items-center '>
            <div className='flex w-full p-4 items-center justify-between   '>
                <motion.div whileTap={{ scale: 0.7 }} onClick={() => dispatch(SHOWCART(false))}>
                    <MdOutlineKeyboardBackspace className=' text-textColor text-3xl cursor-pointer hover:text-gray-400' />
                </motion.div>
                <p className='text-lg text-textColor font-semibold'>Cart</p>
                <motion.p onClick={() => dispatch(ClearAll())} whileTap={{ scale: 0.7 }} className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-200 rounded-md hover:shadow-md
                 duration-100 transition-all ease-in-out cursor-pointer text-textColor'>
                    Clear
                    <RiRefreshFill />
                </motion.p>
            </div>
            {HandlerCart()}
        </motion.div>
    )
}
export default CartContainer