import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const ExpenditureList = (props) => {
    const expPercentage = (props.amount/props.totalAmount) * 100;
    const {deleteTransaction} = useContext(GlobalContext);

    const onDelete = () => {
        deleteTransaction(props.id);
    }

    return (
        <div className="item clearfix">
            <div className="item__description">{props.text}</div>
            <div className="right clearfix">
                <div className="item__value">- {props.amount.toFixed(2)}</div>
                <div className="item__percentage">{expPercentage.toFixed(1)}%</div>
                <div className="item__delete">
                    <button className="item__delete--btn" onClick={onDelete}><i className="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    )
}
