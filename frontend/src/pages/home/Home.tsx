import { useLocation } from 'react-router-dom';
import style from './Home.module.scss';

import {
  NoClass,
  UpcomingClass,
  TodayClasses,
} from '../../components/tutorHome/index';

export const Home = () => {
  const upcomingClass = null;

  const todayClass = [1];

  return (
    <div className={style.home}>
      <div className={style.upcomingClass}>
        <h1>다음 수업</h1>

        <div className={style.classContainer}>
          {upcomingClass ? <UpcomingClass /> : <NoClass />}
        </div>
      </div>

      <div className={style.todayClass}>
        <h1>금일 수업</h1>
        <div className={style.classContainer}>
          {todayClass ? <TodayClasses /> : <NoClass />}
        </div>
      </div>
    </div>
  );
};
