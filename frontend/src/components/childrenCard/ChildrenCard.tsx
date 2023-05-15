import style from './ChildrenCard.module.scss';
import { colorTheme } from '../../utils/colorThemeDataList';
import { readChildrenApi } from '../../api/childrenApis';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import React from 'react';

type ChildrenCardProps = {
  isWithdraw: boolean;
  childName: string;
  studentLessonId: number;
};

export const ChildrenCard: React.FC<ChildrenCardProps> = ({
  isWithdraw,
  childName,
  studentLessonId,
}) => {
  return (
    <div>
      <h2>{childName}</h2>
      <p>{`Student Lesson ID: ${studentLessonId}`}</p>
      <p>{`Is Withdrawn: ${isWithdraw ? 'Yes' : 'No'}`}</p>
    </div>
  );
};

// export const ChildrenCard = () => {
//   const navigate = useNavigate();

//   const themeIdx = 7;
//   const parentId = 2;

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await readChildrenApi(parentId);
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchData();
//   }, []);

//   console.log(data[0]);

//   return (
//     <div>
//       {data?.map((data: any, i: number) => (
//         <div
//           key={i}
//           className={style.childrenCard}
//           style={{
//             backgroundColor: `${
//               colorTheme[themeIdx]['color'][data.childrenId % 7]
//             }`,
//           }}
//           // onClick={() => navigate(`url`)}
//         >
//           <div className={style.infoContainer}>
//             <h1>{data.lessonName}</h1>
//             <p>: {data.memo}</p>

//             <div className={style.scheduleContainer}>
//               {data?.schedule.map((timeSchedule: any, i: number) => (
//                 <div key={i} className={style.scheduleItem}>
//                   {timeSchedule.day === 'MONDAY' ? (
//                     <span>월</span>
//                   ) : timeSchedule.day === 'TUESDAY' ? (
//                     <span>화</span>
//                   ) : timeSchedule.day === 'WEDNESDAY' ? (
//                     <span>수</span>
//                   ) : timeSchedule.day == 'THURSDAY' ? (
//                     <span>목</span>
//                   ) : timeSchedule.day == 'FRIDAY' ? (
//                     <span>금</span>
//                   ) : timeSchedule.day == 'SATURDAY' ? (
//                     <span>토</span>
//                   ) : timeSchedule.day == 'SUNDAY' ? (
//                     <span>일</span>
//                   ) : null}

//                   {timeSchedule.startTime[1] == 0 &&
//                   timeSchedule.endTime[1] == 0 ? (
//                     <span>
//                       {timeSchedule.startTime[0]}:00 ~ {timeSchedule.endTime[0]}
//                       :00
//                     </span>
//                   ) : timeSchedule.startTime[1] == 0 ? (
//                     <span>
//                       {timeSchedule.startTime[0]}:00 ~ {timeSchedule.endTime[0]}
//                       :{timeSchedule.endTime[1]}
//                     </span>
//                   ) : timeSchedule.endTime[1] == 0 ? (
//                     <span>
//                       {timeSchedule.startTime[0]}:{timeSchedule.startTime[1]} ~{' '}
//                       {timeSchedule.endTime[0]}:00
//                     </span>
//                   ) : (
//                     <span>
//                       {timeSchedule.startTime[0]}:{timeSchedule.startTime[1]} ~{' '}
//                       {timeSchedule.endTime[0]}:{timeSchedule.endTime[1]}
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
