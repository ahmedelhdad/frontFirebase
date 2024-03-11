import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/Slice";
import sliceCart from './Slice/SliceCart'

const store = configureStore({
    reducer:{
        user:UserSlice,
        cart:sliceCart
    }    
})


export default store