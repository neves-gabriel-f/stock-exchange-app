import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import StockCard from './StockCard'
import { CaretDown } from "@phosphor-icons/react";
import '../styles/StockCardList.css'


const TOKEN = 'mMg4QWYJGuy7Y6W5ME5ZxS'

export default function StockCardList() {

    const [stockData, setStockData] = useState({})
    const [limit, setLimit] = useState(70)
    const cardListContainer = useRef()

    const handleLimit = () => {
        setLimit(limit + 35)
        cardListContainer.current.scrollIntoView({ behavior: "smooth", block: "end" })
    }

    useEffect(() => {
        axios.get(`https://brapi.dev/api/quote/list?&limit=${limit}&token=${TOKEN}`)
            .then((response) => {
                console.log(response.data)
                setStockData(response.data)
            })
    }, [limit])

    return (
        <main ref={cardListContainer}>
            <div className="main-description">
                <h2>Cotação de ações</h2>
                <p>Veja todas as cotações disponíveis oferecidas pela plataforma <a href="https://brapi.dev/" target="_blank">brapi</a>.</p>
            </div>
            <div className="stock-card-list-wrapper">
                {stockData.stocks?.map((stock) => (
                    <StockCard
                        key={stock.stock}
                        name={stock.name}
                        stock={stock.stock}
                        closePrice={stock.close}
                        change={stock.change}
                        logo={stock.logo}
                    />
                ))}
            </div>
            <div className="stock-card-list-see-more-wrapper">
                <button className="see-more-btn" onClick={handleLimit}>
                    Carregar mais ações
                    <CaretDown size={16} color="var(--text_color)" weight="fill" className="see-more-btn-icon" />
                </button>
            </div>
        </main>
    )
}