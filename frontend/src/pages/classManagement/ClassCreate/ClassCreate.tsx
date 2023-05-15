import { ClassForm } from '../../../components/classCreate/ClassForm';

export const ClassCreate = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <div>
      <ClassForm />
    </div>
  );
};
