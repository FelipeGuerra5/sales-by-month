import React from 'react';
import { LineChart, Line, ReferenceLine, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Label, LabelList } from 'recharts';
import Styles from '../App.module.css'

const data = [
    { month: "January", sales: 1200 },
    { month: "February", sales: 1450 },
    { month: "March", sales: 1100 },
    { month: "April", sales: 1300 },
    { month: "May", sales: 1120 },
    { month: "June", sales: 1050 },
    { month: "July", sales: 1300 },
    { month: "August", sales: 1400 },
    { month: "September", sales: 1150 },
    { month: "October", sales: 1250 },
    { month: "November", sales: 1100 },
    { month: "December", sales: 1350 }
]


const LineGraph = ({ data }) => {
    const yValuesForHorizontalLines = [400, 800, 1200, 1600, 2000]; // Add any Y-axis values for horizontal lines

    return (
        <div>
            <h2 className={Styles.graph_title}>Sales By Month for:</h2>
            <ResponsiveContainer width="100%" height={450} align-content="center">
                <LineChart data={data}>
                    {yValuesForHorizontalLines.map((yValue, index) => (
                        <ReferenceLine key={index} y={yValue} stroke="#CCC" />
                    ))}
                    <XAxis dataKey="month" />
                    <YAxis Line="false" />
                    <Tooltip />
                    <Legend />
                    <Line type="linear" dataKey="sales" name="Sales" stroke="#00008B" activeDot="false" />
                    <Label value="Sales By Month for:" offset={0} position="Top" />
                    <LabelList dataKey="sales" position="top" />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineGraph;
