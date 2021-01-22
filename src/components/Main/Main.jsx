import React from 'react'
import s from '../../styles/dist/Main.module.css'
import LayoutSelector from './LayoutSelector';

const Main = () => {
    return (
        <div className={s.wrapper}>
            <LayoutSelector />
            <div>Items</div>
            <div>PageSelector</div>
        </div>
    )
}

export default Main;