import { Tag } from "../../common/tag/Tag";
import style from "./StudentDetailCourse.module.scss";

export const StudentDetailCourse = () => {
  return (
    <div>
      <h2 className={style.column}>수강 과목</h2>
      <div className={style.column}>
        <Tag name={"영어-내신"} idx={3}></Tag>
        <Tag name={"과목 태그어ㅉ쩌구"} idx={1}></Tag>
      </div>
    </div>
  );
};
