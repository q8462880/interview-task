import "./OptionSelect.css";
import React, { useState } from "react";
function Task({ task, setTast }) {
    return (
        <input
            className="task-input"
            placeholder="任务"
            value={task}
            onChange={(e) => {
                console.log(e);
                setTast(e.target.value);
            }}
        ></input>
    );
}

function Price({ price, setPrice }) {
    return (
        <input
            type="number"
            className="price-input"
            placeholder="价格"
            value={price}
            onChange={(e) => {
                setPrice(e.target.value);
            }}
        ></input>
    );
}

function CurrencySelect({ forex, currencyType, setCurrencyType }) {
    return (
        <select
            className="curency-select"
            required
            value={currencyType}
            onChange={(e) => {
                setCurrencyType(e.target.value);
            }}
        >
            <option value="" disabled defaultValue>
                货币类型
            </option>
            {Object.keys(forex).map((item, index) => {
                return (
                    <option key={index} value={item}>
                        {item}
                    </option>
                );
            })}
        </select>
    );
}

export default function OptionSelect({ forex, addPlan }) {
    const [task, setTast] = useState("");
    const [price, setPrice] = useState(0);
    const [currencyType, setCurrencyType] = useState("");
    return (
        <div className="option-container">
            <Task task={task} setTast={setTast}></Task>
            <Price price={price} setPrice={setPrice}></Price>
            <CurrencySelect
                forex={forex}
                currencyType={currencyType}
                setCurrencyType={setCurrencyType}
            ></CurrencySelect>
            <button
                className="add-button"
                onClick={() => {
                    setTast("");
                    setPrice(0);
                    setCurrencyType("");
                    addPlan({
                        id: `${task}-${price}-${currencyType}`,
                        task,
                        price,
                        currencyType,
                        done: false,
                    });
                }}
            >
                添加
            </button>
        </div>
    );
}
