import React from 'react'
import {Pie, defaults} from "react-chartjs-2"

function PieChart(props) {

    defaults.global.tooltips.enabled = true;
defaults.scale.gridLines.display = false;

const confirmedData = props.confirmedData
const recoveredData = props.recoveredData
const deathData = props.deathData

    const sickPeople = confirmedData - (recoveredData + deathData)

    return (
        <div>
             <Pie
                data={{
                    labels: ["Total Recovered", "Total Deaths", "Total Infected"],
                    datasets: [{
                        data: [recoveredData,deathData,  sickPeople],
                        backgroundColor: [
                            "rgba(6, 128, 0, 0.7)",
                            'rgba(163, 0, 8, 0.7)',
                            "rgba(185, 191, 4, .7)"
                        ],

                    }]
                }}
                height={390}
                width={390}
                options={{
                    maintainAspectRatio: false,
                    scaleShowGridLines : false,
                  scaleShowVerticalLines: false,
                  cutoutPercentage: 0
                }} />
        </div>
    )
}

export default PieChart
