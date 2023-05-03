import { useLocation } from "react-router-dom";

export const MyPage = () => {
  const location = useLocation().pathname.split("/")[1];

  return (
    <div>
      강사, 부모 마이페이지에 공통으로 들어갈 컴포넌트들 넣어주
      {location == "tutor" ? (
        <div>튜터의 마이 페이지에 들어갈 컴포넌트들 넣어주...</div>
      ) : (
        <div>학부모의 마이 페이지에 들어갈 컴포넌트들 넣어주...</div>
      )}
    </div>
  );
};
