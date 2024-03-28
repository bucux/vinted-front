

import axios from "axios";

export const getAxios = async(suffixe : string) => {
  try{
    const datas = await axios.get(import.meta.env.VITE_urlVintedReacteur + suffixe)
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
    const datas = await axios.post(import.meta.env.VITE_urlVintedReacteur + suffixe, body)
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