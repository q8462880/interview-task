import {ForexContext} from '../../plan-board/PlanBoard'
import './PlanList.css'
import React, { useContext } from 'react';

function PlanItem({noBorderTop,id,item,changeStatus}){

    const forex =useContext(ForexContext);
    const RMB = 1/forex[item.currencyType].value*item.price
    return (
        <div className={`plan-item-container ${noBorderTop===true ? 'no-border-top': ''}`}>
            <div className="plan-name-tag">
            <input id={id} name="plan-name" type="checkbox" value={item.done} checked={item.done} onClick={()=>{
                changeStatus(item)
            }}></input>
            <label htmlFor={id}>{item.tast}</label>
            </div>
            <span>P{(RMB/forex.RUB.value).toFixed(4)}</span>
            <span>￥{RMB.toFixed(4)}</span>
            <span>${(RMB/forex.USD.value).toFixed(4)}</span>
        </div>
    )
};

export default function PlanList({type,itemList,changeStatus}) {
    const forex =useContext(ForexContext);
    const descObj = {
        plan:{title:'计划:',total:'将要花费:'},
        complete:{title:'已完成:',total:'一共花了:'}
    }
    const stillInPlan = type==='plan'?false:true;
    const filterItemList = itemList.filter(item=>{return item.done===stillInPlan});
    const {title,total} = descObj[type]||descObj.plan;
    const totalRMB = filterItemList.reduce((rmbTotal,item)=>{
        return rmbTotal+(1/forex[item.currencyType].value*item.price);
    },0)
    return (
        <div className="plan-list-container">
        <span>{title}</span>
        {
        filterItemList.map((item,index)=>{
            return <PlanItem 
            key={index} 
            noBorderTop={filterItemList.length>1&&index>0} 
            id={`${title}-${index}`}
            item={item}
            changeStatus={changeStatus}
            ></PlanItem>
        })
        }
        <div className="total-container">
            <span style={{width: '50%'}}>{total}</span>
            <span>P{(totalRMB/forex.RUB.value).toFixed(4)}</span>
            <span>￥{totalRMB.toFixed(4)}</span>
            <span style={{marginRight: '2%'}}>${(totalRMB/forex.USD.value).toFixed(4)}</span>
        </div>
        </div>
    )
}