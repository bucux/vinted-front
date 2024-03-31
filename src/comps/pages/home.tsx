


import './css/home.css'
import Header2 from '../sections/header2'
import Main1 from '../sections/main1'
import { useEffect } from "react";
import { useStoreOffers } from '../../stores/storeOffers';
import { getAxios } from '../../libs/axios';
import { useStoreBool } from '../../stores/storeBool';
import { useStoreStr } from '../../stores/storeStr';
import { useStoreNum } from '../../stores/storeNum';

export default function Home() {

  const setOffers = useStoreOffers(state => state.setOffers)
  const setBool = useStoreBool(state=>state.setBool)
  const isSort = useStoreBool(state=>state.isSort)
  const searchString = useStoreStr(state=>state.searchString)
  const priceMin = useStoreNum(state=>state.priceMin)
  const priceMax = useStoreNum(state=>state.priceMax)
  
  const fetchOffers = async () => {
    let suffixe = 'offers?' // le ? ne dérange pas, même si aucun critère n'est défini
    suffixe += isSort ? 'sort=price-asc&' : '' // le & ne dérange pas, même si aucun critère ne suit
    suffixe += searchString ? `title=${searchString}&` : ''
    suffixe += priceMin ? `priceMin=${priceMin}&` : ''
    suffixe += priceMax ? `priceMax=${priceMax}&` : ''
    console.log(suffixe)
    const data = await getAxios(suffixe)
    if(data){ setOffers(data)}
  }
  
  useEffect(()=>{ 
    setBool('isSearch', true)
    return (()=>{ setBool('isSearch', false) }) // cacher la recherche en quittant la page Home
  }, []) 
  
  useEffect(()=>{
    fetchOffers() 
  }, [isSort, searchString, priceMin, priceMax])

  return (
    <div className='home-cont0'>
      <Header2/>
      <Main1/>
    </div>
  )
}
