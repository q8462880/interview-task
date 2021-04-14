import "./ExchangeRate.css";
import React from "react";


export default function ExchangeRate({forex}) {
    return (
        <div className="rate-container">
            <span>{forex.RUB.value.toFixed(4)} ₽/￥</span>
            <span>{(forex.RUB.value / forex.USD.value).toFixed(4)} ₽/$</span>
            <span>{(1 / forex.USD.value).toFixed(4)} ￥/$</span>
        </div>
    );
}
