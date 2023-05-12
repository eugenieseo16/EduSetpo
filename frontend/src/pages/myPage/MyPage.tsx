import { useLocation } from "react-router-dom";
import { TutorInfoBar } from "../../components/myPage/TutorInfoBar/TutorInfoBar";
import { TutorMenus } from "../../components/myPage/TutorMenus/TutorMenus";

export const MyPage = () => {
  const location = useLocation().pathname.split("/")[1];

  return (
    <div>
      {location == "tutor" ? (
        <>
          <TutorInfoBar />
          <TutorMenus />
        </>
      ) : (
        <div>학부모의 마이 페이지에 들어갈 컴포넌트들 넣어주...</div>
      )}
    </div>
  );
};
