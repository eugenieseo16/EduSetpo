import { useState } from 'react';
import style from './Session.module.scss';

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

export const Session = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const [toggleOpen, setToggleOpen] = useState(false);

  function toggleSessionList() {
    setToggleOpen(!toggleOpen);
  }

  return (
    <>
      <div className={style.sessionContainer} onClick={toggleSessionList}>
        <h3>{currentMonth}월 회차</h3>
        {toggleOpen ? (
          <IoMdArrowDropup size="2rem" />
        ) : (
          <IoMdArrowDropdown size="2rem" />
        )}
      </div>

      {toggleOpen ? (
        <div>
          <h6>session1</h6>
          <h6>session1</h6>
          <h6>session1</h6>
          <h6>session1</h6>
        </div>
      ) : null}
    </>
  );
};
