

import { tBoolStates, useStoreBool } from '../../stores/storeBool';
import './css/button1.css'

function Button1({nom} : {nom : keyof tBoolStates}) {

  const bool = useStoreBool(state=>state[nom])
  const setBool = useStoreBool(state=>state.setBool)

  const clic = () => {
    setBool(nom, !bool)
  }

  return (
    <div className={`button1-cont0 ${bool ? 'on' : 'off'}`} onClick={clic}>
      <div className={`button1-cont1 ${bool ? 'on' : 'off'}`}></div>
    </div>
  );
}

export default Button1;
