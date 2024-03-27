

import { useEffect, useState } from 'react'
import { Toffer } from '../../libs/types'
import './css/article1.css'

export default function Article1({offer} : {offer : Toffer}) {

  const [taille, setTaille] = useState('')
  const [marque, setMarque] = useState('')

  useEffect(()=>{
    for(const detail of offer.product_details){
      if("TAILLE" in detail){setTaille(detail.TAILLE)}
      if("MARQUE" in detail){setMarque(detail.MARQUE)}
    }
  }, [])

  return (
    <div className='article1-cont0'>
      <div className='article1-cont1'>
        <img src={offer.owner.account.avatar.url} alt="user photo" />
        <p>{offer.owner.account.username}</p>
      </div>
      <img src={offer.product_pictures[0].url} alt="offer photo" />
      <div className='article1-cont2'>
        <p>{offer.product_price + " €"}</p>
        <p>{taille}</p>
        <p>{marque}</p>
      </div>
    </div>
  )
}
