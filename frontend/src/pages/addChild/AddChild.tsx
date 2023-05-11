import { AddChildBox } from '../../components/addchild/addChildBox/AddChildBox';
import style from './AddChild.module.scss';

export const AddChild = () => {
  return (
    <div>
      <h2>아이 추가</h2>
      <div>
        <p>인증코드 입력 창</p>
        <AddChildBox></AddChildBox>
      </div>
    </div>
  );
};
