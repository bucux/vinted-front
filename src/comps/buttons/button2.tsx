


import './css/button2.css'

export default function Button2({name, isBackgroundGreen = false} : {name : string, isBackgroundGreen? : boolean}) {

  return (
    <button className={`button2 ${isBackgroundGreen ? 'backgroundGreen' : ''}`}>{name}</button>
  )
}
