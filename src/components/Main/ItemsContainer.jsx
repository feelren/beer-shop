
import React, { useEffect, useState } from 'react'
import s from '../../styles/dist/ItemsContainer.module.css'
import Item from './Item';

const ItemsContainer = () => {
    let [names, setNames] = useState([]);

    useEffect(() => {
        let getNamesData = async () => {
            let response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=8');
            if (response.ok) {
                let json = await response.json();
                setNames(json.map(item => item.name))
            }
        }
        getNamesData();
    });


    return (
        <div className={s.wrapper}>
            {
                names.map(name => {
                    return (
                        <Item name={name} />
                    )
                })
            }
        </div>
    )
}

export default ItemsContainer;