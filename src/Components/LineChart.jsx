import React from 'react'
import { Line } from "react-chartjs-2"

function LineChart(props) {

    const confirmedData = props.confirmedData
    const recoveredData = props.recoveredData
    const deathData = props.deathData

    return (
        <div>
            <Line
                data={{
                    datasets: [
                        {
                            label: ["Total Death"],
                            data: [0, deathData],
                            backgroundColor: 'rgba(201, 6, 35, 1)',
                        },
                        {
                            label: "Total Recovered",
                            data: [0, recoveredData],
                            backgroundColor: 'rgba(15, 191, 39, .8)',
                        },
                        {
                            label: "Confirmed",
                            data: [0, confirmedData],
                            backgroundColor: "rgba(70, 50, 168, 1)",
                        },
                        
                    ],
                }}

                height={390}
                width={390}
                options={{
                    maintainAspectRatio: false,
                    scaleShowGridLines: false,
                    scaleShowVerticalLines: false,
                    cutoutPercentage: 0,
                    scales: {
                        xAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],

                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },

                }} />
        </div>
    )
}

export default LineChart
