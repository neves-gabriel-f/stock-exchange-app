import { useState, useEffect } from 'react';
import '../styles/Header.css'
import { TrendUp, Sun, Moon } from "@phosphor-icons/react"
import axios from 'axios';

const TOKEN = 'mMg4QWYJGuy7Y6W5ME5ZxS'

export default function Header({ setSearchResult, limit }) {
    const [ThemeIcon, setThemeIcon] = useState(Sun)
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }
    const handleSubmitClick = () => {
        axios
          .get(`https://brapi.dev/api/quote/list?&search=${searchTerm}&limit=${limit}&token=${TOKEN}`)
          .then((response) => {
            setSearchResult(response.data);
          })
          .catch((error) => {
            console.error('Erro ao retornar dados da API:', error);
            setSearchResult({});
          });
      };
    const handleKey = (e) => {
        if(e.keyCode === 13) {
            handleSubmitClick()
        }
    }
    const handleSearchReset = () => {
        if(searchTerm === '') {
            handleSubmitClick()
        }
    }
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
        handleSubmitClick()
    }, [limit])

    useEffect(() => {
        setThemeIcon(Sun)
        setToLightTheme()
    }, [])
    return(
        <header>
            <div className="header-wrapper">
                <div className="header-logo-wrapper">
                    <TrendUp size={30} weight="bold" className="header-logo"/>
                    <p>BRLtracker</p>
                </div>
                <div className="header-form-wrapper">
                    <input type="text" placeholder="PETR4" value={searchTerm} onChange={handleSearchTerm} onMouseLeave={handleSearchReset} onKeyDown={handleKey}/>  
                    <button className="button" onClick={handleSubmitClick}>Filtrar</button>
                    <ThemeIcon size={30} weight="bold" className="theme-toggle-button" onClick={toggleTheme}/>
                </div>
            </div>
        </header>
    )
}