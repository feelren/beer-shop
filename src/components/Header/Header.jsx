import React from 'react'
import mainLogo from '../../images/main-logo.png'
import s from '../../styles/dist/Header.module.css'
import { useDispatch } from 'react-redux';
import { toggleIsSettingsWindowActiveAC } from './../../store/reducer';

const Header = () => {
    const dispatch = useDispatch();

    return (
        <header className={s.header}>
            <img className={s.logo} src={mainLogo} alt="" />
            <button className={s.menu_btn} onClick={() => dispatch(toggleIsSettingsWindowActiveAC())}>SETTINGS</button>
        </header>
    )
}

export default Header;