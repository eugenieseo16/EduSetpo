import style from './ProgressBar.module.css';
import { XYPlot, HorizontalBarSeries, XAxis, YAxis } from 'react-vis';

export const ProgressBar = () => {
  return (
    <>
      <XYPlot width={300} height={70} xDomain={[0, 100]}>
        <XAxis />
        <HorizontalBarSeries barWidth={0.5} data={[{ x: 98, y: 0 }]} />
      </XYPlot>
    </>
  );
};
