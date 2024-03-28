
import { useEffect, useRef } from 'react'
import './css/signup.css'
import { useStoreBool } from '../../stores/storeBool'

export default function Signup() {

  const cont0 = useRef<HTMLDivElement>(null);
  const setBool = useStoreBool(state=>state.setBool)

  useEffect(()=>{

    const closeSignup = (e: MouseEvent) => {
      if (cont0.current && !cont0.current.contains(e.target as Node)) { // clic hors de la modale
        setBool('isSignupOpened', false);
      }
    }

    const timer = setTimeout(()=>{document.addEventListener('click', closeSignup)}, 100) // attend 1/10 de seconde avant de listener le clic hors de la modale, sinon elle se fermerait au clic d'ouverture
    
    return () => { 
      clearTimeout(timer)
      document.removeEventListener('click', closeSignup) 
    }

  }, [])

  return (
    <div className='signup-cont0' ref={cont0}>
      <p>S'inscrire</p>
      <input placeholder="Nom d'utilisateur"/>
      <input placeholder='Adresse email'/>
      <input placeholder='Mot de passe'/>
      <div className='signup-cont1'>
        <input type="checkbox" />
        <p>S'inscrire à notre newletter</p>
      </div>
      <p id="disclamer">En m'inscrivant, je confirme avoir lu et accepté les Termes & Conditions et Politique de Confidentialité Vinted. Je confirme avoir au moins 18 ans.</p>
      <button>S'inscrire</button>
      <p>Tu as déjà un compte ? Connecte-toi !</p>
    </div>
  )
}