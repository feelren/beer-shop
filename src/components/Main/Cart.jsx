import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCartItemsTC } from '../../store/reducer';
import ItemsGrid from './ItemsGrid';
import { NavLink } from 'react-router-dom';
import cartImage from '../../images/cartImage.svg'
import s from '../../styles/dist/Cart.module.css'
import ItemsList from './ItemsList';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.main.cart);
    const items = useSelector(state => state.main.items);
    const itemsLayout = useSelector(state => state.main.itemsLayout)

    useEffect(() => {
        dispatch(setCartItemsTC(cart))
    }, [dispatch, cart])

    return (
        <div className={s.wrapper}>
            <h1>Your cart</h1>
            {
                cart.length ?

                    itemsLayout === 'grid' ? <ItemsGrid items={items} /> : <ItemsList items={items} />

                    :

                    <div className={s.no_items_block}>
                        <h2>You have nothing in your cart..</h2>
                        <NavLink to='/shop'>Wanna go shopping?
                            <img src={cartImage} className={s.cartImage} alt='To shop' />
                        </NavLink>
                    </div>
            }
        </div>

    )
}

export default Cart;