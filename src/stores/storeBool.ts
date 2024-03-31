
import { create } from 'zustand'

type tBoolStates = { // ce type ne sert qu'ici, et n'a pas besoin d'être exporté
  isLoginOpened: boolean;
  isSignupOpened: boolean;
  isSearch: boolean
}

type tBoolFuncs = {
  setBool: (nom: keyof tBoolStates, bool: boolean) => void; // définit la valeur du booléen
  switchBool: (nom: keyof tBoolStates) => void; // inverse la valeur du booléen
}

const etatOrigine: tBoolStates = {
  isLoginOpened: false,
  isSignupOpened: false,
  isSearch: false,
}

export const useStoreBool = create<tBoolStates & tBoolFuncs>((set) => ({
  ...etatOrigine,
  setBool: (nom, bool) => set((state) => ({ ...state, [nom] : bool })),
  switchBool: (nom) => set((state) => ({ ...state, [nom] : !state[nom] })),
}))
