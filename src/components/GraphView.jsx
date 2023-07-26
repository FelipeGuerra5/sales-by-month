import React from 'react'
import { LineChart, Line, ReferenceLine, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Label, LabelList } from 'recharts'
import Styles from '../App.module.css'

const LineGraph = ({ data }) => {
    const maxVal = data.reduce((max, { sales }) => sales > max ? sales : max, 0) * 1.1
    const step = Math.round(maxVal / 5)
    let acc = step
    const yValuesForHorizontalLines = []
    for (let i = 0; i < 5; i++) {
        yValuesForHorizontalLines.push(acc)
        acc += step
    }

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
    )
}

export default LineGraph
