import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from '../../styles/dist/ItemsCountSelector.module.css'
import { changeItemsCountOnPageTC } from '../../store/reducer';


const ItemsCountSelector = () => {
    const dispatch = useDispatch();
    const buttons = [12, 24, 48, 72];
    const itemsCountOnPage = useSelector(state => state.main.itemsCountOnPage)

    const changeItemsCountOnPage = count => {
        dispatch(changeItemsCountOnPageTC(count))
    }

    return (
        <div className={s.wrapper}>
            <p>Items per page</p>
            <div className={s.buttons}>
                {buttons.map(button => {
                    return <button key={button} onClick={() => changeItemsCountOnPage(button)} className={itemsCountOnPage === button ? s.active : null}>{button}</button>
                })}
            </div>


        </div>
    )
}

export default ItemsCountSelector;