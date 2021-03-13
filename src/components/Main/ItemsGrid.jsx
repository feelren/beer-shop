import React from 'react'
import { useDispatch } from 'react-redux';
import { openProductInfoTC } from '../../store/reducer';
import s from '../../styles/dist/ItemsGrid.module.css'
import AddToCartButton from '../Buttons/AddToCartButton';
import ProductModal from '../Modals/ProductModal';
import { useSelector } from 'react-redux';

const ItemsGrid = (props) => {
    const dispatch = useDispatch();
    const items = props.items;
    const isProductModalActive = useSelector((state) => state.main.isProductModalActive);
    const isFetching = useSelector((state) => state.main.isFetching);


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
            {isProductModalActive && !isFetching ? <ProductModal /> : null}
        </div>
    )
}

export default ItemsGrid;

//делаем кнопки "в избранное" и удалить оттуда