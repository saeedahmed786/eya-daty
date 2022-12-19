import React from 'react';
import { Line } from 'react-charts';

const data = [
  {
    label: 'Series 1',
    data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
  }
];

const LineGraph = () => {
  return (
    <Line
      data={data}
      options={{
        fill: true,
        borderColor: '#0094DA',
        backgroundColor: '#0094DA',
        borderWidth: 2,
        pointRadius: 0
      }}
    />
  );
};

export default LineGraph;
