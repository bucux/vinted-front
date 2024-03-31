
import cookie from "js-cookie";
import { useEffect } from "react";

export default function Cookie() { // composant invisible, qui sert uniquement à tenter le handshake par cookie

  useEffect(()=>{

    const handshake =  () => {
      const token = cookie.get('token')
      console.log(token)
    }

    handshake()

  }, [])

  return null
}
