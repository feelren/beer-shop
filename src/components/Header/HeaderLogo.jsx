import React from 'react'
import mainLogo from '../../images/main-logo.png'
import s from '../../styles/dist/HeaderLogo.module.css'

const HeaderLogo = () => {
    return <img className={s.logo} src={mainLogo} alt="" />
}

export default HeaderLogo;