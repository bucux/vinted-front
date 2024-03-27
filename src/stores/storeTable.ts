
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type tTableStates = {
  tab1: number[],
  tab2: {nom: string, age: number}[];
};

type tObjFuncs = {
  setTable: <K extends keyof tTableStates>(nom: K, val: tTableStates[K]) => void; // Force la cohérence entre le nom de l'objet et son type
};

const etatOrigine: tTableStates = {
  tab1: [1, 2, 3],
  tab2: [{nom: 'jean', age: 8}],
};

export const useStoreTable = create<tTableStates & tObjFuncs>()(
  immer((set) => ({
    ...etatOrigine,
    setTable: (nom, val) => set((state : tTableStates) => { state[nom] = val }),
  }
)));