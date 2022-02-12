import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { posState } from "../states";
import dango from "./dango.png"

export default function Player() {
  const pos = useRecoilValue(posState);

  const [inputStyle, setInputStyle] = useState({ left: '35%' })

  useEffect(() => {
    setInputStyle({ left: pos.toString() + "%" })
  }, [setInputStyle, pos]);

  return (
    <div className="Player" style={inputStyle}>
      <img src={dango} alt="dango" className="dango" />
    </div>
  );
}


