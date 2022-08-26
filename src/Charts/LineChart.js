import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        
    },
};

// let gradient = ctx.createLinearGradient(0,0,0,400);
// gradient.addColorStop(0, "rgba(52,123,21,1");
// gradient.addColorStop(1, "rgba(0,210,255,0.3");

const labels = ['January', 'February', 'March', 'April','May'];

export const data = {
    labels ,
    datasets: [
        {
            label: 'Sales',
            data: ['60',"72","55","85","75"],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132,0.5)',
            borderWidth: 5
        },
        {
            label: 'Revenue',
            data: [19,32,55,45,85],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderWidth: 5
        },
    ],
};

const LineChart = () => {
    return (
        <div className='chart'>
            <h2>Line Chart</h2>
            <Line options={options} data={data} />
        </div>
    )
}

export default LineChart