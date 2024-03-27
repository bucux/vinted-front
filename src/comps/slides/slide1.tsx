

import './css/slide1.css'

export default function Slide1() {

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className='slide1-cont0'>
      <p>Prix entre : </p>
      <input id="brightness-slider" type="range" min="0" max="255" onInput={change} />
    </div>
  )
} 
