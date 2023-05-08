import { ShortButtonHug } from "../../common/button/Button";
import { Tag } from "../../common/tag/tag";

export const StudentDetailCourse = () => {
  return (
    <div>
      <h2>수강 과목</h2>
      <ShortButtonHug>영어-내신</ShortButtonHug>
      <Tag name={"영어-내신"} color={"#6FCF97"}></Tag>
      <ShortButtonHug>수학II</ShortButtonHug>
    </div>
  );
};
