import style from './ProgressBar.module.css';
import { XYPlot, HorizontalBarSeries, XAxis, YAxis } from 'react-vis';

export const ProgressBar = ({ value }: { value: number }) => {
  return (
    <>
      <XYPlot width={300} height={70} xDomain={[0, 100]}>
        <XAxis />
        <HorizontalBarSeries barWidth={0.5} data={[{ x: value, y: 0 }]} />
      </XYPlot>
    </>
  );
};
