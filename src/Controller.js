import { useRecoilState } from "recoil";
import { posState } from "./states";

export default function Controller() {
    const [pos, setPos] = useRecoilState(posState);

    const handleMovement = ({ input }) => {
        console.log(input);

        // switch (input) {
        //     case 'l':
        //         setPos([pos[0] - 20, pos[1]])
        //         break;
        //     case 'right':
        //         setPos([pos[0] + 20, pos[1]])
        //         break;
        //     default:
        //         console.log('invalid input')
        // }
    };

    return (
        <div className="Controller">
            <button className="LeftBtn" onMouseOver={console.log("hit")}>
                Left
            </button>
            <button className="RightBtn" onMouseOver={handleMovement({ input: 'r' })}>
                Right
            </button>
        </div>
    );
}


