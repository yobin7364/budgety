import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {ExpenditureList} from './ExpenditureList';

export const Expenditure = () => {
    const {transactions} = useContext(GlobalContext);
    const expAmount = transactions.filter(items => items.sign === 'exp');
    const totalAmount = transactions.map(item => item.amount).reduce((acc,item) => (acc += item),0);
    return (
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            
            <div className="expenses__list">
                
            {expAmount.map(item => <ExpenditureList key={item.id} id={item.id} text={item.text} amount={item.amount} totalAmount={totalAmount}/>)}
                
            </div>
        </div>
    )
}
