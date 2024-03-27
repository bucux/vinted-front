

import { create } from 'zustand'

type tNumStates = { // ce type ne sert qu'ici, et n'a pas besoin d'être exporté
  num1: number;
  num2: number;
}

type tNumFuncs = {
  incNum: (nom: keyof tNumStates) => void; // incrémentation
  setNum: (nom: keyof tNumStates, val: number) => void;
}

const etatOrigine: tNumStates = {
  num1: 0,
  num2: 0,
}

export const useStoreNum = create<tNumStates & tNumFuncs>((set) => ({
  ...etatOrigine,
  incNum: (nom) => set((state) => ({ ...state, [nom] : state[nom]  + 1 })),
  setNum: (nom, val) => set((state) => ({ ...state, [nom] : val })),
}))
