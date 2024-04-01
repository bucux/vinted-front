

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

export const postAxios = async(suffixe : string, body: {[key: string] : string | undefined}) => { // post simple avec un body de keys/values
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

export const formAxios = async(suffixe : string, formData: FormData) => { // post de files avec un formData
  try{
    for(const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    const datas = await axios.post(
      import.meta.env.VITE_urlVintedReacteur + suffixe, 
      formData,
      {
        headers: { 
          'Authorization': `Bearer ${Gstr.token}`,
          "Content-Type": "multipart/form-data"
        }
      }
    )
    return datas.data
  }catch(error: unknown) {
    if (axios.isAxiosError(error)) { 
      console.log(error.response?.data); 
    } else {
      console.log('Une erreur est survenue', error);
    }
  }
}