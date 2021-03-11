import React from 'react'
import { useDispatch } from 'react-redux';
import { openProductInfoTC } from '../../store/reducer';
import s from '../../styles/dist/ItemsGrid.module.css'
import AddToCartButton from '../Buttons/AddToCartButton';

const ItemsGrid = (props) => {
    const dispatch = useDispatch();
    const items = props.items;


    return (
        <div className={s.grid_container}>
            {items.map(item => {
                return (
                    <div className={s.item} key={item.id} onClick={() => dispatch(openProductInfoTC(item.id))}>
                        <div className={s.photo_container}>
                            {
                                item.image_url ? <img className={s.photo} src={item.image_url} alt="" /> : <div className={s.no_photo}>Фото отсутствует</div>
                            }
                        </div>
                        <div className={s.name}>{item.name}</div>
                        <AddToCartButton id={item.id} />
                    </div>
                )
            })}
        </div>
    )
}

export default ItemsGrid;

//делаем кнопки "в избранное" и удалить оттуда