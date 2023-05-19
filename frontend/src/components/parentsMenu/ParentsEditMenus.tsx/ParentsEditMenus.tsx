import style from './ParentsEditMenus.module.scss';
import { ParentsEditMenu } from '../ParentsEditMenu/ParentsEditMenu';

export const ParentsEditMenus: React.FC = () => {
  return (
    <div className={style.MenusWrapper}>
      <ParentsEditMenu menuName="비밀번호 변경" />
      <ParentsEditMenu menuName="계정 관리" />
      <ParentsEditMenu menuName="회원탈퇴" />
    </div>
  );
};
