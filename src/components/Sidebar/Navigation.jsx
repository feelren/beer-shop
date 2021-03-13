import React from 'react'
import { NavLink } from 'react-router-dom';
import s from '../../styles/dist/Navigation.module.css'
import { useDispatch } from 'react-redux';
import { isSidebarActiveAC } from '../../store/reducer';


const Navigation = () => {
    const dispatch = useDispatch();
    return (
        <div className={s.wrapper}>
            <p>Navigation</p>
            <ul>
                <li><NavLink to='/beer-shop/shop' activeClassName={s.active} onClick={() => dispatch(isSidebarActiveAC())}>Shop</NavLink></li>
                <li><NavLink to='/beer-shop/cart' activeClassName={s.active} onClick={() => dispatch(isSidebarActiveAC())}>Cart</NavLink></li>

            </ul>
        </div>
    )
}

export default Navigation;