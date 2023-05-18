// import {
//   XYPlot,
//   HorizontalGridLines,
//   VerticalGridLines,
//   XAxis,
//   YAxis,
//   LineSeries,
// } from 'react-vis';
// import { Grade } from '../../../types/grade';
// import { useState, useEffect } from 'react';

// interface Props {
//   grades: Grade[];
// }

// export const Graph = ({ grades }: Props) => {
//   const [graphData, setGraphData] = useState<{ x: number; y: number }[]>([]);
//   useEffect(() => {
//     const newData = grades.map(grade => ({
//       x: grade.gradeId,
//       y: grade.score,
//     }));
//     setGraphData(prevData => [...prevData, ...newData]);
//   }, [grades]);

//   console.log(graphData);

//   console.log(grades, '그래프');
//   return (
//     <>
//       <XYPlot width={300} height={300}>
//         <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
//         <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
//         <XAxis />
//         <YAxis />
//         <LineSeries
//           data={graphData}
//           opacity={1}
//           style={{
//             fill: 'none',
//             stroke: '#E48000',
//             strokeLinejoin: 'round',
//             strokeWidth: '5px',
//           }}
//         />
//         ;
//       </XYPlot>
//     </>
//   );
// };
import {
  XYPlot,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  LineSeries,
} from 'react-vis';
import { Grade } from '../../../types/grade';
import { useState, useEffect } from 'react';

interface Props {
  grades: Grade[];
}

export const Graph = ({ grades }: Props) => {
  const [graphData, setGraphData] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const newData = grades.map(grade => ({
      x: grade.gradeId,
      y: grade.score,
    }));
    setGraphData(newData);
  }, [grades]);

  console.log(graphData);
  console.log(grades, '그래프');
  console.log(graphData);

  return (
    <>
      <XYPlot width={300} height={300}>
        <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
        <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
        <XAxis />
        <YAxis tickValues={[0, 100]} />
        <LineSeries
          data={graphData}
          // opacity={1}
          style={{
            fill: 'none',
            stroke: '#E48000',
            strokeLinejoin: 'round',
            strokeWidth: '5px',
          }}
        />
      </XYPlot>
    </>
  );
};
