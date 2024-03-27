


import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type FicheTexte = {
  idTexte : number,
  auteur : string,
  gloses : string[],
  texte : string,
}

type tBiblioState = { // ce type ne sert qu'ici, et n'a pas besoin d'être exporté
  biblio: FicheTexte[];
  addBiblio: (idTexte: number, texte: string) => void;
  completeBiblio: (idTexte: number, auteur: string, gloses: string[]) => void;
};

export const useStoreBiblio = create<tBiblioState>()( // version avec immer
  immer((set) => ({
    biblio: [],
    addBiblio: (idTexte, texte) => set((state) => {
      state.biblio.push({ idTexte, texte, gloses: [], auteur: ''}); 
    }),
    completeBiblio: (idTexte, auteur, gloses) => set((state) => {
      const fiche = state.biblio.find(fiche => fiche.idTexte === idTexte);
      if (fiche) {
        fiche.auteur = auteur;
        fiche.gloses = gloses;
      }
    }),
  }
)));

// exemples d'utilisation : 

// const idTexte = useStoreNum(state=>state.idTexteEnCours)
// const fiche = useStoreBiblio(state=>state.biblio.find(item=>item.idTexte == idTexte))! 
// const setNum = useStoreNum(state=>state.setNum)