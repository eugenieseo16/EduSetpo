import style from './CheckList.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useCheckListMake } from './useCheckListMake';
import { ShortButtonHug } from '../../common/button/Button';

interface BoardProps {
  headRow: string[];
  grid: string;
  data?: any[];
  url?: string;
  type: 'homework' | 'session';
}

export const CheckList = ({ headRow, grid, data, type }: BoardProps) => {
  return (
    <>
      {headRow.length !== 0 && (
        <div
          className={style.header_container}
          style={{
            gridTemplateColumns: grid,
            animation: '0.7s ease-in-out loadEffect2',
          }}
        >
          {headRow.map(content => {
            return (
              <div
                key={uuidv4()}
                style={headRow.length > 4 ? { fontSize: '0.85rem' } : undefined}
              >
                {content}
              </div>
            );
          })}
        </div>
      )}
      {data?.map((content, i) => {
        return (
          <div
            key={uuidv4()}
            className={style.content_container}
            style={{ gridTemplateColumns: grid }}
          >
            {useCheckListMake(type, content).map((contentRow: any) => {
              return (
                <div
                  style={{
                    animation: `${(i + 1) * 0.3}s ease-in-out loadEffect3`,
                  }}
                  key={uuidv4()}
                >
                  {contentRow}
                </div>
              );
            })}
          </div>
        );
      })}
      {type === 'homework' ? (
        <>
          <input type="text" name="" id="" />
          <ShortButtonHug>숙제 추가</ShortButtonHug>
        </>
      ) : null}
    </>
  );
};
