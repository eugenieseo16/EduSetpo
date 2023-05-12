import { useLocation } from "react-router-dom";

import Modal from "../../components/common/modal/Modal";

export const Home = () => {
  const location = useLocation().pathname.split("/")[1];
  return (
    <div>
      <h1>heading1 텍스트 입니다</h1>
      <h2>heading2 텍스트 입니다</h2>
      <h3>heading3 텍스트 입니다</h3>
      <h4>heading4 텍스트 입니다</h4>
      <h5>heading5 텍스트 입니다</h5>
      <h6>heading6 텍스트 입니다</h6>
      <p>paragraph 텍스트 입니다</p>
      <span>span 텍스트 입니다.</span>
      <br />
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
