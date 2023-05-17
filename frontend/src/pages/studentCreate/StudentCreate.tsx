import { useNavigate } from 'react-router-dom';
import { LongButton } from '../../components/common/button/Button';
import { useState } from 'react';
import style from './StudentCreate.module.scss';
import { Student, StudentRequest } from '../../types/student';
import { useRecoilValue } from 'recoil';
import { tutorInfoState } from '../../atoms/user.atom';
import { createStudentApi } from '../../api/studentApis';

export const StudentCreate = () => {
  const navigate = useNavigate();
  const onClickSubmit = () => {
    createStudent();
    navigate(-1);
  };
  const [newStudentContact, setNewStudentContact] = useState('');
  const [newParentContact, setNewParentContact] = useState('');
  const [newStudentName, setNewStudentName] = useState('');
  const userInfo = useRecoilValue(tutorInfoState);
  const tutorId: number = userInfo.tutorId;

  async function createStudent() {
    const body: StudentRequest = {
      tutorId: tutorId,
      studentName: newStudentName,
      studentContact: newStudentContact,
      parentContact: newParentContact,
      isActive: true,
    };

    await createStudentApi(body);
  }

  return (
    <div>
      <h1>👨‍🎓학생 추가👩‍🎓</h1>
      <div className={style.createContainer}>
        <div>🎒 학생 이름 :</div>
        <input
          className={style.newInput}
          type="text"
          value={newStudentName}
          placeholder="서삼이"
          onChange={e => setNewStudentName(e.target.value)}
        />
      </div>
      <div className={style.createContainer}>
        <div>📞 학생 전화번호 :</div>
        <input
          className={style.newInput}
          type="text"
          value={newStudentContact}
          placeholder="010-XXXX-XXXX"
          onChange={e => setNewStudentContact(e.target.value)}
        />
      </div>
      <div className={style.createContainer}>
        <div>📞 학부모 전화번호 :</div>
        <input
          className={style.newInput}
          type="text"
          value={newParentContact}
          placeholder="010-XXXX-XXXX"
          onChange={e => setNewParentContact(e.target.value)}
        />
      </div>
      <LongButton variant="success" onClick={onClickSubmit}>
        등록하기
      </LongButton>
    </div>
  );
};
