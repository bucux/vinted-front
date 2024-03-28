


import { useEffect, useRef } from 'react'
import './css/login.css'
import { useStoreBool } from '../../stores/storeBool'

export default function Login() {

  const cont0 = useRef<HTMLDivElement>(null);
  const setBool = useStoreBool(state=>state.setBool)

  useEffect(()=>{

    const closeLogin = (e: MouseEvent) => {
      if (cont0.current && !cont0.current.contains(e.target as Node)) { // clic hors de la modale
        setBool('isLoginOpened', false);
      }
    }

    const timer = setTimeout(()=>{document.addEventListener('click', closeLogin)}, 100) // attend 1/10 de seconde avant de listener le clic hors de la modale, sinon elle se fermerait au clic d'ouverture
    
    return () => { 
      clearTimeout(timer)
      document.removeEventListener('click', closeLogin) 
    }

  }, [])

  return (
    <div className='login-cont0' ref={cont0}>
      <p>Se connecter</p>
      <input placeholder='Adresse email'/>
      <input placeholder='Mot de passe'/>
      <button>Se connecter</button>
      <p>Pas encore de compte ? Inscris-toi !</p>
    </div>
  )
}


