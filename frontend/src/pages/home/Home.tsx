import { useLocation } from "react-router-dom";

import Modal from "../../components/modal/Modal";

export const Home = () => {
  const location = useLocation().pathname.split("/")[1];
  return (
    <div>
      강사, 부모 홈페이지에 공통으로 들어갈 컴포넌트들 넣어주
      {location == "tutor" ? (
        <div>
          <p>튜터의 홈 페이지에 들어갈 컴포넌트들 넣어주...</p>
          <Modal text={"버튼 이름"} />
        </div>
      ) : (
        <div>학부모의 홈 페이지에 들어갈 컴포넌트들 넣어주...</div>
      )}
    </div>
  );
};
