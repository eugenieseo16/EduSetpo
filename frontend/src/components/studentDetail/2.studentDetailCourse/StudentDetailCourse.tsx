import { ShortButtonHug } from "../../common/button/Button";
import { Tag } from "../../common/tag/Tag";
import { useState } from "react";

export const StudentDetailCourse = () => {
  const [colorIdxList, setColorIdxList] = useState([]);

  return (
    <div>
      <h2>수강 과목</h2>
      <ShortButtonHug>영어-내신</ShortButtonHug>
      {/* <Tag name={"영어-내신"} style={{ backgroundColor: colors[1] }}></Tag> */}
      {/* <Tag name={"영어-내신"} idx={1}></Tag> */}
      <Tag name={"영어"} idx={1}></Tag>
      <ShortButtonHug>수학II</ShortButtonHug>
    </div>
  );
};
