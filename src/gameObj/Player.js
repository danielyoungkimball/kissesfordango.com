import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { posState } from "../states";
import dango from "./dango.png"

export default function Player() {
  const pos = useRecoilValue(posState);

  let style;
  useEffect(() => {
    console.log(pos)
    style = "left: " + pos.toString() + "%";
    console.log(style)
  });

  console.log(pos)
  return (
    <div className="Player" css={style}>
      <img src={dango} alt="dango" className="dango" />
    </div>
  );
}


