import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainContainer, CreateContainer, Header } from './Components/ControlWebsite'
import { AnimatePresence } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { FOOT_ITEMS } from './Redux toolkit/Slice/Slice'
import { getAllFoodItems } from './Utils/firebaseFunctions'
import { useState } from 'react'

const App = () => {
  const [isCart, setIsCart] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      await getAllFoodItems().then((data) => dispatch(FOOT_ITEMS(data)))
    }
    fetchData()
  }, [dispatch])
  const HandlerFun = (e) => {
    setIsCart(e)
  }


  return (
    <BrowserRouter >
      <Header HandlerFun={HandlerFun} />
      <AnimatePresence mode='wait'>
        <main className='pt-20 container'>
          <Routes>
            <Route path='/*' element={<MainContainer isCart={isCart} HandlerFun={HandlerFun} />} />
            <Route path='createItem' element={<CreateContainer />} />

          </Routes>
        </main>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
