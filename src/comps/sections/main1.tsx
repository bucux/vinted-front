

import { Toffer } from '../../libs/types'
import { useStoreOffers } from '../../stores/storeOffers'
import Article1 from './article1'
import './css/main1.css'

export default function Main1() {

  const offers = useStoreOffers(state=>state.offers)

  if(offers){
    return (
      <div className='main1-cont0'>
        <div className='centreur'>
          {offers.offers.map((offer : Toffer)=><Article1 key = {offer._id} offer = {offer}/>)}
        </div>
      </div>
    )
  }else{
    return <p>LOADING...</p>
  }

}
