import style from "./Tag.module.scss";

type Props = {
  name: string;
  idx: number;
};

export const Tag: React.FC<Props> = ({ idx, name, ...props }) => {
  const colors = [
    "#6FCF97",
    "#56CCF2",
    "#2D9CDB",
    "#EB5757",
    "#F2C94C",
    "#BB6BD9",
    "#FF9F43",
    "#4D4D4D",
    "#BDBDBD",
    "#6E7B8B",
  ];

  return (
    <div
      className={style.tag}
      style={{ backgroundColor: colors[idx] }}
      {...props}
    >
      {name}
    </div>
  );
};
