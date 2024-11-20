import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RestaurantProfile } from '../../pages/Home'

type CartState = {
  itens: RestaurantProfile[]
  isOpen: boolean
}

const initialState: CartState = {
  itens: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RestaurantProfile>) => {
      state.itens.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = cartSlice.actions

export default cartSlice.reducer
