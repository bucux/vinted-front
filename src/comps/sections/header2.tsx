
import { useNavigate } from 'react-router-dom'
import './css/header2.css'

export default function Header2() {

  const navigate = useNavigate()

  const clic = () => { navigate('/publish') }

  return (
    <div className='header2-cont0'>
      <img id = "imageBanderolle" src="https://lereacteur-vinted.netlify.app/assets/hero-24963eb2.jpg" alt="image banderolle" />
      <img id = "calque" src="https://static.vinted.com/_next/static/media/tear.884480420945b3afd77b44a6c5f98567.svg" alt="calque" />
      <div className='centreur'>
        <div className='header2-cont1'>
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button onClick={clic}>Commencer à vendre</button>
        </div>
      </div>
    </div>
  )
}
