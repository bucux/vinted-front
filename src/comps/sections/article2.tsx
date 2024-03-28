


import { Toffer } from '../../libs/types'
import './css/article2.css'

export default function Article2({offer} : {offer : Toffer}) {
  return (
    <div className='article2-cont0'>
      <div className='article2-cont1'>
        <p className='article2-price'>{offer.product_price.toFixed(2) + " €"}</p>
        <div className='article2-cont11'>
          {offer.product_details.map((detail, index)=>(
            <div key={index} className='article2-cont111'>
              <p>{Object.keys(detail)[0]}</p>
              <p>{Object.values(detail)[0]}</p>
            </div>
          ))}
        </div>
        <h1 className='article2-name'>{offer.product_name}</h1>
        <p className='article2-description'>{offer.product_description}</p>
        <div className='article2-cont12'>
          <img src={offer.owner.account.avatar?.secure_url} alt="user photo" />
          <p>{offer.owner.account.username}</p>
        </div>
      </div>
      <button>Acheter</button>
    </div>
  )
}
