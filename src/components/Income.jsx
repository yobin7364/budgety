import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {IncomeList} from './IncomeList';

export const Income = () => {
    const {transactions} = useContext(GlobalContext);
    const incomeAmount = transactions.filter(items => items.sign === 'inc');

    return (
        <div className="income">
            <h2 className="icome__title">Income</h2>
            
            <div className="income__list">
                
                {incomeAmount.map(item => <IncomeList key={item.id} id={item.id} text={item.text} amount={item.amount}/>)}

            </div>
        </div>
    )
}
