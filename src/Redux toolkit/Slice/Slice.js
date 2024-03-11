import {createSlice} from '@reduxjs/toolkit'
import { fetchUser } from '../../Utils/fetchlocalStorageData'

const userSlice = createSlice({
    name:'user',
    initialState:{
        user:fetchUser(),
        foodItems:[]
    },
    reducers:{
        USER:(state,action) => 
        {
            state.user = action.payload
        },
        FOOT_ITEMS:(state,action) =>
        {
            state.foodItems = action.payload
        }
    }
})

export const {USER,FOOT_ITEMS} = userSlice.actions
export default userSlice.reducer