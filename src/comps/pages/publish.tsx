
import './css/publish.css'

export default function Publish() {



  return (
    <div className='publish-cont0'>
      <div className='centreur'>
        <p>Vends ton article</p>
        <div className='publish-cont00'>
          <div className='publish-cont1'>
            <div className='publish-cont11'>
              <button><strong>+</strong>Ajoute une photo</button>
            </div>
          </div>
          <div className='publish-cont2'>
            <div className='publish-cont21'>
              <p>Titre</p>
              <input type="text" placeholder='ex: Chemise Sézanne Verte'/>
            </div>
            <div className='publish-cont22'>
              <p>Description</p>
              <input type="text" placeholder='ex: Portté quelque fois, taille correctement'/>
            </div>
          </div>
          <div className='publish-cont3'>
            <div className='publish-cont31'>
              <p>Marque</p>
              <input type="text" placeholder='ex: Zara'/>
            </div>
            <div className='publish-cont32'>
              <p>Taille</p>
              <input type="text" placeholder='ex: L / 40 / 12'/>
            </div>
            <div className='publish-cont33'>
              <p>Couleur</p>
              <input type="text" placeholder='ex: Fushia'/>
            </div>
            <div className='publish-cont34'>
              <p>Etat</p>
              <input type="text" placeholder='ex: Neuf avec étiquette'/>
            </div>
            <div className='publish-cont35'>
              <p>Lieu</p>
              <input type="text" placeholder='ex: Paris'/>
            </div>
          </div>
          <div className='publish-cont4'>
            <div className='publish-cont41'>
              <p>Prix</p>
              <input type="text" placeholder='ex: 0,00 €'/>
            </div>
            <div className='publish-cont42'>
              <input type='checkbox' />
              <p>Je suis intéressé(e) par les échanges</p>
            </div>
          </div>
        </div>
        <button>Ajouter</button>
      </div>
    </div>
  )
}
