import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { posState } from "../states";
import dango from "./dango.png"

export default function Player() {
  const pos = useRecoilValue(posState);

  useEffect(() => {
    console.log(pos)
  });

  console.log(pos)
  return (
    <div className="Player" css={"left: " + pos.toString() + "%"}>
      <img src={dango} alt="dango" className="dango" />
    </div>
  );
}


