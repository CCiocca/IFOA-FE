
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';

const ForecastChart = () => {
  const resultsForecast = useSelector((state) => state.forecast);

  const data = resultsForecast.list.map((item) => ({
    timestamp: item.dt * 1000,
    temp: item.main.temp,
  }));

  const isSmallScreen = window.innerWidth <= 767;

  return (
    <ResponsiveContainer width="100%" height={isSmallScreen ? 200 : 400} className="responsiveGraphWrap">
      <LineChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
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

        <Line type="monotone" dataKey="temp" stroke="black" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ForecastChart;

