


import './css/offer.css'

import { useEffect } from "react";
import { getAxios } from '../../libs/axios';
import { useStoreObj } from '../../stores/storeObj';
import { useStoreStr } from '../../stores/storeStr';
import Article2 from '../sections/article2';
import Carrousel1 from '../carroussels/carroussel1';

export default function Offer() {

  const idOffer = useStoreStr(state => state.idOffer)
  const setObj = useStoreObj(state => state.setObj)
  const offer = useStoreObj(state => state.offer)
  
  const fetchOffer = async () => {
    const suffixe = 'offer/' + idOffer
    const data = await getAxios(suffixe)
    if(data){ setObj('offer', data)}
  }
  
  useEffect(()=>{ fetchOffer() }, [idOffer]) 

  if(offer){
    return (
      <div className='offer-cont0'>
        <Carrousel1 images={offer.product_pictures}/>
        <Article2 offer={offer}/>
      </div>
    )
  } else {return null}

}
