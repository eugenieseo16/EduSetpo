import { useState } from "react";
import { ShortButtonHug } from "../../common/button/Button";
import { Tag } from "../../common/tag/Tag";

export const StudentDetailCourse = () => {
  const [colorIdxList, setColorIdxList] = useState([]);

  return (
    <div>
      <h2>수강 과목</h2>
      <div>
        <Tag name={"영어-내신"} idx={3}></Tag>
        <Tag name={"과목 태그어ㅉ쩌구"} idx={1}></Tag>
      </div>
    </div>
  );
};
