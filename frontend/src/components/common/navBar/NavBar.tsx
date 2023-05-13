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

export const NavBar = () => {
  const location = useLocation().pathname.split('/')[1];
  let navPath = useLocation().pathname.split('/')[2];

  const isTutor = true;

  console.log(navPath);
  return (
    <>
      {location == 'login' || location == 'signup' ? null : isTutor ? (
        <div className={style.NavBar}>
          <div
            className={
              useLocation().pathname == '/tutor'
                ? style.selected
                : style.default
            }
          >
            <NavLink to="">
              <TbHome
                size="2rem"
                color={useLocation().pathname == '/tutor' ? '#98c1d9' : 'white'}
              />
              <span>홈</span>
            </NavLink>
          </div>

          <div
            className={
              useLocation().pathname == '/tutor/schedule'
                ? style.selected
                : style.default
            }
          >
            <NavLink to="schedule">
              <TbCalendarEvent
                size="2rem"
                color={
                  useLocation().pathname == '/tutor/schedule'
                    ? '#98c1d9'
                    : 'white'
                }
              />
              <span>일정 관리</span>
            </NavLink>
          </div>

          <div
            className={
              useLocation().pathname == '/tutor/class'
                ? style.selected
                : style.default
            }
          >
            <NavLink to="class">
              <TbBook
                size="2rem"
                color={
                  useLocation().pathname == '/tutor/class' ? '#98c1d9' : 'white'
                }
              />
              <span>수업 관리</span>
            </NavLink>
          </div>

          <div
            className={
              useLocation().pathname == '/tutor/student'
                ? style.selected
                : style.default
            }
          >
            <NavLink to="student">
              <TbSchool
                size="2rem"
                color={
                  useLocation().pathname == '/tutor/student'
                    ? '#98c1d9'
                    : 'white'
                }
              />
              <span>학생 관리</span>
            </NavLink>
          </div>

          <div
            className={
              useLocation().pathname == '/tutor/mypage'
                ? style.selected
                : style.default
            }
          >
            <NavLink to="mypage">
              <TbUser
                size="2rem"
                color={
                  useLocation().pathname == '/tutor/mypage'
                    ? '#98c1d9'
                    : 'white'
                }
              />
              <span>마이페이지</span>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className={style.NavBar}>
          <div
            className={
              useLocation().pathname == '/parent'
                ? style.selected
                : style.default
            }
          >
            <NavLink to="">
              <TbHome
                size="2rem"
                color={
                  useLocation().pathname == '/parent' ? '#98c1d9' : 'white'
                }
              />
              <span>홈</span>
            </NavLink>
          </div>
          <div
            className={
              useLocation().pathname == '/parent/chart'
                ? style.selected
                : style.default
            }
          >
            <NavLink to="chart">
              <TbChartBar
                size="2rem"
                color={
                  useLocation().pathname == '/parent/chart'
                    ? '#98c1d9'
                    : 'white'
                }
              />
              <span>홈</span>
            </NavLink>
          </div>
          <div
            className={
              useLocation().pathname == '/parent/mypage'
                ? style.selected
                : style.default
            }
          >
            <NavLink to="mypage">
              <TbUser
                size="2rem"
                color={
                  useLocation().pathname == '/parent/mypage'
                    ? '#98c1d9'
                    : 'white'
                }
              />
              <span>마이페이지</span>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};
