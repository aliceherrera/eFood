import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RestaurantProfile } from '../../pages/Home'

type CartState = {
  itens: RestaurantProfile[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RestaurantProfile>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions

export default cartSlice.reducer
