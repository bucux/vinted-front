

import { create } from 'zustand'

type tStrStates = { // ce type ne sert qu'ici, et n'a pas besoin d'être exporté
  idOffer: string // id de l'offre en cours de consultation
  token: string // token de connexion
}

type tStrFuncs = { // ce type ne sert qu'ici, et n'a pas besoin d'être exporté
  setStr: (nom: keyof tStrStates, val: string) => void;
}

const etatOrigine: tStrStates = {
  idOffer: "",
  token: "",
}

export const useStoreStr = create<tStrStates & tStrFuncs>((set) => ({
  ...etatOrigine,
  setStr: (nom, val) => set((state) => ({ ...state, [nom] : val })),
}))
