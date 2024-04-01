
import cookie from "js-cookie";
import { useEffect } from "react";
import { useStoreStr } from "../../stores/storeStr";
import { Gstr } from "../../libs/global";

export default function Cookie() { // composant invisible, qui sert uniquement à tenter le handshake par cookie

  const setStr = useStoreStr(state=>state.setStr)

  useEffect(()=>{

    const handshake =  async () => {
      const token = cookie.get('token')
      if(token){ // si un token est présent dans les cookies, vérifier sa validité auprès du serveur
        // const verified = await postAxios('handshake', {oldToken : token})
        // if(verified) { // token vérifié
        // eslint-disable-next-line
        if(true) { // provisoire : dans l'exercisse, le token est toujours valide
          setStr('token', token)
          Gstr.token = token // version non réactive de token, accessible depuis les librairies hors composant
        } 
      }
    }

    handshake()

  }, [])

  return null
}
