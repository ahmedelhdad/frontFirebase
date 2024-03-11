import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import { MdShoppingCart, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion'
// Database 
import { app } from '../firebase.config'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
// Redux toolkite 
import { USER } from '../Redux toolkit/Slice/Slice'
import { useDispatch, useSelector } from 'react-redux';
import {SHOWCART} from '../Redux toolkit/Slice/SliceCart'

const Header = ({HandlerFun}) => {
  const user = useSelector((state) => state.user.user)
  const stateCart =useSelector((state) => state.cart.cart)

  const dispatch = useDispatch()
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider();
  const [isMenu, setIsMenu] = useState(false)
  const Login = async () => {
    if (!user) {
      const { user: { providerData } } = await signInWithPopup(firebaseAuth, provider)
      dispatch(USER(providerData[0]))
      window.localStorage.setItem("user", JSON.stringify(providerData[0]))

    } else {
      setIsMenu(!isMenu)
    }

  }
  const Logout = () => 
  {
    setIsMenu(false)
    localStorage.clear()
    dispatch(USER(''))
  }

  return (
    <header className=' w-screen z-50 container fixed bg-white    '>
      {/* deskktop % tablet */}
      <div className=' hidden md:flex w-full h-full items-center justify-between'>
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -400 }}
        >
          <Link
            to='/' className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className='w-8 object-cover' />
            <p className='text-xl font-bold text-headingColor'>City</p>
          </Link>
        </motion.div>
        <div className='flex items-center'>
          <motion.ul
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            className='flex items-center gap-8 '>
            <li className='text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out duration-100 ' onClick={() => setIsMenu(false)}>Home</li>
            <li className='text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out duration-100 ' onClick={() => setIsMenu(false)}>Menu</li>
            <li className='text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out duration-100 ' onClick={() => setIsMenu(false)}>About Us</li>
            <li className='text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out duration-100 ' onClick={() => setIsMenu(false)}>Service</li>
          </motion.ul>
          <div   className=' relative flex items-center justify-center' onClick={() => dispatch(SHOWCART(true))}>
            <MdShoppingCart  className=' text-textColor text-2xl ml-8 cursor-pointer ' />
            <div className=' absolute -right-2 -top-2 w-5 h-5 rounded-full bg-cartNumBg'>
              <p className='text-sm text-white font-semibold flex justify-center items-center'>{stateCart.length}</p>
            </div>
          </div>

          <div className=' relative'>

            <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : Avatar} onClick={Login} alt="" className='w-10 rounded-full cursor-pointer ml-4 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl object-cover' />
            {
              isMenu ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className=' absolute right-0 top-12 w-40  flex flex-col  bg-gray-50 shadow-xl rounded-lg '>
                  {
                    user && user.email === "ahmedelhdad923@gmail.com"
                      ? <Link to='createItem' className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-base text-textColor '>New Item <MdAdd /> </Link> : ''
                  }
                  <p onClick={Logout} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-base text-textColor '>Logout <MdLogout /> </p>
                </motion.div>
              ) : ''
            }


          </div>
        </div>

      </div>
      {/* mobile  */}
      <div className=' flex items-center justify-between  md:hidden w-full h-full'>
        
        <div className=' relative flex items-center justify-center' onClick={() => dispatch(SHOWCART(true))}>
            <MdShoppingCart className=' text-textColor text-2xl ml-8 cursor-pointer ' />
            <div className=' absolute -right-2 -top-2 w-5 h-5 rounded-full bg-cartNumBg'>
              <p className='text-sm text-white font-semibold flex justify-center items-center'>2</p>
            </div>
        </div>
          <motion.div
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -400 }}
        >
          <Link
            to='/' className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className='w-8 object-cover' />
            <p className='text-xl font-bold text-headingColor'>City</p>
          </Link>
        </motion.div>
        <div className=' relative '>

          <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : Avatar} onClick={Login} alt="" className='w-10 rounded-full cursor-pointer ml-4 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl object-cover' />
          {
            isMenu ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className=' absolute right-0 top-12 w-40  flex flex-col  bg-gray-50 shadow-xl rounded-lg '>
                {
                  user && user.email === "ahmedelhdad923@gmail.com"
                    ? <Link to='createItem' className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-base text-textColor '>New Item <MdAdd /> </Link> : ''
                }
                <ul className='flex flex-col  gap-4 px-4 py-2'>
                  <li className='text-base text-textColor cursor-pointer hover:text-headingColor hover:bg-slate-200 transition-all ease-in-out duration-100 '>Home</li>
                  <li className='text-base text-textColor cursor-pointer hover:text-headingColor hover:bg-slate-200 transition-all ease-in-out duration-100 '>Menu</li>
                  <li className='text-base text-textColor cursor-pointer hover:text-headingColor hover:bg-slate-200 transition-all ease-in-out duration-100 '>About Us</li>
                  <li className='text-base text-textColor cursor-pointer hover:text-headingColor hover:bg-slate-200 transition-all ease-in-out duration-100 '>Service</li>
                </ul>
                <p onClick={Logout} className='px-4 py-2 flex items-center justify-center bg-slate-100 rounded-3xl shadow-md gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-base text-textColor '>Logout <MdLogout /> </p>
              </motion.div>
            ) : ''
          }

        </div>
      </div>
    </header>
  )
}

export default Header
