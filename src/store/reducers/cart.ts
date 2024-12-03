import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Food } from '../../pages/Home'

type CartState = {
  itens: Food[]
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
    add: (state, action: PayloadAction<Food>) => {
      const prato = state.itens.find((item) => item.id === action.payload.id)
      if (!prato) {
        state.itens.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions

export default cartSlice.reducer
