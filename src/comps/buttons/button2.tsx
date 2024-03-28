


import './css/button2.css'

export default function Button2({name, func, isBackgroundGreen = false} : {name : string, func : () => void, isBackgroundGreen? : boolean}) {

  return (
    <button className={`button2 ${isBackgroundGreen ? 'backgroundGreen' : ''}`} onClick={func}>{name}</button>
  )
}
