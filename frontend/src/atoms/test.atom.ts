// 폴더 생성 유지를 위한 파일 입니다. 개발 시작 후 삭제하도록 하겠습니다.

import { atom } from "recoil";

interface broadcastStateType {
  operation: string;
  dataType: string;
  dataLength: number;
}

export const broadcastState = atom<broadcastStateType>({
  key: "broadcastOperationState",
  default: {
    operation: "ON AIR",
    dataType: "",
    dataLength: 0,
  },
});
