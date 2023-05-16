import style from './SessionHeader.module.css';
import { useEffect, useState } from 'react';

export const SessionHeader = ({
  isCompleted,
  lessonName,
}: {
  isCompleted: boolean;
  lessonName: string;
}) => {
  const completeSession = () => {
    // 세션 토글 API 연결
  };

  return (
    <div className={style.sessionHeader}>
      <input type="checkbox" onChange={completeSession} checked={isCompleted} />
      <div className={style.sessionInfo}>
        <h1>
          {lessonName} - {3}/{12} 회차
        </h1>
      </div>
    </div>
  );
};
