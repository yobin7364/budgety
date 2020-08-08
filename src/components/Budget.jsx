import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Budget = () => {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthNumber = new Date().getMonth();
    let month = monthNames[monthNumber];
    const { transactions } = useContext(GlobalContext);

    const totalIncome = transactions.filter(items => items.sign === 'inc').map(item => item.amount).reduce((acc, item) => (acc += item), 0);

    const totalExp = transactions.filter(items => items.sign === 'exp').map(item => item.amount).reduce((acc, item) => (acc += item), 0);

    const budget = totalIncome - totalExp;

    const budgetPercentage = (totalExp / (totalExp + totalIncome)) * 100;

    return (
        <div className="top">
            <div className="budget">
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">{month}</span>:
                </div>

                <div className="budget__value">{totalIncome >= totalExp ? '+' : '-'} {Math.abs(budget.toFixed(2))}</div>

                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income</div>
                    <div className="right">
                        <div className="budget__income--value">+ {totalIncome.toFixed(2)}</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                    </div>
                </div>

                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">- {totalExp.toFixed(2)}</div>
                        <div className="budget__expenses--percentage">{budgetPercentage.toFixed(2)}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
