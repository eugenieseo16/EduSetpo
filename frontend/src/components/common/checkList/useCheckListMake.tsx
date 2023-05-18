import { CompleteHomework } from '../../../api/homeworkApis';
import { useState } from 'react';

import style from './CheckList.module.css';

export function useCheckListMake(type: string, data: any): JSX.Element[] {
  const arr = [];

  if (type === 'homework') {
    const [completed, setCompleted] = useState(data.isCompleted);

    const onIsCompleted = () => {
      const updatedCompleted = !completed;
      setCompleted(updatedCompleted);
      CompleteHomework(data.homeworkId);
    };
    arr.push(
      <input type="checkbox" checked={completed} onChange={onIsCompleted} />
    );
    arr.push(
      <span className={completed ? style.com : style.yet}>{data.content}</span>
    );
  }

  if (type === 'session') {
    const onIsCompleted = () => {
      // session 완료 API 연결하시면 됩니당
      // 아래 input태그의 checked 값도 session 완료 변수명 맞춰서 변경해주시면 됩니단
    };
    arr.push(
      <input
        type="checkbox"
        checked={data.isCompleted}
        onChange={onIsCompleted}
      />
    );
    arr.push(<span>{data.content}</span>);
    arr.push(<select>{data.session}</select>);
  }

  return arr;
}
