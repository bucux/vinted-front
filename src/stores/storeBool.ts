
import { create } from 'zustand'

export type tBoolStates = { // ce type sert à l'extérieur, pour vérifier si le nom de la variable est une clé de cet objet
  isLoginOpened: boolean;
  isSignupOpened: boolean;
  isSearch: boolean,
  isSort: boolean,
}

type tBoolFuncs = {
  setBool: (nom: keyof tBoolStates, bool: boolean) => void; // définit la valeur du booléen
  switchBool: (nom: keyof tBoolStates) => void; // inverse la valeur du booléen
}

const etatOrigine: tBoolStates = {
  isLoginOpened: false,
  isSignupOpened: false,
  isSearch: false,
  isSort: false,
}

export const useStoreBool = create<tBoolStates & tBoolFuncs>((set) => ({
  ...etatOrigine,
  setBool: (nom, bool) => set((state) => ({ ...state, [nom] : bool })),
  switchBool: (nom) => set((state) => ({ ...state, [nom] : !state[nom] })),
}))
