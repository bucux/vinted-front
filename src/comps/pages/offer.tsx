


import './css/offer.css'

import { useEffect } from "react";
import { fetchAxios } from '../../libs/axios';
import { useStoreObj } from '../../stores/storeObj';
import { useStoreStr } from '../../stores/storeStr';

export default function Offer() {

  const idOffer = useStoreStr(state => state.idOffer)
  const setObj = useStoreObj(state => state.setObj)
  const offer = useStoreObj(state => state.offer)
  
  const fetchOffer = async () => {
    const url = import.meta.env.VITE_urlVintedReacteur + 'offer/' + idOffer
    const data = await fetchAxios(url)
    if(data){ setObj('offer', data)}
  }
  
  useEffect(()=>{ fetchOffer() }, [idOffer]) 

  if(offer){
    return (
      <div className='offer-cont0'>
        <img src={offer.product_image.secure_url} alt="offer photo" />
        <div className='offer-cont1'>
          <div className='offer-cont11'>
            <p className='offer-price'>{offer.product_price.toFixed(2) + " €"}</p>
            <div className='offer-cont111'>
              {offer.product_details.map((detail, index)=>(
                <div key={index} className='offer-cont1111'>
                  <p>{Object.keys(detail)[0]}</p>
                  <p>{Object.values(detail)[0]}</p>
                </div>
              ))}
            </div>
            <h1 className='offer-name'>{offer.product_name}</h1>
            <p className='offer-description'>{offer.product_description}</p>
            <div className='offer-cont112'>
              <img src={offer.owner.account.avatar?.secure_url} alt="user photo" />
              <p>{offer.owner.account.username}</p>
            </div>
          </div>
          <button>Acheter</button>
        </div>
      </div>
    )
  } else {return null}

}
