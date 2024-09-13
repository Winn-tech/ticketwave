import React from 'react';
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November'],
   
        datasets: [
            {
                label: 'Sales',
                data: [50, 19, 100, 18, 98, 94, 98, 78,  18, 98, 94, 98, 78],
                backgroundColor: '#66BB6A',
                borderColor: 'rgb(102, 187, 106)',
                borderWidth: 0,
                barThickness: 28,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: false, // This removes the vertical grid lines
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: true, // You can set this to false to remove horizontal lines as well
                },
            },
        },
    };

    return <Bar data={data} options={options} height={100} />;
};

export default BarChart;
