import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPageTC } from '../../store/reducer';
import s from '../../styles/dist/PageSelector.module.css'

const PageSelector = () => {
    const totalPagesCount = useSelector(state => state.main.totalPagesCount);
    const currentPage = useSelector(state => state.main.currentPage);
    const itemsCountOnPage = useSelector(state => state.main.itemsCountOnPage);
    const dispatch = useDispatch();

    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.wrapper}>
            {pages.map(page => {
                return <div className={(currentPage === page) ? s.active : undefined} onClick={() => dispatch(changeCurrentPageTC(page, itemsCountOnPage))} key={page}>{page}</div>
            })}
        </div >
    )
}

export default PageSelector;