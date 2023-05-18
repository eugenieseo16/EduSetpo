import style from './StudentToggleBox.module.scss';
import { useState } from 'react';
import {
  RiCloseCircleFill,
  RiAddCircleFill,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiUserFill,
} from 'react-icons/ri';
import { Student, StudentToggle, StudentUpdate } from '../../../types/student';
import { toggleStudentApi, updateStudentApi } from '../../../api/studentApis';
import { useRecoilValue } from 'recoil';
import { tutorInfoState } from '../../../atoms/user.atom';
import { useNavigate } from 'react-router-dom';

interface StudentProps {
  studentInfo: Student;
  isAdd: boolean;
  isSetting?: boolean;
}

export const StudentToggleBox: React.FC<StudentProps> = ({
  studentInfo,
  isAdd,
  isSetting,
}) => {
  const userInfo = useRecoilValue(tutorInfoState);
  const tutorId: number = userInfo.tutorId;
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [set, setSet] = useState<boolean>(false);
  const navigate = useNavigate();
  const [newStudentContact, setNewStudentContact] = useState(
    studentInfo.studentContact
  );
  const [newParentContact, setNewParentContact] = useState(
    studentInfo.parentContact
  );
  const [newStudentName, setNewStudentName] = useState(studentInfo.studentName);

  const [newIsActive, setNewIsActive] = useState(studentInfo.isActive);

  const btnClick = () => {
    if (!set) {
      setIsClicked(!isClicked);
    }
  };

  const toDetail = () => {
    navigate(`../student/${studentInfo.studentId}`);
  };

  async function toggleUpdate() {
    const body: StudentToggle = {
      isActive: newIsActive,
      tutorId: tutorId,
    };
    try {
      const result = await toggleStudentApi(body, studentInfo.studentId);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
  const toggleIsActive = () => {
    setNewIsActive(!newIsActive);
    console.log('클릭');
    toggleUpdate();
  };

  const setClick = () => {
    setSet(!set);
    if (!set) {
      setIsClicked(true);
    }
    if (set) {
      // 여기서 수정 api 호출
      updateStudent();
      console.log(studentInfo.studentId, '스튜아이디');
    }

    async function updateStudent() {
      const body: StudentUpdate = {
        tutorId: tutorId,
        studentName: newStudentName,
        studentContact: newStudentContact,
        parentContact: newParentContact,
      };
      console.log(body);
      try {
        const result = await updateStudentApi(body, studentInfo.studentId);
        console.log(result, 'result');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      {isAdd ? (
        <div className={style.studentContainer}>
          <div className={style.column}>
            <div className={style.justColumn}>
              <RiUserFill className={style.personIcon} />
              {set ? (
                <input
                  className={style.nameInput}
                  value={newStudentName}
                  onChange={e => setNewStudentName(e.target.value)}
                />
              ) : (
                <div className={style.nameDiv} onClick={toDetail}>
                  {newStudentName}
                </div>
              )}
            </div>
            <div className={style.btnBox}>
              <button
                className={newIsActive ? style.btnWarning : style.btnWarningRev}
                onClick={toggleIsActive}
              >
                비활성화
              </button>
              <button
                className={set ? style.btnSuccess : style.btnPrimary}
                onClick={setClick}
              >
                {set ? '저장' : '수정'}
              </button>
            </div>
            {isSetting ? (
              <RiAddCircleFill className={style.circleFill} />
            ) : isClicked ? (
              <RiArrowUpSLine onClick={btnClick} className={style.toggleBtn} />
            ) : (
              <RiArrowDownSLine
                onClick={btnClick}
                className={style.toggleBtn}
              />
            )}
          </div>
          {isClicked ? (
            <div>
              <div className={style.phoneNumber}>
                {set ? (
                  <>
                    <div className={style.justColumn}>
                      <div>
                        <div className={style.inputMsg}>학생 연락처</div>
                        <input
                          className={style.nickInput}
                          value={newStudentContact}
                          onChange={e => setNewStudentContact(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className={style.justColumn}>
                      <div>
                        <div className={style.inputMsg}>학부모 연락처</div>
                        <input
                          className={style.nickInput}
                          value={newParentContact}
                          onChange={e => setNewParentContact(e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={style.justColumn}>
                      <div>
                        <div className={style.inputMsg}>학생 연락처</div>
                        <div className={style.nickDiv}>
                          {newStudentContact}{' '}
                        </div>
                      </div>
                    </div>
                    <div className={style.justColumn}>
                      <div>
                        <div className={style.inputMsg}>학부모 연락처</div>
                        <div className={style.nickDiv}>{newParentContact}</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div>
          <div className={style.column}>
            <div className={style.justColumn}>
              <RiUserFill className={style.personIcon} />
              <div>{studentInfo.studentName}</div>
            </div>
            <RiCloseCircleFill color="#ee6c4d" />
          </div>
          <hr />
        </div>
      )}
    </div>
  );
};
