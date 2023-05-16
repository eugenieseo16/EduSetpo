import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import style from './NavBar.module.css';
import {
  TbBook,
  TbCalendarEvent,
  TbHome,
  TbSchool,
  TbUser,
  TbChartBar,
} from 'react-icons/tb';
import logoImg from '../../../assets/setpo_main.png';
import { tutorInfoState } from '../../../atoms/user.atom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';

export const NavBar = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(tutorInfoState);

  const isTutor = userInfo.tutorId;

  const location = useLocation().pathname.split('/')[1];

  return (
    <>
      {location == 'login' || location == 'signup' ? null : isTutor ? (
        <div className={style.TutorNavBar}>
          <div className={style.logo} onClick={() => navigate(`/tutor`)}>
            <img src={logoImg} />
            <span>에듀세포</span>
          </div>
          <NavLink to="/tutor">
            <div
              className={
                useLocation().pathname == '/tutor'
                  ? style.selected
                  : style.default
              }
            >
              <TbHome
                size="2rem"
                color={useLocation().pathname == '/tutor' ? '#98c1d9' : 'white'}
              />
              <span>홈</span>
            </div>
          </NavLink>
          <NavLink to="/tutor/schedule">
            <div
              className={
                useLocation().pathname.includes('/tutor/schedule')
                  ? style.selected
                  : style.default
              }
            >
              <TbCalendarEvent
                size="2rem"
                color={
                  useLocation().pathname.includes('/tutor/schedule')
                    ? '#98c1d9'
                    : 'white'
                }
              />
              <span>일정 관리</span>
            </div>
          </NavLink>
          <NavLink to="/tutor/class">
            <div
              className={
                useLocation().pathname.includes('/tutor/class')
                  ? style.selected
                  : style.default
              }
            >
              <TbBook
                size="2rem"
                color={
                  useLocation().pathname.includes('/tutor/class')
                    ? '#98c1d9'
                    : 'white'
                }
              />
              <span>수업 관리</span>
            </div>
          </NavLink>
          <NavLink to="/tutor/student">
            <div
              className={
                useLocation().pathname.includes('/tutor/student')
                  ? style.selected
                  : style.default
              }
            >
              <TbSchool
                size="2rem"
                color={
                  useLocation().pathname.includes('/tutor/student')
                    ? '#98c1d9'
                    : 'white'
                }
              />
              <span>학생 관리</span>
            </div>
          </NavLink>
          <NavLink to="/tutor/mypage">
            <div
              className={
                useLocation().pathname.includes('/tutor/mypage')
                  ? style.selected
                  : style.default
              }
            >
              <TbUser
                size="2rem"
                color={
                  useLocation().pathname.includes('/tutor/mypage')
                    ? '#98c1d9'
                    : 'white'
                }
              />
              <span>마이페이지</span>
            </div>
          </NavLink>
        </div>
      ) : (
        <div className={style.NavBar}>
          <div className={style.logo} onClick={() => navigate(`/parents`)}>
            <img src={logoImg} />
            <span>에듀세포</span>
          </div>
          <NavLink to="/parents">
            <div
              className={
                useLocation().pathname == '/parents'
                  ? style.selected
                  : style.default
              }
            >
              <TbHome
                size="2rem"
                color={
                  useLocation().pathname == '/parents' ? '#a9d998' : 'white'
                }
              />
              <span>홈</span>
            </div>
          </NavLink>
          <NavLink to="/parents/chart">
            <div
              className={
                useLocation().pathname.includes('/parents/chart')
                  ? style.selected
                  : style.default
              }
            >
              <TbChartBar
                size="2rem"
                color={
                  useLocation().pathname.includes('/parents/chart')
                    ? '#a9d998'
                    : 'white'
                }
              />
              <span>통계</span>
            </div>
          </NavLink>
          <NavLink to="/parents/mypage">
            <div
              className={
                useLocation().pathname.includes('/parents/mypage')
                  ? style.selected
                  : style.default
              }
            >
              <TbUser
                size="2rem"
                color={
                  useLocation().pathname.includes('/parents/mypage')
                    ? '#a9d998'
                    : 'white'
                }
              />
              <span>마이페이지</span>
            </div>
          </NavLink>
        </div>
      )}
    </>
  );
};
