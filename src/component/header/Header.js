import React from 'react'
import bear from '../../resources/bear.png';
import effect from '../../resources/effect.png';
import settings from '../../resources/settings.png';
import exit from '../../resources/exit.png';
import './Header.scss'

export const Header = () => {
    return (
        <header className="page-header">
            <div className="page-header__color">
                <button className="page-header__assessment">ЭКСПЕРТНАЯ ОЦЕНКА</button>
                <button className="page-header__analytics">АНАЛИТИКА</button>
                <button className="page-header__settings"><img className="page-header__settings" src={settings}/>
                </button>
                <button className="page-header__exit"><img className="page-header__exit" src={exit}/></button>
            </div>
            <img className="page-header__effect" src={effect}/>
            <img className="page-header__bear" src={bear}/>
        </header>
    )
}
