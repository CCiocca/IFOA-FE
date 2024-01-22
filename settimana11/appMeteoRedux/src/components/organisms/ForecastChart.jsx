// import React, { PureComponent } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { useSelector } from "react-redux"

// const ForecastChart = () => {

//     const resultsForecast = useSelector((state)=>state.forecast) //this rescues the fetch data stored in the store


//     const data = resultsForecast.list.map((item) => ({
//             time : new Date(item.dt * 1000).toLocaleTimeString(), //this is used to format the time
//             temp : item.main.temp
//             }
//     ))    //this maps the previous array "list" to give back an array that contains objs structured as below

//     //now data are used to populate the graph
//     return (
//     <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="time" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
//         </LineChart>
//     </ResponsiveContainer>
//       );
//   }

//   export default ForecastChart



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
    <ResponsiveContainer width="100%" height={isSmallScreen ? 300 : 400} className="responsiveGraphWrap">
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
;
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



//   const data = [
//     {
//       name: {resultsForecast.list[i].dt},
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];