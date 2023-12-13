import { useState, useEffect } from 'react';
import '../styles/Header.css'
import { TrendUp, Sun, Moon } from "@phosphor-icons/react";

export default function Header() {
    const [ThemeIcon, setThemeIcon] = useState(Sun)
    
    const setToDarkTheme = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark')
    }
    const setToLightTheme = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
    }
    const toggleTheme = (e) => {
        if(document.querySelector('body').getAttribute('data-theme') === 'light') {
            setToDarkTheme()
            setThemeIcon(Moon)
        }
        else {
            setToLightTheme()
            setThemeIcon(Sun)
        }
    }
    useEffect(() => {
        setThemeIcon(Sun)
        setToLightTheme()
    }, [])
    
    return(
        <header>
            <div className="header-wrapper">
                <div className="header-logo-wrapper">
                    <TrendUp size={30} weight="bold" className="header-logo"/>
                    BRLtracker
                </div>
                <div className="header-form-wrapper">
                    <input type="text" placeholder="PETR4"/>  
                    <button className="button">Filtrar</button>
                    <ThemeIcon size={30} weight="bold" className="theme-toggle-button" onClick={toggleTheme}/>
                </div>
            </div>
        </header>
    )
}