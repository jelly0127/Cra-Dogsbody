import React from 'react'
import { Button } from 'antd'
import { Logo, RootBox, ThemeLogo } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { updateDark } from '../../redux/reducer'
// import Wallet from '../Wallet/Wallet'

const Header = () => {
  const dispatch = useDispatch()
  const isDark = useSelector((state: { app: { isDark: boolean } }) => state.app.isDark)
  return (
    <RootBox>
      <div className="logo_box">
        <a href="/" className="logo_box_a">
          <Logo />
          <span className="logo_box_text">Dogsbody</span>
        </a>
      </div>
      <div className="right_box">
        <div className="wallet_box">{/* <Wallet /> */}</div>
        <div className="right_box_Theme">
          <Button className="right_box_button" onClick={() => dispatch(updateDark(!isDark))}>
            <ThemeLogo />
          </Button>
        </div>
      </div>
    </RootBox>
  )
}
export default Header
