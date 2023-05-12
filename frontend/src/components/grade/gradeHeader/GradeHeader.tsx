interface Student {
  name: string;
  session: string;
}

export const GradeHeader = (props: { student: Student }) => {
  const { student } = props;

  return (
    <>
      <h3>{student.name}</h3>
      <div>{student.session}</div>
    </>
  );
};
