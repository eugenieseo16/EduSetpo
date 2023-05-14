import { tutorThemeApi } from "../../../api/tutorApis";
import { ShortButtonFixed } from "../../../components/common/button/Button";
import { TutorLoginForm } from "../../../components/login/TutorLoginForm/TutorLoginForm";


export const TutorLogin = () => {
  // async function test(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const body = {
  //     themeIndex: 3
  //   }
  //   try {
  //     console.log(localStorage.getItem("access_token"));
  //     const response = await tutorThemeApi(body, localStorage.getItem("access_token"));
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <>
      <div>
        강사 로그인페이지
      </div>
      <TutorLoginForm />
      {/* <ShortButtonFixed onClick={test}>체크용</ShortButtonFixed> */}
    </>
  );
};