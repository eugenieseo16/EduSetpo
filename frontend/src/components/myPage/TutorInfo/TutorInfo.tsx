import style from "./TutorInfo.module.scss";

export const TutorInfo: React.FC = () => {
  // const name = useState<string>("서유진");
  // const email = useState("dbwls@gmail.com");

  return (
    <div className={style.InfoBox}>
      <div className={style.TutorName}>서유진 강사님</div>
      <div className={style.TutorMail}>dbwls@gmail.com</div>
    </div>
  );
};
