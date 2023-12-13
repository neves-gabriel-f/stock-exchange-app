import '../styles/StockCard.css'
import { ArrowUp, ArrowDown } from "@phosphor-icons/react";

export default function StockCard({ name, stock, closePrice, change, logo }) {
    return (
        <div key={stock.stock} className="stock-card-wrapper light">
            <h3 className="stock-card-header">
                {stock}
                <img src={logo} alt={name} className="stock-header-card-img" />
            </h3>
            <div className="stock-card-stock-name-wrapper">
                <p>
                    {name}
                </p>
            </div>
            <div className="stock-card-close-and-change-wrapper">
                <p>
                    {parseFloat(closePrice).toFixed(2)} BRL
                </p>
                <p>
                    {change < 0 ? <ArrowDown size={14} weight="fill" className="change-icon change-down" /> : <ArrowUp size={14} weight="fill" className="change-icon change-up" />}
                    {Math.abs(parseFloat(change)).toFixed(2)}
                    %
                </p>
            </div>
        </div>
    )
}