import { createSlice } from '@reduxjs/toolkit'

export const DESKTOP_WIDTH = 768
export let isDesktop = false
if (typeof document !== 'undefined') {
  if (window.innerWidth >= DESKTOP_WIDTH) {
    isDesktop = true
  }
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    isDesktop,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
      console.log(state.value)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    updateDesktop: (state, action) => {
      state.isDesktop = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateDesktop } = counterSlice.actions

export default counterSlice.reducer
