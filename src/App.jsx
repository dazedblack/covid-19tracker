import React from 'react'
import MainPage from "./Components/MainPage"
import PieChart from "./Components/PieChart"
import LineChart from "./Components/LineChart"
import CustomLineChart from "./Components/CustomLineChart"
import './style.css'
import axios from "./axios"
import { useEffect, useState } from "react"

export default function App() {

    const [totalConfirmed, setTotalConfirmed] = useState(0)
    const [totalRecovered, setTotalRecovered] = useState(0)
    const [totalDeaths, setTotalDeaths] = useState(0)
    const [loading, setLoading] = useState(false)

    const [newConfirmed, setNewConfirmed] = useState(0)
    const [newRecovered, setNewRecovered] = useState(0)
    const [newDeaths, setNewDeaths] = useState(0)
    const [coronaCountAr, setCoronaCountAr] = useState([])
    const [coronaRecoveredAr, setCoronaRecoveredAr] = useState([])
    const [coronaDeathAr, setCoronaDeathAr] = useState([])
    const [coronaActiveAr, setCoronaActiveAr] = useState([])
    const [days] = useState(7)


    const cases = "Last 7 Day Cases"
    const casesColor = "rgb(116, 116, 220)"

    const alltime = "All Time's"
    const today = "Today's"

    const recoverd = "Last 7 Day Recovered People"
    const recoverdCol = "rgb(140, 220, 116)"

    const death = "Last 7 Day Death"
    const deathCol = "rgb(233, 57, 57)"

    const active = "Last 7 Day Active Coronavirus People"
    const activeCol = "rgb(233, 233, 57)"

    /*  const getCoronaReportByDate = () => {
          //axios.get(`country/turkey?from=${from}T00:00:00Z&to=${to}T00:00:00Z`) - statik olarak aldım çünkü data yoktu.
          axios.get(`country/turkey?from=2020-12-26T00:00:00Z&to=2021-01-05T00:00:00Z`)
          .then(res=> {
              const yAxisCoronaCount = res.data.map(d => d.Confirmed)
              setCoronaCountAr(yAxisCoronaCount)
              
          })
          .catch(error => {
              console.log(error)
          })
      } */


    /* const formatDate = (date) => {
         const d = new Date(date);
         const year = d.getFullYear();
         const month = `0${d.getMonth() +1}`.slice(-2)
         const _date = d.getDate();
         return `${year}-${month}-${_date}` 
     }
 
     const d = new Date();
     const to = formatDate(d);
     const from = formatDate(d.setDate(d.getDate() - 7)) */

    useEffect(() => {

        setLoading(true);
        axios.get(`/summary`)
            .then(res => {
                setLoading(false)

                if (res.status === 200) {
                    var turkey = res.data.Countries[177]
                    setTotalConfirmed(turkey.TotalConfirmed)
                    setTotalRecovered(turkey.TotalRecovered)
                    setTotalDeaths(turkey.TotalDeaths)

                    setNewConfirmed(turkey.NewConfirmed)
                    setNewRecovered(turkey.NewRecovered)
                    setNewDeaths(turkey.NewDeaths)
                }
            })
            .catch(error => {
                console.log(error)
            })

        axios.get(`country/turkey?from=2020-12-26T00:00:00Z&to=2021-01-05T00:00:00Z`)
            .then(res => {
                const yAxisCoronaCount = res.data.map(d => d.Confirmed)
                setCoronaCountAr(yAxisCoronaCount)

                const yAxisRecoveredCount = res.data.map(d => d.Recovered)
                setCoronaRecoveredAr(yAxisRecoveredCount)

                const yAxisDeathCount = res.data.map(d=> d.Deaths)
                setCoronaDeathAr(yAxisDeathCount)

                const yAxisActiveCount = res.data.map(d=> d.Active)
                setCoronaActiveAr(yAxisActiveCount)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    if (loading) {
        return <p>Data is loading...</p>
    }


    return (
        <>
            <h1 className="d-flex justify-content-center" style={{marginTop: "60"}}>Turkey Coronavirus Tracker</h1>
            <MainPage confirmedData={totalConfirmed}
                recoveredData={totalRecovered}
                deathData={totalDeaths}
                text={alltime} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 ">
                        <PieChart confirmedData={totalConfirmed}
                            recoveredData={totalRecovered}
                            deathData={totalDeaths}
                        />
                    </div>
                    <div className="col-lg-6">
                        <LineChart confirmedData={totalConfirmed}
                            recoveredData={totalRecovered}
                            deathData={totalDeaths} />
                    </div>

                    <h2 className="d-flex justify-content-center" style={{ marginTop: "50px" }}>Today</h2>

                    <MainPage confirmedData={newConfirmed}
                        recoveredData={newRecovered}
                        deathData={newDeaths}
                        text={today} />
                </div>
                <h1 className="d-flex justify-content-center">Last {days} Days Data</h1>
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <CustomLineChart data={coronaCountAr}
                            head={cases}
                            headColor={casesColor} />
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <CustomLineChart data={coronaRecoveredAr}
                            head={recoverd}
                            headColor={recoverdCol} />
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <CustomLineChart data={coronaDeathAr}
                            head={death}
                            headColor={deathCol} />
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <CustomLineChart data={coronaActiveAr}
                            head={active}
                            headColor={activeCol} />
                    </div>
                    
                </div>
            </div>
        </>
    )
}