


import './css/home.css'
import Header2 from '../sections/header2'
import Main1 from '../sections/main1'
import { useEffect } from "react";
import { useStoreOffers } from '../../stores/storeOffers';
import { getAxios } from '../../libs/axios';
import { useStoreBool } from '../../stores/storeBool';

export default function Home() {

  const setOffers = useStoreOffers(state => state.setOffers)
  const setBool = useStoreBool(state=>state.setBool)
  
  const fetchOffers = async () => {
    const suffixe = 'offers'
    const data = await getAxios(suffixe)
    if(data){ setOffers(data)}
  }
  
  useEffect(()=>{ 

    fetchOffers() 
    setBool('isSearch', true)

    return (()=>{ // cacher la recherche en quittant la page Home
      setBool('isSearch', false)
    })
  }, []) 

  return (
    <div className='home-cont0'>
      <Header2/>
      <Main1/>
    </div>
  )
}
