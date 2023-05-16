import { useLocation } from 'react-router-dom';
import style from './Home.module.scss';

import {
  NoClass,
  UpcomingClass,
  TodayClasses,
} from '../../components/tutorHome/index';
import { useState } from 'react';

export const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.upcomingClass}>
        <h1>다음 수업</h1>

        <div className={style.classContainer}>
          <UpcomingClass />
        </div>
      </div>

      <div className={style.todayClass}>
        <h1>금일 수업</h1>
        <div className={style.classContainer}>
          <TodayClasses />
        </div>
      </div>
    </div>
  );
};
