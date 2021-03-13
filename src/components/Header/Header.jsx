import React from 'react'
import mainLogo from '../../images/main-logo.png'
import s from '../../styles/dist/Header.module.css'
import { useDispatch } from 'react-redux';
import { isSidebarActiveAC } from './../../store/reducer';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const isSidebarActive = useSelector(state => state.main.isSidebarActive);

    return (
        <header className={s.header}>
            <img className={s.logo} src={mainLogo} alt="" />
            {!isSidebarActive ? <MenuIcon className={s.menu_btn} onClick={() => dispatch(isSidebarActiveAC())} /> : null}
        </header >
    )
}

export default Header;