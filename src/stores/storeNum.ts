

import { create } from 'zustand'

type tNumStates = { // ce type ne sert qu'ici, et n'a pas besoin d'être exporté
  priceMin: number;
  priceMax: number;
}

type tNumFuncs = {
  incNum: (nom: keyof tNumStates) => void; // incrémentation
  setNum: (nom: keyof tNumStates, val: number) => void;
}

const etatOrigine: tNumStates = {
  priceMin: 0,
  priceMax: 1000,
}

export const useStoreNum = create<tNumStates & tNumFuncs>((set) => ({
  ...etatOrigine,
  incNum: (nom) => set((state) => ({ ...state, [nom] : state[nom]  + 1 })),
  setNum: (nom, val) => set((state) => ({ ...state, [nom] : val })),
}))
