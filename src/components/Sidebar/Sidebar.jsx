import React from 'react'
import s from '../../styles/dist/Sidebar.module.css'
import ItemsCountSelector from './ItemsCountSelector';
import Navigation from './Navigation';
import { Route } from 'react-router-dom';
import LayoutSelector from './LayoutSelector';
import { useSelector } from 'react-redux';



const Sidebar = () => {
    const isSettingsWindowActive = useSelector(state => state.main.isSettingsWindowActive);

    let giveClassNameForSidebar = () => {
        if (isSettingsWindowActive) return s.wrapper + ' ' + s.active;
        else return s.wrapper;
    }

    return (
        <div>
            <nav className={giveClassNameForSidebar()}>
                <Navigation />
                <Route path='/shop' render={() => <LayoutSelector />} />
                <Route path='/shop' render={() => <ItemsCountSelector />} />
            </nav>
            <div className={s.settings_bg}></div>
        </div>

    )
}

export default Sidebar;