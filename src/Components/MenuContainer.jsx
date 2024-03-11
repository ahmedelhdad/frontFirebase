import React,{useState} from 'react'
import { IoFastFood } from 'react-icons/io5'
import { categories } from '../Utils/data'
import { motion } from 'framer-motion'
import RowContainer from './RowContainer'
import { useSelector } from 'react-redux'
const MenuContainer = () => {
    const foodItems = useSelector((state) => state.user.foodItems)
    const [filter,setFilter] = useState()

    return (
        <section className='w-full my-6'>
            <div className='flex flex-col justify-center items-center'>
                <p className=" text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 mr-auto before:h-1 before:-bottom-2 before:left-0 hover:before:w-full cursor-pointer before:transition-all before:ease-in-out before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                    Our Hot Dishes
                </p>
                <div className='w-full flex justify-start lg:justify-center gap-8 py-6 scrollbar-none items-center overflow-x-scroll'>

                    {
                        categories && categories.map((item) => {
                            return (
                                <motion.div whileTap={{scale:0.75}} key={item.id} onClick={() => setFilter(item.urlParamName)} className={`group ${filter === item.urlParamName ? 'bg-cartNumBg':'bg-card'} hover:bg-cartNumBg w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col items-center justify-center gap-3 duration-150 transition-all ease-in-out`}>
                                    <div className={`w-10 h-10 rounded-full  ${filter === item.urlParamName ? 'bg-card':'bg-cartNumBg'}  group-hover:bg-card flex items-center justify-center`}>
                                        <IoFastFood className={`${filter === item.urlParamName ? 'text-textColor':'text-card '} group-hover:text-textColor text-lg`} />
                                    </div>
                                    <p className={`text-sm font-semibold group-hover:text-white ${filter === item.urlParamName ? 'text-white':'text-textColor '}`}>{item.name}</p>
                                </motion.div>
                            )
                        })
                    }
                </div>


                <div className="w-full ">
                    <RowContainer flag={false} data={filter ? foodItems.filter((item) => item.category === filter) : foodItems} />
                </div>




            </div>
        </section>
    )
}

export default MenuContainer