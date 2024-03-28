

import { useEffect, useState } from 'react'
import { Toffer } from '../../libs/types'
import './css/article1.css'
import { useNavigate } from 'react-router-dom'
import { useStoreStr } from '../../stores/storeStr'

export default function Article1({offer} : {offer : Toffer}) {

  const navigate = useNavigate()
  const [taille, setTaille] = useState('')
  const [marque, setMarque] = useState('')
  const setStr = useStoreStr(state=>state.setStr)

  const clicOffer = () => {
    setStr('idOffer', offer._id)
    navigate('/offer')
  }

  useEffect(()=>{
    for(const detail of offer.product_details){
      if("TAILLE" in detail){setTaille(detail.TAILLE)}
      if("MARQUE" in detail){setMarque(detail.MARQUE)}
    }
  }, [])

  return (
    <div className='article1-cont0' onClick={clicOffer}>
      <div className='article1-cont1'>
        <img src={offer.owner.account.avatar?.secure_url} alt="user photo" />
        <p>{offer.owner.account.username}</p>
      </div>
      <img src={offer.product_image?.secure_url} alt="offer photo" />
      <div className='article1-cont2'>
        <p>{offer.product_price.toFixed(2) + " €"}</p>
        <p>{taille}</p>
        <p>{marque}</p>
      </div>
    </div>
  )
}
