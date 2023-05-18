import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LongButton } from '../common/button/Button';
import style from './ClassForm.module.scss';
import { createTagApi, searchTags } from '../../api/lessonTagApis';
import { tutorInfoState } from '../../atoms/user.atom';
import { useRecoilState } from 'recoil';
import {
  createLessonApi,
  readLessonApi,
  updateLessonApi,
} from '../../api/lessonApis';
import { tagColors } from '../../utils/colorThemeDataList';
import { readLessonDetailApi } from '../../api/lessonApis';

export const ClassUpdateForm = () => {
  const navigate = useNavigate();
  const params = useParams<{ id?: string }>();
  const lessonId = params.id || '';
  const [userInfo, setUserInfo] = useRecoilState(tutorInfoState);
  const tutorId = userInfo.tutorId;

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

  const [isTag, setIsTag] = useState(false);

  const [lessonInfo, setLessonInfo] = useState<any>();

  const searchInput = (event: any) => {
    setTagQuery(event.target.value);
    if (event.target.value) {
      setIsTag(true);
    } else {
      setIsTag(false);
    }
    fetchData(tagQuery);
  };

  interface SelectedTags {
    tagId: number;
    tag: string;
  }
  const [selectedTags, setSelectedTags] = useState<SelectedTags[]>([]);

  // 수업 조회
  function toTimeStr(list: any) {
    const timeArray = list;
    const hour = timeArray[0] < 10 ? `0${timeArray[0]}` : `${timeArray[0]}`;
    const minute = timeArray[1] < 10 ? `0${timeArray[1]}` : `${timeArray[1]}`;
    return `${hour}:${minute}`;
  }

  async function readLesson() {
    const result = await readLessonDetailApi(tutorId, lessonId);

    // value 입력

    // 스케줄
    result.schedule.map((date: any) => {
      if (date.day === 'MONDAY') {
        setMonday(true);
        const newStartTime = toTimeStr(date.startTime);
        setMondayStartTime(newStartTime);
        const newEndTime = toTimeStr(date.endTime);
        setMondayEndTime(newEndTime);
      } else if (date.day === 'TUESDAY') {
        setTuesday(true);
        const newStartTime = toTimeStr(date.startTime);
        setTuesdayStartTime(newStartTime);
        const newEndTime = toTimeStr(date.endTime);
        setTuesdayEndTime(newEndTime);
      } else if (date.day === 'WEDNESDAY') {
        setWednesday(true);
        const newStartTime = toTimeStr(date.startTime);
        setWednesdayStartTime(newStartTime);
        const newEndTime = toTimeStr(date.endTime);
        setWednesdayEndTime(newEndTime);
      } else if (date.day === 'THURSDAY') {
        setThursday(true);
        const newStartTime = toTimeStr(date.startTime);
        setThursdayStartTime(newStartTime);
        const newEndTime = toTimeStr(date.endTime);
        setThursdayEndTime(newEndTime);
      } else if (date.day === 'FRIDAY') {
        setFriday(true);
        const newStartTime = toTimeStr(date.startTime);
        setFridayStartTime(newStartTime);
        const newEndTime = toTimeStr(date.endTime);
        setFridayEndTime(newEndTime);
      } else if (date.day == 'SATURDAY') {
        setSaturday(true);
        const newStartTime = toTimeStr(date.startTime);
        setSaturdayStartTime(newStartTime);
        const newEndTime = toTimeStr(date.endTime);
        setSaturdayEndTime(newEndTime);
      } else {
        setSunday(true);
        const newStartTime = toTimeStr(date.startTime);
        setSundayStartTime(newStartTime);
        const newEndTime = toTimeStr(date.endTime);
        setSundayEndTime(newEndTime);
      }

      // 태그
      setTags(result.tags);

      // 시작일
      const target = result.startDate;
      const year = target[0];
      const month = target[1] < 10 ? `0${target[1]}` : `${target[1]}`;
      const day = target[2] < 10 ? `0${target[2]}` : `${target[2]}`;
      setStartDate(`${year}-${month}-${day}`);

      // 학생
    });
    setLessonInfo(result);
  }
  useEffect(() => {
    readLesson();
  }, []);
  // 태그 생성
  async function createTag() {
    const body = { tag: tagQuery };
    try {
      const response = await createTagApi(userInfo.tutorId, body);
      handleSelectedTags(response.tagId, response.tag);
    } catch (error) {}
  }

  // 태그 추가
  function handleSelectedTags(tagId: number, tag: string) {
    setSelectedTags([
      ...selectedTags,
      {
        tagId: tagId,
        tag: tag,
      },
    ]);
  }

  // 태그 제거
  function removeSelectedTag(tagId: number) {
    const newTemp = selectedTags.filter(selectedTag => {
      return selectedTag.tagId !== tagId;
    });
    setSelectedTags(newTemp);
  }

  async function fetchData(input: string) {
    try {
      const data = await searchTags(userInfo.tutorId, input);
      setTags(data);

      // data에 tagQuery가 있는지 검증
      for (let i = 0; i < data.length; i++) {
        if (data[i]['tag'] === tagQuery) {
          break;
        }
      }
    } catch (error) {}
  }

  async function handleSubmit(event: any) {
    event?.preventDefault();

    const finalTagList = [];

    for (let i = 0; i < selectedTags.length; i++) {
      finalTagList.push(selectedTags[i]['tagId']);
    }

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
        tags: finalTagList,
        tutorId: userInfo.tutorId,
      };

      const result = await updateLessonApi(token, body, tutorId, lessonId);

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
            style={{ fontFamily: 'LIGHT' }}
            type="text"
            id="lessonName"
            onChange={changeLessonName}
            required
            value={lessonInfo?.lessonName}
          />
        </div>
        <div className={style.classMemo}>
          <h3>메모: </h3>
          <textarea
            style={{ fontFamily: 'LIGHT' }}
            id="lessonMemo"
            onChange={changeLessonMemo}
            required
            value={lessonInfo?.memo}
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
                <input
                  type="time"
                  onChange={changeMondayStartTime}
                  value={mondayStartTime}
                />
                <span>-</span>
                <input
                  type="time"
                  onChange={changeMondayEndtTime}
                  value={mondayEndTime}
                />
              </div>
            ) : null}
            {tuesday ? (
              <div className={style.scheduleDay}>
                <span>화:</span>
                <input
                  type="time"
                  onChange={changeTuesdayStartTime}
                  value={tuesdayStartTime}
                />
                <span>-</span>
                <input
                  type="time"
                  onChange={changeTuesdayEndTime}
                  value={tuesdayEndTime}
                />
              </div>
            ) : null}
            {wednesday ? (
              <div className={style.scheduleDay}>
                <span>수:</span>
                <input
                  type="time"
                  onChange={changeWednesdayStartTime}
                  value={wednesdayStartTime}
                />
                <span>-</span>
                <input
                  type="time"
                  onChange={changeWednesdayEndTime}
                  value={wednesdayEndTime}
                />
              </div>
            ) : null}
            {thursday ? (
              <div className={style.scheduleDay}>
                <span>목:</span>
                <input
                  type="time"
                  onChange={changeThursdayStartTime}
                  value={thursdayStartTime}
                />
                <span>-</span>
                <input
                  type="time"
                  onChange={changeThursdayEndTime}
                  value={thursdayEndTime}
                />
              </div>
            ) : null}
            {friday ? (
              <div className={style.scheduleDay}>
                <span>금:</span>
                <input
                  type="time"
                  onChange={changeFridayStartTime}
                  value={fridayStartTime}
                />
                <span>-</span>
                <input
                  type="time"
                  onChange={changeFridayEndTime}
                  value={fridayEndTime}
                />
              </div>
            ) : null}
            {saturday ? (
              <div className={style.scheduleDay}>
                <span>토:</span>
                <input
                  type="time"
                  onChange={changeSaturdayStartTime}
                  value={saturdayStartTime}
                />
                <span>-</span>
                <input
                  type="time"
                  onChange={changeSaturdayEndTime}
                  value={saturdayEndTime}
                />
              </div>
            ) : null}
            {sunday ? (
              <div className={style.scheduleDay}>
                <span>일:</span>
                <input
                  type="time"
                  onChange={changeSundayStartTime}
                  value={sundayStartTime}
                />
                <span>-</span>
                <input
                  type="time"
                  onChange={changeSundayEndTime}
                  value={sundayEndTime}
                />
              </div>
            ) : null}
          </div>
        ) : null}

        <div className={style.classTags}>
          <div className={style.tagInput}>
            <h3>태그:</h3>
            <input type="text" onChange={searchInput} />
          </div>

          {/* 선택된 태그 */}
          <div className={style.selectedTagContainer}>
            {selectedTags?.map((tag: any, i: number) => (
              <div
                key={i}
                onClick={() => removeSelectedTag(tag.tagId)}
                className={style.tag}
              >
                <span
                  style={{
                    backgroundColor: `${tagColors[i % tag.tagId]['color']}`,
                  }}
                >
                  {tag.tag}
                </span>
              </div>
            ))}
          </div>

          <div className={style.tagContainer}>
            {/* 태그 검색 결과 */}
            {tags?.map((tag: any, i: number) => (
              <div
                key={i}
                onClick={() => handleSelectedTags(tag.tagId, tag.tag)}
                className={style.tag}
              >
                <span>{tag.tag}</span>
              </div>
            ))}

            {/* 새로운 태그 추가 */}
            {isTag ? (
              <div onClick={createTag} className={style.tag}>
                <span>+ {tagQuery}</span>
              </div>
            ) : null}
          </div>
        </div>

        <div className={style.classStartDate}>
          <h3>시작일:</h3>
          <div style={{ fontFamily: 'BOLD', fontSize: '1.5rem' }}>
            {startDate}
          </div>
        </div>

        <div className={style.classStudents}>
          <h3>학생:</h3>
          <input type="text" />
        </div>

        <LongButton type="submit" variant="success">
          수정하기
        </LongButton>
      </div>
    </form>
  );
};
