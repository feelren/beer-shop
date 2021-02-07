import React from 'react'
import s from '../../styles/dist/Item.module.css'

const Item = (props) => {
    return (
        <div className={s.wrapper}>
            {props.name}
        </div>
    )
}

export default Item;