import React from 'react'
import AreaChart from '../Charts/AreaChart'
import VerticalBarChart from '../Charts/VerticalBarChart'
import DoughnutChart from '../Charts/DoughnutChart'
import LineChart from '../Charts/LineChart'
import HorizontalBarChart from '../Charts/HorizontalBarChart'
import "./Charts.css";




const Charts = () => {


  return (
    <div className="charts">
      <div>
        <HorizontalBarChart />
      </div>
      <div>
        <VerticalBarChart />
      </div>
      <div>
        <LineChart />
      </div>
      <div >
        <AreaChart  />
      </div>
    </div>
  )
}

export default Charts