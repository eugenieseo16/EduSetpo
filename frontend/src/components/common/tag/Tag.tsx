<<<<<<< HEAD
import style from "./Tag.module.scss";
=======
import style from './Tag.module.scss';
>>>>>>> 2bc0ff55ad519027dae24a350aa298f68eeef724

type Props = {
  name: string;
  idx: number;
};

export const Tag: React.FC<Props> = ({ idx, name, ...props }) => {
  const colors = [
<<<<<<< HEAD
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
=======
    '#F1F0EF',
    '#E3E2E0',
    '#EEE0DA',
    '#FADEC9',
    '#FDECC8',
    '#DBEDDB',
    '#D3E5EF',
    '#E8DEEE',
    '#F5E0E9',
    '#FFE2DD',
>>>>>>> 2bc0ff55ad519027dae24a350aa298f68eeef724
  ];

  return (
    <div
      className={style.tag}
<<<<<<< HEAD
      style={{ backgroundColor: colors[idx] }}
      {...props}
    >
      {name}
=======
      style={{ backgroundColor: colors[idx % 10] }}
      {...props}
    >
      <span>{name}</span>
>>>>>>> 2bc0ff55ad519027dae24a350aa298f68eeef724
    </div>
  );
};
