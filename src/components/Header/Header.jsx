import React from 'react'
import mainLogo from '../../images/main-logo.png'
import s from '../../styles/dist/Header.module.css'
import { useDispatch } from 'react-redux';
import { isSidebarActiveAC } from './../../store/reducer';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    const dispatch = useDispatch();

    return (
        <header className={s.header}>
            <img className={s.logo} src={mainLogo} alt="" />
            <MenuIcon className={s.menu_btn} onClick={() => dispatch(isSidebarActiveAC())} />
        </header >
    )
}

export default Header;