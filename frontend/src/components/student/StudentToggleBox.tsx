import style from './StudentToggleBox.module.scss';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiCloseCircleFill, RiAddCircleFill } from 'react-icons/ri';

interface StudentProps {
  studentName: string;
  isAdd: boolean;
}

export const StudentToggleBox: React.FC<StudentProps> = ({
  studentName,
  isAdd,
}) => {
  return (
    <div>
      {isAdd ? (
        <div>
          <div className={style.column}>
            <div className={style.justColumn}>
              <BsFillPersonFill className={style.personIcon} />
              <div>{studentName}</div>
            </div>
            <RiAddCircleFill color="#3d5a80" />
          </div>
          <hr />
        </div>
      ) : (
        <div>
          <div className={style.column}>
            <div className={style.justColumn}>
              <BsFillPersonFill className={style.personIcon} />
              <div>{studentName}</div>
            </div>
            <RiCloseCircleFill color="#ee6c4d" />
          </div>
          <hr />
        </div>
      )}
    </div>
  );
};
