import style from './MWToggler.module.scss';
import { mwState } from '../../../atoms';
import { useRecoilState } from 'recoil';

export const MWToggler: React.FC = () => {
  const [mw, setMw] = useRecoilState(mwState);

  return (
    <>
      <div className={style.togglerWrapper}>
        <div
          className={mw === 'W' ? style.weekBtnActive : style.weekBtn}
          onClick={() => setMw('W')}
        >
          주
        </div>
        <div
          className={mw === 'M' ? style.monthBtnActive : style.monthBtn}
          onClick={() => setMw('M')}
        >
          월
        </div>
      </div>
    </>
  );
};
