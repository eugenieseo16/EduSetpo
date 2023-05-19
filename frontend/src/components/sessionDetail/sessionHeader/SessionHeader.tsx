import style from './SessionHeader.module.css';
import { useEffect, useState } from 'react';
import { toggleSessionApi } from '../../../api/sessionApis';

interface SessionHeaderProps {
  sessionId: number;
  isCompleted: boolean;
  lessonName: string;
  // completeSession: any;
}

export const SessionHeader = ({
  sessionId,
  isCompleted,
  lessonName,
}: // completeSession,
SessionHeaderProps) => {
  const [completed, setCompleted] = useState(isCompleted);

  const completeSession = () => {
    const updatedCompleted = !completed;
    setCompleted(updatedCompleted);
    toggleSessionApi(sessionId, { isCompleted: completed });
  };

  return (
    <div className={style.sessionHeader}>
      <input type="checkbox" onChange={completeSession} checked={completed} />
      <div className={style.sessionInfo}>
        <h1>{lessonName}</h1>
      </div>
    </div>
  );
};
