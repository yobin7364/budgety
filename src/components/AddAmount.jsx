import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddAmount = () => {
    const [sign,setSign] = useState('inc');
    const [text,setText] = useState('');
    const [amount,setAmount] = useState('');
    const {addTransaction} = useContext(GlobalContext);

    const submit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            sign,
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setSign('inc');
        setText('');
        setAmount('');
    }

    return (
        <div className="add">
            <form className="add__container" onSubmit={submit}>
                <select className={sign === 'inc' ? "add__type" : "add__type red-focus"} value={sign} onChange={(e) => setSign(e.target.value)}>
                    <option value="inc">+</option>
                    <option value="exp">-</option>
                </select>
                <input type="text" className={sign === 'inc' ? "add__description" : "add__description red-focus"} placeholder="Add description" value={text} onChange={(e) => setText(e.target.value)}/>
                <input type="number" className={sign === 'inc' ? "add__value" : "add__value red-focus"}  placeholder="Value" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <button className={sign === 'inc' ? "add__btn" : "add__btn red"} type="submit"><i className="ion-ios-checkmark-outline" ></i></button>
            </form>
        </div>
    )
}
