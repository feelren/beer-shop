import React from 'react'
import { useDispatch } from 'react-redux';
import { openProductInfoTC } from '../../store/reducer';
import s from '../../styles/dist/ItemsList.module.css'
import AddToCartButton from '../Buttons/AddToCartButton';

const ItemsList = (props) => {
    const items = props.items
    const dispatch = useDispatch();

    return (
        <div>
            {items.map(item => {
                return (
                    <div className={s.item} key={item.id} onClick={() => dispatch(openProductInfoTC(item.id))}>
                        <div className={s.photo_container}>
                            {
                                item.image_url ? <img className={s.photo} src={item.image_url} alt="" /> : <div className={s.no_photo}>Фото отсутствует</div>
                            }
                        </div>
                        <div className={s.info}>
                            <h3>{item.name}</h3>
                            <div>{item.description}</div>
                            <AddToCartButton id={item.id} />
                        </div>

                    </div>
                )
            })}
        </div>
    )

}

export default ItemsList;


