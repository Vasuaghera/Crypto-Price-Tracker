import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="100%"
      legendToggle
      options={{
        chartArea: {
          width: '80%',
          height: '70%',
        },
        hAxis: {
          title: 'Date',
          titleTextStyle: {
            color: '#ffffff',
            fontSize: 14,
          },
          textStyle: {
            color: '#ffffff',
            fontSize: 12,
          },
          gridlines: {
            color: '#444',
          },
        },
        vAxis: {
          title: 'Prices',
          titleTextStyle: {
            color: '#ffffff',
            fontSize: 14,
          },
          textStyle: {
            color: '#ffffff',
            fontSize: 12,
          },
          gridlines: {
            color: '#444',
          },
        },
        colors: ['#0db29b'], 
        lineWidth: 3,
        pointSize: 5,
        backgroundColor: '#1e1e1e', 
        tooltip: {
          trigger: 'focus',
          textStyle: {
            color: '#0db29b', 
          },
        },
        legend: {
          textStyle: {
            color: '#ffffff',
          },
        },
        series: {
          0: {
            color: '#0db29b',
            lineWidth: 3,
          },
        },
      }}
    />
  );
};

export default LineChart;
