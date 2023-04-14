import { createSlice } from '@reduxjs/toolkit'

export const DESKTOP_WIDTH = 768
export let isDesktop = false
export const isDark = true
const isShowWalletBox = false
if (typeof document !== 'undefined') {
  if (window.innerWidth >= DESKTOP_WIDTH) {
    isDesktop = true
  }
}
export const initSlice = createSlice({
  name: 'app',
  initialState: {
    value: 0,
    isDesktop,
    isDark,
    isShowWalletBox,
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
    updateDark: (state, action) => {
      state.isDark = action.payload
    },
    updateShowWalletBox: (state, action) => {
      state.isShowWalletBox = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateDesktop, updateDark } = initSlice.actions

export default initSlice.reducer
