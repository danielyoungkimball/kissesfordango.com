import React from 'react';
import Player from "./gameObj/Player";
import Kimi from "./gameObj/Kimi";
import { useRecoilState } from 'recoil';
import { posState } from './states';

export default function Main() {
  const [pos, setPos] = useRecoilState(posState);

  const handleLeft = () => {
    let temp = pos;
    if (pos !== 10) {
      setPos(temp -= 5);
    }
  }

  const handleRight = () => {
    let temp = pos;
    if (pos !== 80) {
      setPos(temp += 5);
    }
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
          <button className='LeftBtn' onClick={handleLeft}>
            Left
          </button>
          <button className='RightBtn' onClick={handleRight}>
            Right
          </button>
        </div>
      </div>

    </div>
  );
}
