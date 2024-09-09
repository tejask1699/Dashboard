import React, { useState } from 'react'
import Chart from 'react-apexcharts'
export default function ReportCharts() {
    const [data, setData] = useState({
        series: [
            {
                name: 'Sales',
                data: [31, 40, 28, 51, 42, 82, 56]
            },
            {
                name: 'Revenue',
                data: [11, 32, 45, 32, 34, 52, 41]
            },
            {
                name: 'Customers',
                data: [15, 11, 32, 34, 52, 41]
            }
        ],
        options: {
            chart: {
                type: 'area',
                height: 350,
                toolbar: {
                    show: false
                },
            },
            markers: {
                size: 4,
            },
            colors:['#4154f1', '#2eca6a', '#ff771d'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.3,
                    opacityTo: 0.4,
                    stops: [0, 90, 100]
                },
            },
            dataLabels:{
                enable:false
            },
            stroke:{
                curve:'smooth',
                width:2,
            },
            xaxis: {
                type: 'datetime',
                categories:[
                    '2024-03-31T00:00:00.000Z',
                    '2024-03-31T01:30:00.000Z',
                    '2024-03-31T02:30:00.000Z',
                    '2024-03-31T03:30:00.000Z',
                    '2024-03-31T04:30:00.000Z',
                    '2024-03-31T05:30:00.000Z',
                    '2024-03-31T06:30:00.000Z',
                ]
            },
           
            tooltip: {
                x:{
                    format:'dd/MM/yy HH:mm'
                }
            },
            
        },
    }
    )
    const chartData = () =>{
        fetch('http://localhost:5000/chart')
        .then(res => res.json())
        .then(data =>{
            setData(data)
        })
        .catch(e => console.log(e.message))
    };
    return (
        <div>
            <Chart
            options={data.options}
            series={data.series}
            type={data.options.chart.type}
            height={data.options.chart.height}
            />
        </div>
    )
}
