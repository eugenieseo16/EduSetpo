import { LongButton } from "../../components/common/button/Button";
import { useState } from "react";
import style from "./StudentList.module.scss";
import { useNavigate } from "react-router-dom";

export const StudentList = () => {
  const navigate = useNavigate();
  const [addList, setAddList] = useState(["name4"]);
  const [studentList, setStudentList] = useState(["name1", "name2", "name3"]);
  const onClickAdd = () => {
    navigate("../studentadd");
  };
  return (
    <div>
      {addList.map((data, index) => {
        return (
          <div key={index} className={style.column}>
            <div>{data}</div>
            <div>X</div>
          </div>
        );
      })}
      {studentList.map((data, index) => {
        return (
          <div key={index} className={style.column}>
            <div>{data}</div>
            <div>O</div>
          </div>
        );
      })}

      <LongButton onClick={onClickAdd}>학생 추가</LongButton>
    </div>
  );
};
