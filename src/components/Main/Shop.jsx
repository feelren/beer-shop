import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setItemsTC, getItemsTotalCountTC, setTotalPagesCountAC } from '../../store/reducer';
import PageSelector from './PageSelector';
import ItemsList from './ItemsList';
import ItemsGrid from './ItemsGrid';

const Shop = () => {
    const dispatch = useDispatch();
    const pages = useSelector(state => state.main.totalPagesCount);
    const itemsTotalCount = useSelector(state => state.main.itemsTotalCount);
    const itemsLayout = useSelector(state => state.main.itemsLayout);
    const items = useSelector(state => state.main.items);


    useEffect(
        () => {
            dispatch(setItemsTC());
            dispatch(getItemsTotalCountTC());
        }, [dispatch]
    );


    const itemsCountOnPage = useSelector(state => state.main.itemsCountOnPage);
    useEffect(() => {
        let pagesCount = Math.ceil(itemsTotalCount / itemsCountOnPage);
        dispatch(setTotalPagesCountAC(pagesCount))
    }, [dispatch, itemsTotalCount, itemsCountOnPage]);


    return (
        <main>
            <h1>Shop</h1>
            {pages ? <PageSelector /> : <div>Загружаем страницы..</div>}

            {itemsLayout === 'list' ? <ItemsList items={items} /> : <ItemsGrid items={items} />}
            {pages ? <PageSelector /> : <div>Загружаем страницы..</div>}
            {itemsTotalCount ? <div>Всего: {itemsTotalCount}</div> : <div>Проверяем количество товаров..</div>}
        </main>
    )
}

export default Shop;