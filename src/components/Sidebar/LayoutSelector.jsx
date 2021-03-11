import React from 'react'
import s from '../../styles/dist/LayoutSelector.module.css'
import rows from '../../images/Main/layout-rows.png'
import grid from '../../images/Main/layout-grid.png'
import { useDispatch, useSelector } from 'react-redux'
import { changeLayoutToGridAC, changeLayoutToListAC } from '../../store/reducer'

const LayoutSelector = () => {
    const dispatch = useDispatch();
    const itemsLayout = useSelector(state => state.main.itemsLayout)


    return (
        <div className={s.wrapper}>
            <p>Shop layout</p>
            <div className={s.selector}>
                <img className={itemsLayout === 'grid' ? s.active : null} src={grid} alt="grid" onClick={() => dispatch(changeLayoutToGridAC())} />
                <img className={itemsLayout === 'list' ? s.active : null} src={rows} alt="rows" onClick={() => dispatch(changeLayoutToListAC())} />
            </div>
        </div>
    )
}

export default LayoutSelector;

