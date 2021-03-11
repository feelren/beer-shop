import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAC, removeFromCartAC } from '../../store/reducer';
import s from '../../styles/dist/AddToCartButton.module.css'

const AddToCartButton = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.main.cart)

    const addToCart = (e, id) => {
        e.stopPropagation();
        dispatch(addToCartAC(id));
    }

    const removeFromCart = (e, id) => {
        e.stopPropagation();
        dispatch(removeFromCartAC(id));
    }

    const isInCart = (id) => {
        if (cart.includes(id)) return true;
        else return false;
    }

    return (
        <>
            {
                isInCart(props.id) ?
                    <button className={s.button + ' ' + s.remove} onClick={(e) => removeFromCart(e, props.id)}>REMOVE from cart</button> :
                    <button className={s.button + ' ' + s.add} onClick={(e) => addToCart(e, props.id)}>ADD to cart</button>
            }
        </>

    )
}

export default AddToCartButton;

//делаем кнопки "в избранное" и удалить оттуда