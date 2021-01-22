import React from 'react'
import s from '../../styles/dist/HeaderThemeSelector.module.css'
import sun from '../../images/sun.png'
import moon from '../../images/moon.png'

const HeaderThemeSelector = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.sun} src={sun} alt="sun" />
            <img className={s.moon} src={moon} alt="moon" />
        </div>
    )
}

export default HeaderThemeSelector;