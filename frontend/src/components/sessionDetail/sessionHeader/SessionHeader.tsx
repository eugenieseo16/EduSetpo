import style from './SessionHeader.module.css';
import { useEffect, useState } from 'react';
import { toggleSessionApi } from '../../../api/sessionApis';

interface SessionHeaderProps {
  isCompleted: boolean;
  lessonName: string;
  completeSession: any;
}

export const SessionHeader = ({
  isCompleted,
  lessonName,
  completeSession,
}: SessionHeaderProps) => {
  return (
    <div className={style.sessionHeader}>
      <input type="checkbox" onClick={completeSession} checked={isCompleted} />
      <div className={style.sessionInfo}>
        <h1>{lessonName}</h1>
      </div>
    </div>
  );
};
