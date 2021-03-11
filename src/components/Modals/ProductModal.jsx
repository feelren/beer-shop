import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeProductModalAC } from '../../store/reducer';
import s from '../../styles/dist/ProductModal.module.css'
import AddToCartButton from './../Buttons/AddToCartButton';

const ProductModal = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.main.selectedItem);


    return (
        <div className={s.wrapper} onClick={() => dispatch(closeProductModalAC())}>
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                <div className={s.modal_top_row}>
                    <div className={s.modal_top_image}><img src={item.image_url} alt="" /></div>
                    <div className={s.modal_top_info}>
                        <h2>{item.name}</h2>
                        <h4>{item.tagline}</h4>
                        <p>Pairing with:</p>
                        <ul>
                            {item.food_pairing.map(food => <li key={food}>{food}</li>)}
                        </ul>
                        <AddToCartButton id={item.id} />
                    </div>
                </div>
                <div className={s.modal_bottom}>{item.description}</div>
            </div>
        </div>
    )
}

export default ProductModal;