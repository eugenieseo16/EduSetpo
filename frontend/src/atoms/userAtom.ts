import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../types/types';

const userAtom = atom<IUser | null>({
  key: `userAtomKey_${uuidv4()}`,
  default: null,
});

export default userAtom;
