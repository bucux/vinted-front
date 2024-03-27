

import axios from "axios";

export const fetchAxios = async(url : string) => {
  try{
    const datas = await axios.get(url)
    return datas.data
  }catch(error: unknown){
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Une erreur inattendue est survenue');
    }
  
  }
}