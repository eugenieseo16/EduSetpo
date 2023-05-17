import { useLocation } from 'react-router-dom';
import style from './Home.module.scss';

import {
  NoClass,
  UpcomingClass,
  TodayClasses,
} from '../../components/tutorHome/index';
import { useState } from 'react';
import { tutorInfoState } from '../../atoms/user.atom';
import { useRecoilState, useRecoilValue } from 'recoil';

export const Home = () => {
  const userInfo = useRecoilValue(tutorInfoState);

  return (
    <>
      <h1>유진아 이건 heading1 태그란다</h1>
      <h2>유진아 이건 heading2 태그란다</h2>
      <h3>유진아 이건 heading3 태그란다</h3>
      <h4>유진아 이건 heading4 태그란다</h4>
      <h5>유진아 이건 heading5 태그란다</h5>
      <h6>유진아 이건 heading6 태그란다</h6>
      <br />
      <span>어마맛!! 이건 span태그잖아??</span>
      <br />
      <p>어마맛!! 이건 p태그잖아??</p>
      <a href="#">어마맛!! 이건 a태그잖아??</a>
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
    </>
  );
};
