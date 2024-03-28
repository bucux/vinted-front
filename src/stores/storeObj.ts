

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Toffer } from '../libs/types';

type tObjStates = {
  offer: Toffer | null; // offre en cours de consultation
  monObj2: { nom: string; age: number };
};

type tObjFuncs = {
  setObj: <K extends keyof tObjStates>(nom: K, val: tObjStates[K]) => void;
};

const etatOrigine: tObjStates = {
  offer: null,
  monObj2: { nom: 'macron', age: 48 },
};

export const useStoreObj = create<tObjStates & tObjFuncs>()(
  immer((set) => ({
    ...etatOrigine,
    setObj: (nom, val) => set((state: tObjStates) => { state[nom] = val}),
  }))
);
