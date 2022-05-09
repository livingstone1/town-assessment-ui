import React from 'react'


import { Bar } from 'react-chartjs-2';
import './AlgorithmBlock.scss';

// eslint-disable-next-line
import {Chart} from 'chart.js/auto';

export default function AlgorithmBlock(props) {
    const { block } = props
    const {  blockName, townAssessment} = block;

    const towns = Object.keys(townAssessment);
    const data = towns.map((townName, i) => ({
        i: i + 1,
        label: townName,
        value: +townAssessment[townName].toFixed(3)
    }));

    return (
        <div className='algorithm-block'>
            <h2>{blockName}</h2>
            <div className='wrapper'>
                <div className='table'>
                    <table>
                        <tbody>
                            {
                                data.map((x) => 
                                    <tr>
                                            <td>{x.i}</td>
                                            <td>{x.label}</td>
                                            <td>{x.value}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className='chart'>
                <Bar
                    options={
                        {
                            responsive: true,
                            plugins: {
                              legend: {
                                display: false,
                              },
                              title: {
                                display: false,
                              }
                            }
                        }
                    }
                    data={{
                        labels: towns,
                        datasets: [
                            {
                                label: '',
                                data: data.map(x => x.value),
                                backgroundColor: '#c5403c',
                            }
                        ]
                    }}
                />
                </div>
            </div>
        </div>
    )
}
