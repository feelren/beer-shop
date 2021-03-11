import React from 'react'
import { NavLink } from 'react-router-dom';
import s from '../../styles/dist/Navigation.module.css'


const Navigation = () => {
    return (
        <div className={s.wrapper}>
            <p>Navigation</p>
            <ul>
                <li><NavLink to='/shop' activeClassName={s.active}>Shop</NavLink></li>
                <li><NavLink to='/cart' activeClassName={s.active}>Cart</NavLink></li>

            </ul>
        </div>
    )
}

export default Navigation;