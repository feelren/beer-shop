import React from 'react'
import { useDispatch } from 'react-redux';
import { openProductInfoTC } from '../../store/reducer';
import s from '../../styles/dist/ItemsList.module.css'
import AddToCartButton from '../Buttons/AddToCartButton';
import ProductModal from './../Modals/ProductModal';
import { useSelector } from 'react-redux';

const ItemsList = (props) => {
    const items = props.items
    const dispatch = useDispatch();
    const isProductModalActive = useSelector((state) => state.main.isProductModalActive);
    const isFetching = useSelector((state) => state.main.isFetching);

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
            {isProductModalActive && !isFetching ? <ProductModal /> : null}
        </div>
    )

}

export default ItemsList;


