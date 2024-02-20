

// import { createSlice } from  "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems:[],
  totalQuantity: 0,
  tatoalAmout:0
}

const cartSlice = createSlice({
  name:'cart',
  initialState: initialState,

  reducers: {
    addItem(state,action){
      const newItem = action.payload
      const existingItem =state.cartItems.find((item)=> item.id===newItem.id);
      state.totalQuantity++

      if(!existingItem){
        // console.log(action.payload,newItem);

        state.cartItems.push({
          id:newItem.id,
          title:newItem.title,
          image01: newItem.image01,
          price:newItem.price,
          quantity:1,
          totalPrice:newItem.price
        })

        // console.log(state.cartItems[0]);
      }

      else{
        existingItem.quantity++
        existingItem.totalPrice= Number(existingItem.totalPrice)
        +Number(newItem.price)
      }

      state.tatoalAmout = state.cartItems.reduce((total,item)=>(
        total + Number(item.price)* Number(item.quantity)
      ))
    },
     //=============== remove item ========
     removeItem(state, action){
      const id = action.payload;
      const existingItem = state.cartItems.find((item)=>item.id=== id)
      state.totalQuantity--

      if(existingItem.quantity=== 1){
        state.cartItems = state.cartItems.filter((item)=> item.id !== id)
      }
      else{
        existingItem.quantity--
        existingItem.totalPrice = Number(existingItem.totalPrice)-Number
        (existingItem.price)
      }
      state.tatoalAmout = state.cartItems.reduce((total, item)=>(
        total + Number(item.price) * Number(item.quantity),0
      ))
     }
  },
});

export const cartActions = cartSlice.actions
export default cartSlice