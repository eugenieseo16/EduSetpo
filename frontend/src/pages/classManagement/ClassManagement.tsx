import style from "./ClassManagement.module.scss";
import { Tag } from "../../components/common/tag/tag";

export const ClassManagement = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ backgroundColor: "pink", width: "380px" }}>
        <h1>수학II</h1>
        <p>월, 목 15:00 ~ 17:00</p>

        <div style={{ display: "flex" }}>
          <Tag name="세명중학교" idx={1} />
          <Tag name="중2" idx={2} />
        </div>
      </div>
    </div>
  );
};
