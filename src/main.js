import React from 'react';
import Player from "./gameObj/Player";
import Kimi from "./gameObj/Kimi";
import { useSetRecoilState } from 'recoil';
import { posState } from './states';

export default function Main() {
  const setPos = useSetRecoilState(posState);

  const handlePos = (event) => {
    setPos(event.target.value);
  }

  return (
    <div className="container">
      <div className='game_container'>

        <header>KissesForDango.com</header>

        <div className='game_view'>
          <Kimi />
          <Player />
        </div>

        <div className='controller_container'>
          <div className="slidecontainer">
            <input className="slider" type="range" min="1" max="90" value="45" id="myRange" onChange={handlePos} />
          </div>
        </div>
      </div>

    </div>
  );
}
