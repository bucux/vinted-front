

import { create } from 'zustand'

type tStrStates = { // ce type ne sert qu'ici, et n'a pas besoin d'être exporté
  str1: string
  str2: string
}

type tStrFuncs = { // ce type ne sert qu'ici, et n'a pas besoin d'être exporté
  setStr: (nom: keyof tStrStates, val: string) => void;
}

const etatOrigine: tStrStates = {
  str1: "",
  str2: "",
}

export const useStoreStr = create<tStrStates & tStrFuncs>((set) => ({
  ...etatOrigine,
  setStr: (nom, val) => set((state) => ({ ...state, [nom] : val })),
}))
