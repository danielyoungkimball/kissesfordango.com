import React, { useState } from 'react';
import Player from "./gameObj/Player";
import Kimi from "./gameObj/Kimi";
import hvd from "./gameObj/hvd.png";
import kiss from "./gameObj/kiss.jpg";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { posState, scoreState } from './states';


import { useRecoilState } from "recoil";
import { heartState } from "./states";
import Heart from "./gameObj/Heart";
import { useEffect } from "react";


export default function Main() {
  const setPos = useSetRecoilState(posState);
  const scoreboard = useRecoilValue(scoreState);
  const [hearts, setHearts] = useRecoilState(heartState);
  const [counter, setCounter] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      let temp = counter;
      setCounter(temp += 1);
    }, 1500);


    setHearts([...hearts, { key: counter }]);
    // eslint-disable-next-line
  }, [setHearts, counter]);


  const handlePos = (event) => {
    setPos(event.target.value);
  }



  return (
    <div className="container">

      {scoreboard >= 100 ? <div className='win'>
        <img src={hvd} alt="hvd" />
        <img src={kiss} alt="kiss" style={{ width: '100vw' }} />
      </div> : <div />}

      <div className='game_container'>

        <header>KissesForDango.com</header>

        <div className='game_view'>
          <div className='scoreboard'>Score: {scoreboard}</div>
          <Kimi />
          {hearts.map((item, index) => {
            return (
              <Heart key={index} props={index} />
            )
          })}
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
