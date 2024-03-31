

import { useState } from 'react';
import './css/slider1.css'; // Assurez-vous de créer un fichier CSS pour les styles
import { useStoreNum } from '../../stores/storeNum';

const Slider1 = ({ min, max } : {min : number, max : number}) => {
  
  const setNum = useStoreNum(state=>state.setNum)
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const handleMinChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxVal - 1);
    setMinVal(value);
  };

  const handleMaxChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minVal + 1);
    setMaxVal(value);
  };

  const endMin = () => { setNum('priceMin', minVal) }

  const endMax = () => { setNum('priceMax', maxVal) }

  return (
    <div className="range-slider">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={handleMinChange}
        onMouseUp={endMin}
        onTouchEnd={endMin}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 ? '5' : '3' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={handleMaxChange}
        onMouseUp={endMax}
        onTouchEnd={endMax}
        className="thumb thumb--right"
      />
      <div className="slider">
        <div className="slider__track"></div>
        <div className="slider__range" style={{ left: `${(minVal / max) * 100}%`, right: `${100 - (maxVal / max) * 100}%` }}></div>
        <div className="slider__left-value">{minVal}€</div>
        <div className="slider__right-value">{maxVal}€</div>
      </div>
    </div>
  );
};
export default Slider1;
