import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { LongButton } from '../common/button/Button';
import style from './ClassForm.module.scss';
import { createTagApi, searchTags } from '../../api/lessonTagApis';
import { tutorInfoState } from '../../atoms/user.atom';
import { useRecoilState } from 'recoil';
import { createLessonApi } from '../../api/lessonApis';

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
  const [tagQuery, setTagQuery] = useState('');
  const [students, setStudents] = useState([]);
  const schedule: string[][] = [];
  const [lessonName, setLessonName] = useState('');
  const [lessonMemo, setLessonMemo] = useState('');

  const [startDate, setStartDate] = useState('2023-01-01');

  const searchInput = (event: any) => {
    setTagQuery(event.target.value);
    fetchData(tagQuery);
  };

  const selectedTags: number[] = [];
  // const [selectedTags, setSelectedTags] = useState([]);

  async function createTag() {
    const body = { tag: tagQuery };
    try {
      const response = await createTagApi(userInfo.tutorId, body);
      // selectedTags.push(response['tagId']);

      // setSelectedTags(...selectedTags, response['tagId']);

      console.log('selectedTags: ', selectedTags);
    } catch (error) {}
  }

  function handleSelectedTags(tagId: number) {
    if (selectedTags.indexOf(tagId) != -1) {
      for (let i = 0; i < selectedTags.length; i++) {
        if (selectedTags[i] === tagId) {
          selectedTags.splice(i, 1);
          i--;
        }
      }
    } else {
      selectedTags.push(tagId);
    }

    console.log(selectedTags);
  }

  async function fetchData(input: string) {
    try {
      const data = await searchTags(userInfo.tutorId, input);
      setTags(data);
    } catch (error) {}
  }

  async function handleSubmit(event: any) {
    event?.preventDefault();

    if (monday && mondayStartTime && mondayEndTime) {
      schedule.push(['MONDAY', mondayStartTime, mondayEndTime]);
    }
    if (tuesday && tuesdayStartTime && tuesdayEndTime) {
      schedule.push(['TUESDAY', tuesdayStartTime, tuesdayEndTime]);
    }
    if (wednesday && wednesdayStartTime && wednesdayEndTime) {
      schedule.push(['WEDNESDAY', wednesdayStartTime, wednesdayEndTime]);
    }
    if (thursday && thursdayStartTime && thursdayEndTime) {
      schedule.push(['THURSDAY', thursdayStartTime, thursdayEndTime]);
    }
    if (friday && fridayStartTime && fridayEndTime) {
      schedule.push(['FRIDAY', fridayStartTime, fridayEndTime]);
    }
    if (saturday && saturdayStartTime && saturdayEndTime) {
      schedule.push(['SATURDAY', saturdayStartTime, saturdayEndTime]);
    }
    if (sunday && sundayStartTime && sundayEndTime) {
      schedule.push(['SUNDAY', sundayStartTime, sundayEndTime]);
    }

    if (
      Number(monday) +
        Number(tuesday) +
        Number(wednesday) +
        Number(thursday) +
        Number(friday) +
        Number(saturday) +
        Number(sunday) ===
        schedule.length &&
      schedule.length != 0
    ) {
      // POST 보내기
      const token = 'Bearer ' + localStorage.getItem('access_token');
      const body = {
        lessonName: lessonName,
        memo: lessonMemo,
        numOfSession: schedule.length * 4,
        schedule: schedule,
        startDate: startDate,
        students: [1, 2],
        tags: [1],
        tutorId: userInfo.tutorId,
      };

      const lessonId = await createLessonApi(token, body);

      navigate(`/tutor/class/${lessonId}`);
    } else {
      alert('수업 일정을 입력해주세요.');
    }
  }

  const changeLessonName = (e: ChangeEvent<HTMLInputElement>) => {
    setLessonName(e.target.value);
  };

  const changeLessonMemo = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLessonMemo(e.target.value);
  };

  const changeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const [mondayStartTime, setMondayStartTime] = useState('');
  const changeMondayStartTime = (e: ChangeEvent<HTMLInputElement>) => {
    setMondayStartTime(e.target.value);
  };

  const [mondayEndTime, setMondayEndTime] = useState('');
  const changeMondayEndtTime = (e: ChangeEvent<HTMLInputElement>) => {
    setMondayEndTime(e.target.value);
  };
  const [tuesdayStartTime, setTuesdayStartTime] = useState('');
  const changeTuesdayStartTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTuesdayStartTime(e.target.value);
  };

  const [tuesdayEndTime, setTuesdayEndTime] = useState('');
  const changeTuesdayEndTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTuesdayEndTime(e.target.value);
  };

  const [wednesdayStartTime, setWednesdayStartTime] = useState('');
  const changeWednesdayStartTime = (e: ChangeEvent<HTMLInputElement>) => {
    setWednesdayStartTime(e.target.value);
  };

  const [wednesdayEndTime, setWednesdayEndTime] = useState('');
  const changeWednesdayEndTime = (e: ChangeEvent<HTMLInputElement>) => {
    setWednesdayEndTime(e.target.value);
  };

  const [thursdayStartTime, setThursdayStartTime] = useState('');
  const changeThursdayStartTime = (e: ChangeEvent<HTMLInputElement>) => {
    setThursdayStartTime(e.target.value);
  };

  const [thursdayEndTime, setThursdayEndTime] = useState('');
  const changeThursdayEndTime = (e: ChangeEvent<HTMLInputElement>) => {
    setThursdayEndTime(e.target.value);
  };

  const [fridayStartTime, setFridayStartTime] = useState('');
  const changeFridayStartTime = (e: ChangeEvent<HTMLInputElement>) => {
    setFridayStartTime(e.target.value);
  };
  const [fridayEndTime, setFridayEndTime] = useState('');
  const changeFridayEndTime = (e: ChangeEvent<HTMLInputElement>) => {
    setFridayEndTime(e.target.value);
  };

  const [saturdayStartTime, setSaturdayStartTime] = useState('');
  const changeSaturdayStartTime = (e: ChangeEvent<HTMLInputElement>) => {
    setSaturdayStartTime(e.target.value);
  };

  const [saturdayEndTime, setSaturdayEndTime] = useState('');
  const changeSaturdayEndTime = (e: ChangeEvent<HTMLInputElement>) => {
    setSaturdayEndTime(e.target.value);
  };

  const [sundayStartTime, setSundayStartTime] = useState('');
  const changeSundayStartTime = (e: ChangeEvent<HTMLInputElement>) => {
    setSundayStartTime(e.target.value);
  };

  const [sundayEndTime, setSundayEndTime] = useState('');
  const changeSundayEndTime = (e: ChangeEvent<HTMLInputElement>) => {
    setSundayEndTime(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.container}>
        <div className={style.header}>
          <h1>수업 등록</h1>
        </div>

        <div className={style.className}>
          <h3>수업명: </h3>
          <input
            type="text"
            id="lessonName"
            onChange={changeLessonName}
            required
          />
        </div>
        <div className={style.classMemo}>
          <h3>메모: </h3>
          <textarea
            id="lessonMemo"
            onChange={changeLessonMemo}
            required
          ></textarea>
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
                <input type="time" onChange={changeMondayStartTime} />
                <span>-</span>
                <input type="time" onChange={changeMondayEndtTime} />
              </div>
            ) : null}
            {tuesday ? (
              <div className={style.scheduleDay}>
                <span>화:</span>
                <input type="time" onChange={changeTuesdayStartTime} />
                <span>-</span>
                <input type="time" onChange={changeTuesdayEndTime} />
              </div>
            ) : null}
            {wednesday ? (
              <div className={style.scheduleDay}>
                <span>수:</span>
                <input type="time" onChange={changeWednesdayStartTime} />
                <span>-</span>
                <input type="time" onChange={changeWednesdayEndTime} />
              </div>
            ) : null}
            {thursday ? (
              <div className={style.scheduleDay}>
                <span>목:</span>
                <input type="time" onChange={changeThursdayStartTime} />
                <span>-</span>
                <input type="time" onChange={changeThursdayEndTime} />
              </div>
            ) : null}
            {friday ? (
              <div className={style.scheduleDay}>
                <span>금:</span>
                <input type="time" onChange={changeFridayStartTime} />
                <span>-</span>
                <input type="time" onChange={changeFridayEndTime} />
              </div>
            ) : null}
            {saturday ? (
              <div className={style.scheduleDay}>
                <span>토:</span>
                <input type="time" onChange={changeSaturdayStartTime} />
                <span>-</span>
                <input type="time" onChange={changeSaturdayEndTime} />
              </div>
            ) : null}
            {sunday ? (
              <div className={style.scheduleDay}>
                <span>일:</span>
                <input type="time" onChange={changeSundayStartTime} />
                <span>-</span>
                <input type="time" onChange={changeSundayEndTime} />
              </div>
            ) : null}
          </div>
        ) : null}

        <div className={style.classTags}>
          <div className={style.tagInput}>
            <h3>태그:</h3>
            <input type="text" onChange={searchInput} />
          </div>

          {tags.length != 0 ? (
            <div className={style.tagContainer}>
              {/* 태그 검색 결과 */}
              {tags?.map((tag: any, i: number) => (
                <div key={i} onClick={() => handleSelectedTags(tag.tagId)}>
                  <span>{tag.tag}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className={style.tagContainer}>
              {/* 태그 추가하기 */}
              {tagQuery ? (
                <div onClick={createTag}>
                  <span>+ {tagQuery}</span>
                </div>
              ) : null}
            </div>
          )}

          {/* {tagQuery ? <span>{tagQuery} +추가</span> : null} */}
        </div>

        <div className={style.classStartDate}>
          <h3>시작일:</h3>
          <input
            type="date"
            min="2023-05-01"
            onChange={changeStartDate}
            required
          />
        </div>

        <div className={style.classStudents}>
          <h3>학생:</h3>
          <input type="text" />
        </div>

        <LongButton type="submit" variant="success">
          등록하기
        </LongButton>
      </div>
    </form>
  );
};
