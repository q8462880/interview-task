import "./PlanList.css";
import React from "react";

function PlanItem({ forex, noBorderTop, id, item, changeStatus }) {
    const RMB = (1 / forex[item.currencyType].value) * item.price;
    return (
        <div
            className={`plan-item-container ${
                noBorderTop === true ? "no-border-top" : ""
            }`}
        >
            <div className="plan-name-tag">
                <input
                    id={id}
                    name="plan-name"
                    type="checkbox"
                    value={item.done}
                    checked={item.done}
                    onChange={() => {}}
                    onClick={() => {
                        changeStatus(id);
                    }}
                ></input>
                <label htmlFor={id}>{item.task}</label>
            </div>
            <span>P{(RMB * forex.RUB.value).toFixed(4)}</span>
            <span>￥{RMB.toFixed(4)}</span>
            <span>${(RMB * forex.USD.value).toFixed(4)}</span>
        </div>
    );
}

export default function PlanList({ forex, type, itemList, changeStatus }) {
    const descObj = {
        plan: { title: "计划:", total: "将要花费:" },
        complete: { title: "已完成:", total: "一共花了:" },
    };
    const stillInPlan = type === "plan" ? false : true;
    const filterItemList = itemList.filter((item) => {
        return item.done === stillInPlan;
    });
    const { title, total } = descObj[type] || descObj.plan;
    const totalRMB = filterItemList.reduce((rmbTotal, item) => {
        return rmbTotal + (1 / forex[item.currencyType].value) * item.price;
    }, 0);
    return (
        <div className="plan-list-container">
            <span>{title}</span>
            {filterItemList.map((item, index) => {
                return (
                    <PlanItem
                        forex={forex}
                        key={`${item.task}-${item.price}-${item.currencyType}`}
                        noBorderTop={filterItemList.length > 1 && index > 0}
                        id={`${item.task}-${item.price}-${item.currencyType}`}
                        item={item}
                        changeStatus={changeStatus}
                    ></PlanItem>
                );
            })}
            <div className="total-container">
                <span style={{ width: "50%" }}>{total}</span>
                <span>P{(totalRMB / forex.RUB.value).toFixed(4)}</span>
                <span>￥{totalRMB.toFixed(4)}</span>
                <span style={{ marginRight: "2%" }}>
                    ${(totalRMB / forex.USD.value).toFixed(4)}
                </span>
            </div>
        </div>
    );
}
