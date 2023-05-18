import style from './Tag.module.scss';
import { RiCloseFill } from 'react-icons/ri';
import { useState } from 'react';

type Props = {
  name: string;
  idx: number;
};

export const Tag: React.FC<Props> = ({ idx, name, ...props }) => {
  const colors = [
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
  ];

  const [toggle, setToggle] = useState(false);

  const test = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={style.tag}
      style={{ backgroundColor: colors[idx % 10] }}
      {...props}
      onMouseEnter={test}
      onMouseLeave={test}
    >
      <div>{name}</div>
      {toggle ? <RiCloseFill /> : null}
      {/* <RiCloseFill className={!toggle ? style.xCircle : style.xCircleHover} /> */}
    </div>
  );
};
