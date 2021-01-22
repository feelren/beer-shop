import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderThemeSelector from './HeaderThemeSelector'
import s from '../../styles/dist/HeaderContainer.module.css'

const HeaderContainer = () => {
    return (
        <div className={s.wrapper}>
            <HeaderLogo />
            <HeaderThemeSelector />
        </div>
    )
}

export default HeaderContainer;