
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Toffer, Toffers } from '../libs/types';

type tOffersState = { // ce type ne sert qu'ici, et n'a pas besoin d'être exporté
  offers: Toffers | null;
  setOffers : (newOffers: Toffers) => void;
  addOffer: (offer: Toffer) => void;
};

export const useStoreOffers = create<tOffersState>()( // version avec immer
  immer((set) => ({
    offers: null,
    setOffers: ( offers ) => set(state => { state.offers = offers}),
    addOffer: ( offer ) => set(state => {
      if(state.offers){ // si offers non nul
        state.offers.offers.push(offer) 
      }
    })
  }
)));

// exemples d'utilisation : 

// const idTexte = useStoreNum(state=>state.idTexteEnCours)
// const fiche = useStoreBiblio(state=>state.biblio.find(item=>item.idTexte == idTexte))! 
// const setNum = useStoreNum(state=>state.setNum)