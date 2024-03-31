

import axios from "axios";
import { Gstr } from "./global";

export const getAxios = async(suffixe : string) => {
  try{
    const datas = await axios.get(
      import.meta.env.VITE_urlVintedReacteur + suffixe,
      {
        headers: {'Authorization': `Bearer ${Gstr.token}`}
      }
    )
    return datas.data
  }catch(error: unknown){
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log('Une erreur inattendue est survenue');
    }
  }
  return null
}

export const postAxios = async(suffixe : string, body: {[key: string] : string | undefined}) => {
  try{
    const datas = await axios.post(
      import.meta.env.VITE_urlVintedReacteur + suffixe, 
      body,
      {
        headers: { 'Authorization': `Bearer ${Gstr.token}`}
      }
    )
    return datas.data
  }catch(error: unknown){
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log('Une erreur inattendue est survenue');
    }
  }
  return null
}
