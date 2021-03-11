import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCartItemsTC } from '../../store/reducer';
import ItemsGrid from './ItemsGrid';
import { NavLink } from 'react-router-dom';
import cartImage from '../../images/cartImage.svg'
import s from '../../styles/dist/Cart.module.css'

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.main.cart);
    const items = useSelector(state => state.main.items);

    useEffect(() => {
        dispatch(setCartItemsTC(cart))
    }, [dispatch, cart])

    return (
        <div className={s.wrapper}>
            <h1>Your cart</h1>
            {
                cart.length ?

                    <ItemsGrid items={items} /> :

                    <div className={s.no_items_block}>
                        <h4>You have nothing in your cart..  <NavLink to='/shop'>Wanna go shopping?<img src={cartImage} className={s.cartImage} alt='To shop' /></NavLink></h4>
                    </div>
            }

        </div>

    )
}

export default Cart;