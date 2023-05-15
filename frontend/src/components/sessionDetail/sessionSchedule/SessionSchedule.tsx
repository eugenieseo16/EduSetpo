import style from './SessionSchedule.module.css';
import { useState } from 'react';
import { ShortButtonHug } from '../../common/button/Button';

interface SessionScheduleProps {
  actualDate: number[];
  startTime: number[];
  endTime: number[];
}
export const SessionSchedule = ({
  actualDate,
  startTime,
  endTime,
}: SessionScheduleProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const weekday = ['일', '월', '화', '수', '목', '금', '토'];
  const day = new Date(actualDate[0], actualDate[1], actualDate[2]).getDay();
  const sessionTime =
    `${startTime[0] < 10 ? `0${startTime[0]}` : startTime[0]}:` +
    `${startTime[1] < 10 ? `0${startTime[1]}` : startTime[1]} ~ ` +
    `${endTime[0] < 10 ? `0${endTime[0]}` : endTime[0]}:` +
    `${endTime[1] < 10 ? `0${endTime[1]}` : endTime[1]} `;

  const onUpdate = (prev: boolean) => {
    if (prev) {
      // 일정 변경 API 호출
    }
    setIsUpdating(!prev);
  };

  return (
    <>
      <div className={style.sessionSchedule}>
        <h3>일정</h3>
        {isUpdating ? (
          <>
            {/* 아래 인풋은 일정 등록 페이지 가져와서 변경하기 */}
            <input type="text" />
            <ShortButtonHug
              className={style.updateButton}
              children={'수정'}
              onClick={() => onUpdate(isUpdating)}
            ></ShortButtonHug>
          </>
        ) : (
          <div>
            <span>
              {actualDate[1]}월 {actualDate[2]}일 ({weekday[day]}) {sessionTime}
            </span>
            <ShortButtonHug
              className={style.updateButton}
              children={'수정'}
              onClick={() => onUpdate(isUpdating)}
            ></ShortButtonHug>
          </div>
        )}
      </div>
    </>
  );
};
