


import { useStoreBool } from '../../stores/storeBool';
import Button1 from '../buttons/button1';
import Button2 from '../buttons/button2';
import Slide1 from '../slides/slide1';
import './css/header1.css'
import { useNavigate } from "react-router-dom";

export default function Header1() {

  const setBool = useStoreBool(state=>state.setBool)

  const navigate = useNavigate()

  const clicLogo = () => { navigate('/') }

  const clicLogin = () => { setBool('isLoginOpened', true) }

  const clicSignup = () => { setBool('isSignupOpened', true) }

  const clicSell = () => { }

  return (
    <div className='header1-cont0'>
      <div className='centreur'>
        <img src="https://lereacteur-vinted.netlify.app/static/media/logo.10b0caad793dd0a8ea72.png" alt="Logo Vinted" onClick={clicLogo}/>
        <div className='header1-cont1'>
          <input type="text" placeholder='Recherche des articles'/>
          <div className='header1-cont11'>
            <Button1/>
            <Slide1/>
          </div>
        </div>
        <Button2 name={"S'inscrire"} func={clicSignup}/>
        <Button2 name={"Se connecter"} func={clicLogin}/>
        <Button2 name={"Vends tes articles"} isBackgroundGreen={true} func={clicSell}/>
      </div>
    </div>
  )
}
