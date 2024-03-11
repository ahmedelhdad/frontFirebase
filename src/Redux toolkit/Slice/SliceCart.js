import { createSlice } from "@reduxjs/toolkit";



const sliceCart = createSlice({
    name:'cart',
    initialState:{
        cartShow:false,
        cart:[],
        totalPrice:0
    },
    reducers:{
        SHOWCART:(state,action) => 
        {
            state.cartShow = action.payload
        },
        AddCart : (state,action) =>
        {
            const existingIndex = state.cart.findIndex((item) => item.id === action.payload.id)
            if(existingIndex >= 0)
            {
                

            }else
            {
                state.cart = [...state.cart,action.payload]
            }
        },
        ClearAll : (state) => 
        {
            state.cart = []
        },
        increase: (state,action) => 
        {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item,qty:item.qty+1} : item)
        },
        decrease: (state,action) => 
        {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item,qty:item.qty-1} : item)
            .filter((item) => {
                if(item.qty === 0)
                {
                    return item.id !== action.payload.id
                }else
                {
                    return  item
                }
            })         

        },
        getCartTotal:(state) => 
        {
          let {totalPrice} = state.cart.reduce((cart,items) => {
            const {qty,price} = items
            cart.totalPrice += qty * price
            return cart
          },{
            totalPrice:0
          }) 
          state.totalPrice = totalPrice
        },
    }
})

export const {AddCart,ClearAll,increase,decrease,getCartTotal,SHOWCART} = sliceCart.actions
export default sliceCart.reducer