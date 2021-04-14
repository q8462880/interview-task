/** @format */

import "./PlanBoard.css";
import ExchangeRate from "../components/exchange-rate/ExchangeRate";
import OptionSelect from "../components/option-select/OptionSelect";
import PlanList from "../components/plan-list/PlanList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlanBoardStatus } from "./planBoardConst";
export default function PlanBoard() {
    const [forex, setForex] = useState(PlanBoardStatus.forex);
    const [planList, setPlanList] = useState(PlanBoardStatus.Planning);
    useEffect(() => {
        (async () => {
            const result = await axios("https://api.globus.furniture/forex");
            setForex(result.data);
        })();
    }, []);
    const addPlan = (planInfo) => {
        if (planInfo.task === "" || planInfo.currencyType === "") {
            alert("not allow empty selected");
        } else {
            setPlanList([...planList, planInfo]);
        }
    };
    const changeStatus = (id) => {
        let newPlanList = [...planList];
        newPlanList = planList.map((item) => {
            if (item.id === id) {
                return { ...item, done: !item.done };
            } else {
                return item;
            }
        });
        setPlanList(newPlanList);
    };
    return (
        <div className="plan-board-container">
            <OptionSelect forex={forex} addPlan={addPlan}></OptionSelect>
            <ExchangeRate forex={forex}></ExchangeRate>
            <PlanList
                forex={forex}
                type="plan"
                itemList={planList}
                changeStatus={changeStatus}
            ></PlanList>
            <PlanList
                forex={forex}
                type="complete"
                itemList={planList}
                changeStatus={changeStatus}
            ></PlanList>
        </div>
    );
}
