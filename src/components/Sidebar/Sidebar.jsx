import React from 'react'
import s from '../../styles/dist/Sidebar.module.css'
import ItemsCountSelector from './ItemsCountSelector';
import Navigation from './Navigation';
import LayoutSelector from './LayoutSelector';
import { useSelector, useDispatch } from 'react-redux';
import { isSidebarActiveAC } from '../../store/reducer';



const Sidebar = () => {
    const isSidebarActive = useSelector(state => state.main.isSidebarActive);
    const dispatch = useDispatch();

    let setClassNameForSidebar = () => {
        if (isSidebarActive) return s.wrapper + ' ' + s.active;
        else return s.wrapper;
    }

    let setClassNameForContainer = () => {
        if (isSidebarActive) return s.container + ' ' + s.active;
        else return s.container;
    }

    return (
        <div className={setClassNameForContainer()} onClick={() => dispatch(isSidebarActiveAC())}>
            <nav className={setClassNameForSidebar()} onClick={(e) => e.stopPropagation()}>
                <Navigation />
                <LayoutSelector />
                <ItemsCountSelector />
            </nav>
        </div>

    )
}

export default Sidebar;