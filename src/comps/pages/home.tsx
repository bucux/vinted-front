


import './css/home.css'
import Header2 from '../sections/header2'
import Main1 from '../sections/main1'
import { useEffect } from "react";
import { useStoreOffers } from '../../stores/storeOffers';
import { fetchAxios } from '../../libs/axios';

export default function Home() {

  const setOffers = useStoreOffers(state => state.setOffers)
  
  const fetchOffers = async () => {
    const url = import.meta.env.VITE_urlVintedReacteur + 'offers'
    const data = await fetchAxios(url)
    if(data){ setOffers(data)}
  }
  
  useEffect(()=>{ fetchOffers() }, []) 

  return (
    <div className='home-cont0'>
      <Header2/>
      <Main1/>
    </div>
  )
}
