import {
  XYPlot,
  VerticalBarSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';

export const Graph = () => {
  return (
    <>
      <XYPlot width={300} height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          barWidth={0.5}
          data={[
            {
              x: 0,
              y: 10,
            },
            {
              x: 1,
              y: 8.879463992795403,
            },
            {
              x: 2,
              y: 8.586987157524042,
            },
            {
              x: 3,
              y: 8.99616573383815,
            },
          ]}
          style={{}}
        />
        <VerticalBarSeries
          barWidth={0.5}
          data={[
            {
              x: 0,
              y: 10,
            },
            {
              x: 1,
              y: 8.879463992795403,
            },
            {
              x: 2,
              y: 8.586987157524042,
            },
            {
              x: 3,
              y: 8.99616573383815,
            },
          ]}
          style={{}}
        />
        <VerticalBarSeries
          barWidth={0.5}
          data={[
            {
              x: 0,
              y: 10,
            },
            {
              x: 1,
              y: 8.879463992795403,
            },
            {
              x: 2,
              y: 8.586987157524042,
            },
            {
              x: 3,
              y: 8.99616573383815,
            },
          ]}
          style={{}}
        />
      </XYPlot>
    </>
  );
};
