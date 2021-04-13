import "./ExchangeRate.css";
import React, { useContext } from "react";
import { ForexContext } from "../../plan-board/PlanBoard";

export default function ExchangeRate() {
    const forex = useContext(ForexContext);
    return (
        <div className="rate-container">
            <span>{forex.RUB.value.toFixed(4)} ₽/￥</span>
            <span>{(forex.RUB.value / forex.USD.value).toFixed(4)} ₽/$</span>
            <span>{(1 / forex.USD.value).toFixed(4)} ￥/$</span>
        </div>
    );
}
