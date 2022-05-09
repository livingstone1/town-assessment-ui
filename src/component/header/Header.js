import React from 'react'
import bear from '../../resources/bear.png';
import effect from '../../resources/effect.png';
import settings from '../../resources/settings.png';
import exit from '../../resources/exit.png';
import './Header.scss'

export default function Header() {
    return (
        <header className="page-header">
            <div className="page-header__color">
                <div className='logo'>
                    <img className="page-header__effect" src={effect} alt=""/>
                    <img className="page-header__bear" src={bear} alt=""/>
                </div>
                <div className='routes'>
                    <button className="page-header__assessment">ЭКСПЕРТНАЯ ОЦЕНКА</button>
                    <button className="page-header__analytics">АНАЛИТИКА</button>
                </div>
                <div className='actions'>
                    <button className="page-header__settings"><img src={settings} alt=""/></button>
                    <button className="page-header__exit"><img src={exit} alt=""/></button>
                </div>
            </div>
        </header>
    )
}
