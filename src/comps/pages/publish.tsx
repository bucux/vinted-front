
import './css/publish.css'
import { useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useStoreStr } from '../../stores/storeStr'
import { useNavigate } from 'react-router-dom'
import { useStoreBool } from '../../stores/storeBool'
import { formAxios } from '../../libs/axios'

export default function Publish() {

  const token = useStoreStr(state=>state.token)
  const setBool = useStoreBool(state=>state.setBool)
  const navigate = useNavigate()
  const message = useRef<HTMLInputElement>(null)
  const title = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLInputElement>(null)
  const price = useRef<HTMLInputElement>(null)
  const condition = useRef<HTMLInputElement>(null)
  const city = useRef<HTMLInputElement>(null)
  const brand = useRef<HTMLInputElement>(null)
  const size = useRef<HTMLInputElement>(null)
  const color = useRef<HTMLInputElement>(null)

  type PictureFile = File & { preview: string };
  const [pictures, setPictures] = useState<PictureFile[]>([]);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
      'text/html': ['.html', '.htm'],
    },
    onDrop: (acceptedFiles) => {
      setPictures(prev => [...prev, ...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))]);
    }
  });

  const thumbs = pictures.map(file => ( // Affichage des aperçus des images
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{width: 100, height: 100}} alt="preview" />
      </div>
    </div>
  ));

  const submit = async () => {
    const formData = new FormData()
    formData.append("title", title.current!.value)
    formData.append("description", description.current!.value)
    formData.append("price", price.current!.value)
    formData.append("condition", condition.current!.value)
    formData.append("city", city.current!.value)
    formData.append("brand", brand.current!.value)
    formData.append("size", size.current!.value)
    formData.append("color", color.current!.value)
    for (let i = 0; i < pictures.length; i++) {
      formData.append("picture", pictures[i]);
    }
    const data = await formAxios('offer/publish', formData)
    if(data) { // connexion réussie
      message.current!.textContent = "publication réussie !"
    } 
    else {message.current!.textContent = "publication échouée"}
  }

  useEffect(()=>{ // si absence de token, redirection vers home et ouvrir la modale de login
    if (!token) { 
      navigate('/') 
      setBool('isLoginOpened', true)
    }
  }, [token])


  useEffect(() => () => {   // libéreration des ressources des aperçus d'image
    pictures.forEach(file => URL.revokeObjectURL(file.preview));
  }, [pictures]);

  return (
    <div className='publish-cont0'>
      <div className='centreur'>
        <p ref={message}>Vends ton article</p>
        <div className='publish-cont00'>
          <div className='publish-cont1'>
            <div className='publish-cont11 dropzone' {...getRootProps()} >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Glissez et déposez les images ici ...</p> :
                  <button><strong>+</strong>Ajoute tes photos</button>
              }
            </div>
            <aside className='publish-cont12'>
              {thumbs}
            </aside>
          </div>
          <div className='publish-cont2'>
            <div className='publish-cont21'>
              <p>Titre</p>
              <input type="text" placeholder='ex: Chemise Sézanne Verte' ref={title}/>
            </div>
            <div className='publish-cont22'>
              <p>Description</p>
              <input type="text" placeholder='ex: Portté quelque fois, taille correctement' ref={description}/>
            </div>
          </div>
          <div className='publish-cont3'>
            <div className='publish-cont31'>
              <p>Marque</p>
              <input type="text" placeholder='ex: Zara' ref={brand}/>
            </div>
            <div className='publish-cont32'>
              <p>Taille</p>
              <input type="text" placeholder='ex: L / 40 / 12' ref={size}/>
            </div>
            <div className='publish-cont33'>
              <p>Couleur</p>
              <input type="text" placeholder='ex: Fushia' ref={color}/>
            </div>
            <div className='publish-cont34'>
              <p>Etat</p>
              <input type="text" placeholder='ex: Neuf avec étiquette' ref={condition}/>
            </div>
            <div className='publish-cont35'>
              <p>Lieu</p>
              <input type="text" placeholder='ex: Paris' ref={city}/>
            </div>
          </div>
          <div className='publish-cont4'>
            <div className='publish-cont41'>
              <p>Prix</p>
              <input type="text" placeholder='ex: 0,00 €' ref={price}/>
            </div>
            <div className='publish-cont42'>
              <input type='checkbox' />
              <p>Je suis intéressé(e) par les échanges</p>
            </div>
          </div>
        </div>
        <button onClick={submit}>Ajouter</button>
      </div>
    </div>
  )
}

//----------------VERSION SANS DROP ZONE


// import { useEffect, useRef, useState } from 'react'
// import './css/publish.css'
// import { useStoreStr } from '../../stores/storeStr'
// import { useNavigate } from 'react-router-dom'
// import { useStoreBool } from '../../stores/storeBool'
// import { formAxios } from '../../libs/axios'

// export default function Publish() {

//   const token = useStoreStr(state=>state.token)
//   const setBool = useStoreBool(state=>state.setBool)
//   const navigate = useNavigate()
//   const message = useRef<HTMLInputElement>(null)
//   const title = useRef<HTMLInputElement>(null)
//   const description = useRef<HTMLInputElement>(null)
//   const price = useRef<HTMLInputElement>(null)
//   const condition = useRef<HTMLInputElement>(null)
//   const city = useRef<HTMLInputElement>(null)
//   const brand = useRef<HTMLInputElement>(null)
//   const size = useRef<HTMLInputElement>(null)
//   const color = useRef<HTMLInputElement>(null)
//   const [pictures, setPictures] = useState([])
//   // const picture = useRef<HTMLInputElement>(null)

//   const submit = async () => {
//     const formData = new FormData()
//     formData.append("title", title.current!.value)
//     formData.append("description", description.current!.value)
//     formData.append("price", price.current!.value)
//     formData.append("condition", condition.current!.value)
//     formData.append("city", city.current!.value)
//     formData.append("brand", brand.current!.value)
//     formData.append("size", size.current!.value)
//     formData.append("color", color.current!.value)
//     for (let i = 0; i < pictures.length; i++) {
//       formData.append("picture", pictures[i]);
//     }
//     const data = await formAxios('user/login', formData)
//     if(data) { // connexion réussie
//       message.current!.textContent = "publication réussie !"
//     } 
//     else {message.current!.textContent = "publication échouée"}
//   }

//   useEffect(()=>{ // si absence de token, redirection vers home et ouvrir la modale de login
//     if (!token) { 
//       navigate('/') 
//       setBool('isLoginOpened', true)
//     }
//   }, [])

//   return (
//     <div className='publish-cont0'>
//       <div className='centreur'>
//         <p ref={message}>Vends ton article</p>
//         <div className='publish-cont00'>
//           <div className='publish-cont1'>
//             <div className='publish-cont11'>
//               <button><strong>+</strong>Ajoute une photo</button>
//             </div>
//           </div>
//           <div className='publish-cont2'>
//             <div className='publish-cont21'>
//               <p>Titre</p>
//               <input type="text" placeholder='ex: Chemise Sézanne Verte' ref={title}/>
//             </div>
//             <div className='publish-cont22'>
//               <p>Description</p>
//               <input type="text" placeholder='ex: Portté quelque fois, taille correctement' ref={description}/>
//             </div>
//           </div>
//           <div className='publish-cont3'>
//             <div className='publish-cont31'>
//               <p>Marque</p>
//               <input type="text" placeholder='ex: Zara' ref={brand}/>
//             </div>
//             <div className='publish-cont32'>
//               <p>Taille</p>
//               <input type="text" placeholder='ex: L / 40 / 12' ref={size}/>
//             </div>
//             <div className='publish-cont33'>
//               <p>Couleur</p>
//               <input type="text" placeholder='ex: Fushia' ref={color}/>
//             </div>
//             <div className='publish-cont34'>
//               <p>Etat</p>
//               <input type="text" placeholder='ex: Neuf avec étiquette' ref={condition}/>
//             </div>
//             <div className='publish-cont35'>
//               <p>Lieu</p>
//               <input type="text" placeholder='ex: Paris' ref={city}/>
//             </div>
//           </div>
//           <div className='publish-cont4'>
//             <div className='publish-cont41'>
//               <p>Prix</p>
//               <input type="text" placeholder='ex: 0,00 €' ref={price}/>
//             </div>
//             <div className='publish-cont42'>
//               <input type='checkbox' />
//               <p>Je suis intéressé(e) par les échanges</p>
//             </div>
//           </div>
//         </div>
//         <button onClick={submit}>Ajouter</button>
//       </div>
//     </div>
//   )
// }