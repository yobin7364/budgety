import React from 'react';
import { Line } from "react-chartjs-2";

export const ChartBar = (props) => {

    const data = {
        labels: props.data.map(d => d.text),
        datasets: [
            {
                label: props.title,
                data: props.data.map(d => d.amount),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                fontSize: 30
            }
        ]
    };

    const options = {

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontStyle: "bold",
                    callback: (value, index, values) => "Rs " + value
                }
            }
            ],
            xAxes: [{
                ticks: {
                    fontStyle: "bold"
                }
            }]
        }

    }

    const ledgent = {
        display: true,
        labels: {
            fontColor: "#323130",
            fontSize: 30
        }
    }


    return (
        <div>
            <Line data={data} legend={ledgent} options={options} />
        </div>
    )

}
