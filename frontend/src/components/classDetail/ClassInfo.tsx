import { useEffect, useState } from 'react';
import style from './ClassInfo.module.scss';
import { readLessonDetailApi } from '../../api/lessonApis';
import { useLocation } from 'react-router-dom';
import { Tag } from '../common/tag/Tag';

export const ClassInfo = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  const classId = location.pathname.split('/')[3];

  async function fetchData() {
    try {
      const data = await readLessonDetailApi(1, classId);
      setData(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <div></div>
      {/* {data?.tags?.map(tag: any, i: number) => (
        <div key={i}></div>
      ))} */}
      <Tag name="" idx={1} />
    </div>
  );
};
