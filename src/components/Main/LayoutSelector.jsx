import React from 'react'
import s from '../../styles/dist/LayoutSelector.module.css'
import rows from '../../images/Main/layout-rows.png'
import grid from '../../images/Main/layout-grid.png'

const LayoutSelector = () => {
    return (
        <div className={s.wrapper}>
            <img src={rows} alt="rows" />
            <img src={grid} alt="rows" />
        </div>
    )
}

export default LayoutSelector;