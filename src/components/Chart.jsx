import React, { useState, useContext } from 'react';
import { ChartBar } from './ChartBar';
import { GlobalContext } from '../context/GlobalState';
import { useEffect } from 'react';

export const Chart = () => {
    const { transactions } = useContext(GlobalContext);

    const [data, setData] = useState(transactions);
    const [title] = useState("My chart bar");

    useEffect(() => {
        setData(transactions)
    }, [transactions]);

    return (

        <div>
            <ChartBar
                data={data}
                title={title}
            />
        </div>
    )

}
