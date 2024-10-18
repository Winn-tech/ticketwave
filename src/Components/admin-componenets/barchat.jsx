import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { environment } from '../../environment';
import { Bars } from 'react-loader-spinner';

// Register the required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({year, filtdate}) => {
    // const data = {
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    //         'August', 'September', 'October', 'November', 'December'],
   
    //     datasets: [
    //         {
    //             label: 'Sales',
    //             data: [50, 19, 100, 18, 98, 94, 98, 78,  18, 98, 94, 98, 78],
    //             backgroundColor: '#66BB6A',
    //             borderColor: 'rgb(102, 187, 106)',
    //             borderWidth: 0,
    //             barThickness: 28,
    //         },
    //     ],
    // };
    
    const [chartData, setChartData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Sales',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Initial empty dataset
                backgroundColor: '#66BB6A',
                borderColor: 'rgb(102, 187, 106)',
                borderWidth: 0,
                barThickness: 28,
            },
        ],
    });
    const userInfo = JSON.parse(localStorage.UserInfo);
    const [loading, setLoading] = useState(true);


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

    useEffect(() => {
        console.log(filtdate, 'admin bar', year);
        const getChartData = async () => {
            try {
                setLoading(true);
                const result = await axios.get(`${environment.appUrl}monthly_registration/${year}`, {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                });
                setLoading(false);
                const registrations = result.data.registrations_per_month;
                
                // Update the chart data with the fetched data
                setChartData(prevData => ({
                    ...prevData,
                    datasets: [
                        {
                            ...prevData.datasets[0],
                            data: Object.values(registrations), // Set data from the API
                        },
                    ],
                }));
            } catch (error) {
                console.log(error);
            }
        };

        getChartData();
    }, [filtdate, year]);

    return(
        <> 
            {loading ? (
            <section className='mainLoading'>
            <Bars color="#66bb6a" height="40" /> 
            </section>
          ) : <Bar data={chartData} options={options} height={100} />}
        </>
    ) ;
};

export default BarChart;
