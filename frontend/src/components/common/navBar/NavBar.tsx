import { NavLink, useLocation } from 'react-router-dom';
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

export const NavBar = () => {
  const location = useLocation().pathname.split('/')[1];

  const isTutor = true;

  return (
    <>
      {location == 'login' || location == 'signup' ? null : isTutor ? (
        <div className={style.NavBar}>
          <div className={style.logo}>
            <img src={logoImg} />
            <span>에듀세포</span>
          </div>
          <NavLink to="">
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
          <NavLink to="schedule">
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
          <NavLink to="class">
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
          <NavLink to="student">
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
          <NavLink to="mypage">
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
          <NavLink to="">
            <div
              className={
                useLocation().pathname == '/parent'
                  ? style.selected
                  : style.default
              }
            >
              <TbHome
                size="2rem"
                color={
                  useLocation().pathname == '/parent' ? '#98c1d9' : 'white'
                }
              />
              <span>홈</span>
            </div>
          </NavLink>
          <NavLink to="chart">
            <div
              className={
                useLocation().pathname.includes('/parent/chart')
                  ? style.selected
                  : style.default
              }
            >
              <TbChartBar
                size="2rem"
                color={
                  useLocation().pathname.includes('/parent/chart')
                    ? '#98c1d9'
                    : 'white'
                }
              />
              <span>홈</span>
            </div>
          </NavLink>
          <NavLink to="mypage">
            <div
              className={
                useLocation().pathname.includes('/parent/mypage')
                  ? style.selected
                  : style.default
              }
            >
              <TbUser
                size="2rem"
                color={
                  useLocation().pathname.includes('/parent/mypage')
                    ? '#98c1d9'
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
