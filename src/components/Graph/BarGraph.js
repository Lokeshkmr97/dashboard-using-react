import React from 'react'
import 
 { BarChart, Bar, XAxis, YAxis,Legend,Tooltip,ResponsiveContainer } 
 from 'recharts';
 import {data} from '../DataContext/GraphData';

const BarGraph = () => {
  return (
    <div>
    <ResponsiveContainer width="100%" height="100%">
    
    <BarChart
    width={500}
    height={250}
    data={data}
    margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
    }}
    >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Monthly Earning" fill="#5a32ea" />
        </BarChart>
    </ResponsiveContainer>

    </div>
  )
}

export default BarGraph
