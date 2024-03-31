

import { useState, useEffect, useRef } from 'react';
import { Range } from 'react-range';
import { useStoreNum } from '../../stores/storeNum';
import './css/slider1.css';

const Slider1 = () => {
  const [values, setValues] = useState([0, 500]);
  const [thumbPositions, setThumbPositions] = useState([0, 0]);
  const rangeRef = useRef<HTMLDivElement>(null);

  const setNum = useStoreNum((state) => state.setNum);

  const changeFinal = (values: number[]) => {
    setNum('priceMin', values[0]);
    setNum('priceMax', values[1]);
  };

  useEffect(() => {
    const updateThumbPositions = () => {
      if (rangeRef.current) {
        const track = rangeRef.current.querySelector('.slider1-cont1');
        const thumbs = rangeRef.current.querySelectorAll('.slider1-cont2');
        if (track && thumbs.length === 2) { // Calcul des positions relatives des thumbs par rapport au track
          const trackRect = track.getBoundingClientRect();
          const leftThumbRect = thumbs[0].getBoundingClientRect();
          const rightThumbRect = thumbs[1].getBoundingClientRect();          
          const leftPosition = leftThumbRect.left - trackRect.left + leftThumbRect.width / 2;
          const rightPosition = rightThumbRect.left - trackRect.left + rightThumbRect.width / 2;
          setThumbPositions([leftPosition, rightPosition]);
        }
      }
    };
    updateThumbPositions(); // Mettre à jour les positions au montage et après chaque mise à jour des valeurs
    window.addEventListener('resize', updateThumbPositions); // Mettre à jour les positions lors du redimensionnement de la fenêtre
    return () => window.removeEventListener('resize', updateThumbPositions);
  }, [values]); 

  return (
    <div className='slider1-cont0' ref={rangeRef}>
      <Range
        step={1}
        min={0}
        max={500}
        values={values}
        onChange={(values) => setValues(values)}
        onFinalChange={(values) => changeFinal(values)}
        renderTrack={({ props, children }) => (
          <div className='slider1-cont1' {...props} style={props.style}>
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div className='slider1-cont2' {...props} style={props.style} />
        )}
      />
      <div className='slider1-cont3'>
        <p style={{ left: `${thumbPositions[0]}px` }}>{values[0]}</p>
        <p style={{ left: `${thumbPositions[1]}px` }}>{values[1]}</p>
      </div>
    </div>
  );
};

export default Slider1;
