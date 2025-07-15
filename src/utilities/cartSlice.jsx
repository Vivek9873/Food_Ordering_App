import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state,action)=>{
            // mutatting the state over there 
            state.items.push(action.payload)
        },
        removeItems:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            // if we do state = [] then the a new array is made instead of earlier one. Basically pizza will 
            // always be present in that state. 
            //  We have to either return {items:[]} or mutate the original state
            state.items.length = 0;
        }

    }
});
export const {addItems,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer;