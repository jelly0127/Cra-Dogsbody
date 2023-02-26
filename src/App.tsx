/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
import '@/App.less'
import { useDispatch, useSelector } from 'react-redux'
import { updateDesktop } from './redux/counterSlice'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from './style'
import useWindowSize from './hooks/isDesktop'
import CommunityLinkGroup from './components/CommunityLinkGroup/CommunityLinkGroup'

function App() {
  const element = useRoutes(routes)
  const [Name, setName] = useState('Im jelly')
  const size = useWindowSize()
  const dispatch = useDispatch()
  const isDesktop = useSelector((state: { counter: { isDesktop: boolean } }) => state.counter.isDesktop)
  useEffect(() => {
    dispatch(updateDesktop(size.isDesktop))
  }, [size.isDesktop])
  const getTheme = useCallback(() => {
    console.log(isDesktop)

    return { ...defaultTheme, isDesktop }
  }, [isDesktop])
  return (
    <MyContext.Provider value={{ Name, setName }}>
      <ThemeProvider theme={getTheme()}>
        <GlobalStyle />
        {element}
        <CommunityLinkGroup />
      </ThemeProvider>
    </MyContext.Provider>
  )
}

export default App
