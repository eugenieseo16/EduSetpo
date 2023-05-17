import style from './CheckList.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useCheckListMake } from './useCheckListMake';
import { ShortButtonHug } from '../../common/button/Button';
import { PostHomework } from '../../../api/homeworkApis';
import { useState } from 'react';

interface CheckListProps {
  headRow: string[];
  grid: string;
  data?: any[];
  url?: string;
  type: 'homework' | 'session';
  sessionId?: number | undefined; // sessionId 속성 추가
  studentId?: number | undefined; // studentId 속성 추가
}

export const CheckList = ({
  headRow,
  grid,
  data,
  type,
  sessionId,
  studentId,
}: CheckListProps) => {
  const [content, setContent] = useState<string>();
  const addHomework = () => {
    console.log('숙제 추가!');
    console.log(content);
    if (
      sessionId != undefined &&
      studentId != undefined &&
      content != undefined
    )
      PostHomework({ content, sessionId, studentId });
    setContent('');
  };

  return (
    <>
      {headRow.length !== 0 && (
        <div
          className={style.header_container}
          style={{
            gridTemplateColumns: grid,
            animation: '0.7s ease-in-out loadEffect2',
          }}
        >
          {headRow.map(content => {
            return (
              <div
                key={uuidv4()}
                style={headRow.length > 4 ? { fontSize: '0.85rem' } : undefined}
              >
                {content}
              </div>
            );
          })}
        </div>
      )}
      {data?.map((content, i) => {
        return (
          <div
            key={uuidv4()}
            className={style.content_container}
            style={{ gridTemplateColumns: grid }}
          >
            {useCheckListMake(type, content).map((contentRow: any) => {
              return (
                <span
                  style={{
                    animation: `${(i + 1) * 0.3}s ease-in-out loadEffect3`,
                  }}
                  key={uuidv4()}
                >
                  {contentRow}
                </span>
              );
            })}
          </div>
        );
      })}
      {type === 'homework' ? (
        <>
          <input
            type="text"
            value={content}
            onChange={event =>
              setContent((event.target as HTMLInputElement).value)
            }
          />
          <ShortButtonHug onClick={addHomework}>숙제 추가</ShortButtonHug>
        </>
      ) : null}
    </>
  );
};
