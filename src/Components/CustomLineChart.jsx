import React from 'react'
import { Line } from "react-chartjs-2"

function CustomLineChart(props) {

    const data = {
        labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Yesterday', 'Today'],
        datasets: [
            {
                label: props.head,
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: props.headColor,
                borderCapStyle: 'butt',
                borderDash: [],
                maintainAspectRatio: false,
                scaleShowGridLines: false,
                scaleShowVerticalLines: false,
                cutoutPercentage: 0,
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: props.headColor,
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: props.headColor,
                width: 390,
                height: 500,
                pointHoverBorderColor: props.headColor,
                pointHoverBorderWidth: 2,
                pointRadius: 6,
                pointHitRadius: 20,
                data: props.data,
                beginAtZero: true
            }
        ]
    };

    const options = {
       
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false,
              }    
            }]
          }
        };

    return (
        <>
            <Line data={data}
            options={options}/>
        </>
    )
}

export default CustomLineChart
