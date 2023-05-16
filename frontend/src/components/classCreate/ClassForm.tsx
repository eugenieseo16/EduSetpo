import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { LongButton } from '../common/button/Button';
import style from './ClassForm.module.scss';
import { searchTags } from '../../api/lessonTagApis';
import { tutorInfoState } from '../../atoms/user.atom';
import { useRecoilState } from 'recoil';

export const ClassForm = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useRecoilState(tutorInfoState);

  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);

  const [tags, setTags] = useState([]);

  const searchInput = (event: any) => {
    console.log(event.target.value);
    fetchData(event.target.value);
  };

  async function fetchData(input: string) {
    try {
      const data = await searchTags(userInfo.tutorId, input);
      setTags(data);
    } catch (error) {}
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>수업 등록</h1>
      </div>

      <div className={style.className}>
        <h3>수업명: </h3>
        <input type="text" />
      </div>
      <div className={style.classMemo}>
        <h3>메모: </h3>
        <textarea id="memo"></textarea>
      </div>

      <div className={style.classSchedule}>
        <h3>일정:</h3>

        <span
          onClick={() => {
            setMonday(!monday);
          }}
          className={monday ? style.selectedDay : style.defaultDay}
        >
          월
        </span>

        <span
          onClick={() => {
            setTuesday(!tuesday);
          }}
          className={tuesday ? style.selectedDay : style.defaultDay}
        >
          화
        </span>

        <span
          onClick={() => {
            setWednesday(!wednesday);
          }}
          className={wednesday ? style.selectedDay : style.defaultDay}
        >
          수
        </span>
        <span
          onClick={() => {
            setThursday(!thursday);
          }}
          className={thursday ? style.selectedDay : style.defaultDay}
        >
          목
        </span>
        <span
          onClick={() => {
            setFriday(!friday);
          }}
          className={friday ? style.selectedDay : style.defaultDay}
        >
          금
        </span>
        <span
          onClick={() => {
            setSaturday(!saturday);
          }}
          className={saturday ? style.selectedDay : style.defaultDay}
        >
          토
        </span>
        <span
          onClick={() => {
            setSunday(!sunday);
          }}
          className={sunday ? style.selectedDay : style.defaultDay}
        >
          일
        </span>
      </div>
      {monday ||
      tuesday ||
      wednesday ||
      thursday ||
      friday ||
      saturday ||
      sunday ? (
        <div className={style.selectedSchedule}>
          {monday ? (
            <div className={style.scheduleDay}>
              <span>월:</span>
              <input type="time" />
              <span>-</span>
              <input type="time" />
            </div>
          ) : null}
          {tuesday ? (
            <div className={style.scheduleDay}>
              <span>화:</span>
              <input type="time" />
              <span>-</span>
              <input type="time" />
            </div>
          ) : null}
          {wednesday ? (
            <div className={style.scheduleDay}>
              <span>수:</span>
              <input type="time" />
              <span>-</span>
              <input type="time" />
            </div>
          ) : null}
          {thursday ? (
            <div className={style.scheduleDay}>
              <span>목:</span>
              <input type="time" />
              <span>-</span>
              <input type="time" />
            </div>
          ) : null}
          {friday ? (
            <div className={style.scheduleDay}>
              <span>금:</span>
              <input type="time" />
              <span>-</span>
              <input type="time" />
            </div>
          ) : null}
          {saturday ? (
            <div className={style.scheduleDay}>
              <span>토:</span>
              <input type="time" />
              <span>-</span>
              <input type="time" />
            </div>
          ) : null}
          {sunday ? (
            <div className={style.scheduleDay}>
              <span>일:</span>
              <input type="time" />
              <span>-</span>
              <input type="time" />
            </div>
          ) : null}
        </div>
      ) : null}

      <div className={style.classTags}>
        <div className={style.tagInput}>
          <h3>태그:</h3>
          <input type="text" onChange={searchInput} />
        </div>

        <div className={style.tagContainer}>
          {tags?.map((tag: any, i: number) => (
            <div key={i}>
              <span>{tag.tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={style.classSession}>
        <h3>회차:</h3>
        <input type="number" max="31" />
      </div>

      <div className={style.classStartDate}>
        <h3>시작일:</h3>
        <input type="date" min="2023-05-01" />
      </div>

      <div className={style.classStudents}>
        <h3>학생:</h3>
        <input type="text" />
      </div>

      <LongButton variant="success" onClick={() => navigate('/tutor/class/id')}>
        등록하기
      </LongButton>
    </div>
  );
};
