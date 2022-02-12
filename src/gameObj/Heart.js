
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { posState, scoreState } from "../states";
import heart from "./heart.png"

export default function Kimi({ props }) {

  const pos = useRecoilValue(posState);

  const [Xpos, setXPos] = useState(50)
  const [Ypos, setYPos] = useState(15)
  const [inputStyle, setInputStyle] = useState({ top: '15%', left: '50%' })

  const [mydog, setMyDog] = useState(0);

  const [score, setScore] = useRecoilState(scoreState);

  useEffect(() => {
    let asdf = pos
    if ((Ypos > 75 && Ypos < 85) && (Xpos < (asdf + 5) && Xpos > (asdf - 5))) {
      console.log("hit")
      let temp = score;
      setScore(temp += 1)
    }

    setTimeout(() => {
      let tmp = mydog;
      setMyDog(tmp += 1)
    }, 100);

    let temp = Ypos;

    if (temp < 90) {
      setYPos(temp += Math.floor(Math.random() * 5));
    }

    let temp2 = Xpos;

    if (temp2 < 90 && temp2 > 10) {
      setXPos(temp2 + ((Math.floor(Math.random() * 6)) * (Math.random() < 0.5 ? -1 : 1)))
    }


    setInputStyle({ top: Ypos.toString() + "%", left: Xpos.toString() + "%" })
    // eslint-disable-next-line
  }, [setYPos, setInputStyle, mydog])

  return (
    <div className="Heart" style={inputStyle}>
      <img src={heart} alt="heart" className="heart_img" />
    </div>
  );
}
