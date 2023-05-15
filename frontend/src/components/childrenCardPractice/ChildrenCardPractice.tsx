import React, { useState, useEffect } from 'react';
import { readChildrenApi } from '../../api/childrenApis';
import { colorTheme } from '../../utils/colorThemeDataList';
import style from './ChildrenCardPractice.module.scss';

export const ChildrenCardPractice = () => {
  const themeIdx = 7;
  const parentId = 2;

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await readChildrenApi(parentId);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  console.log(data[0]);

  return (
    <div>
      {data?.map((data: any, i: number) => (
        <div
          key={i}
          className={style.childrenCard}
          style={{
            backgroundColor: `${
              colorTheme[themeIdx]['color'][data.childrenId % 7]
            }`,
          }}
        >
          <div className={style.infoContainer}>
            <h1>{data.childName}</h1>
            <p>{data.memo}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
