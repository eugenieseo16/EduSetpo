import style from './StudentToggleBox.module.scss';
import { useState } from 'react';
import {
  RiCloseCircleFill,
  RiAddCircleFill,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiUserFill,
} from 'react-icons/ri';
import { Student } from '../../../types/student';
import { StudentInput } from '../studentInput/StudentInput';
import { updateStudentApi } from '../../../api/studentApis';
import { useRecoilValue } from 'recoil';
import { tutorInfoState } from '../../../atoms/user.atom';

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
  const tutorId = userInfo.tutorId;
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [set, setSet] = useState<boolean>(false);
  const [newStudentContact, setNewStudentContact] = useState(
    studentInfo.studentContact
  );
  const [newParentContact, setNewParentContact] = useState(
    studentInfo.parentContact
  );
  const [newStudentName, setNewStudentName] = useState(studentInfo.studentName);

  const btnClick = () => {
    if (!set) {
      setIsClicked(!isClicked);
    }
  };

  const setClick = () => {
    setSet(!set);
    if (!set) {
      setIsClicked(true);
    }
    if (set) {
      // 여기서 수정 api 호출
      updateStudent();
    }

    async function updateStudent() {
      try {
        const result = await updateStudentApi({
          tutorId: tutorId,
          studentName: newStudentName,
          studentContact: newStudentContact,
          parentContact: newParentContact,
        });
        console.log(result, 'result');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      {isAdd ? (
        <div>
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
                <input className={style.nameInput} value={newStudentName} />
              )}
            </div>
            <div className={style.btnBox}>
              <button
                className={
                  studentInfo.isActive ? style.btnWarning : style.btnWarningRev
                }
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
              <RiAddCircleFill color="#3d5a80" />
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
                    <StudentInput studentInfo={studentInfo} isStudent={true} />
                    <StudentInput studentInfo={studentInfo} isStudent={false} />
                  </>
                )}
              </div>
            </div>
          ) : null}
          <hr />
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
