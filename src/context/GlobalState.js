import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    transactions: [
        { id: 1, sign: 'inc', text: 'Flower', amount: 20 },
        { id: 2, sign: 'inc', text: 'Salary', amount: 300 },
        { id: 3, sign: 'exp', text: 'Book', amount: 10.01 },
        { id: 4, sign: 'exp', text: 'Camera', amount: 150 }
    ],
    clearData: {
        text: '',
        amount: ''
    }
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //action
    const addTransaction = (transactions) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transactions
        });
    }

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
    }}>

        {children}

    </GlobalContext.Provider>

    )
}