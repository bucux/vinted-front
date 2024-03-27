

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type tObjStates = {
  monObj1: { id: string; name: string };
  monObj2: { nom: string; age: number };
};

type tObjFuncs = {
  setObj: <K extends keyof tObjStates>(nom: K, val: tObjStates[K]) => void;
};

const etatOrigine: tObjStates = {
  monObj1: { id: 'abcde', name: 'emmanuel' },
  monObj2: { nom: 'macron', age: 48 },
};

export const useStoreObj = create<tObjStates & tObjFuncs>()(
  immer((set) => ({
    ...etatOrigine,
    setObj: (nom, val) => set((state: tObjStates) => { state[nom] = val}),
  }))
);
