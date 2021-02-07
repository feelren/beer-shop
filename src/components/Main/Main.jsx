import React from 'react'
import s from '../../styles/dist/Main.module.css'
import ItemsContainer from './ItemsContainer';
import LayoutSelector from './LayoutSelector';

const Main = () => {
    return (
        <div className={s.wrapper}>
            <LayoutSelector />
            <ItemsContainer />
            <div>PageSelector</div>
        </div>
    )
}

export default Main;