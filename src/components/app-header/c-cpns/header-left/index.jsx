import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  function logoClickHandle(){
    navigate("/home")
  }

  return (
    <LeftWrapper>
      {/* 点击事件不用传递参数，可以不用写onClick={e=>logoClickHandle},如果不想用event参数而是其他，就用onClick={e=>logoClickHandle("xxx")}*/}
        <div className='logo' onClick={logoClickHandle}>
        <IconLogo/>
        </div>
    </LeftWrapper>
  )
})

export default HeaderLeft