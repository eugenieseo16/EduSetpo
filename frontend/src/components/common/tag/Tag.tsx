import style from './Tag.module.scss';

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

  return (
    <div
      className={style.tag}
      style={{ backgroundColor: colors[idx % 10] }}
      {...props}
    >
      <span>{name}</span>
    </div>
  );
};
