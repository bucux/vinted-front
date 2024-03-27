


import { Link } from 'react-router-dom'
import './css/home.css'
import Header2 from '../sections/header2'
import Main1 from '../sections/main1'

export default function Home() {
  return (
    <div className='home-cont0'>
      <Header2/>
      <Main1/>
      <Link to='/Offer'>Offer</Link>
    </div>
  )
}
