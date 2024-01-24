
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';

const ForecastChart = () => {
  const resultsForecast = useSelector((state) => state.forecast);

  const data = resultsForecast.list.map((item) => ({
    timestamp: item.dt * 1000,
    temp_min: item.main.temp_min,
    // temp_max: item.main.temp_max,
    //commented beacuse the api gave the same min and max for the X hour
  }));

  const isSmallScreen = window.innerWidth <= 767;

  return (
    <ResponsiveContainer className="responsiveGraphWrap">
      <LineChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: -30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" fill="rgba(144, 240, 208, 0.7)"/>
        <XAxis 
            dataKey="timestamp"
            tickFormatter={(timestamp) => {
                const date = new Date(timestamp);
                const formattedDate = date.toLocaleDateString(undefined, { day: 'numeric', month: 'numeric' });
                return formattedDate;
              }}
              tick={{ fill: 'white' }} /> 
        <YAxis tick={{ fill: 'white' }}/>
        <Tooltip />

        <Line type="monotone" dataKey="temp_min" stroke="blue" activeDot={{ r: 8 }} />
        {/* <Line type="monotone" dataKey="temp_max" stroke="red" activeDot={{ r: 8 }} /> */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ForecastChart;

