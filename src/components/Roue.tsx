import { Options } from "../App";
import WheelComponent from "react-wheel-of-prizes";

interface IRoue {
  options: Options[];
}

const Roue = ({ options }: IRoue) => {
  const segments = options.map((input) => (input.checked ? input.name : false));
  const refresh = segments;

  const segColors = [
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];

  const onFinished = (winner: any) => {
    console.log(winner);
  };

  return (
    <>
      {refresh && (
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment="won 10"
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={290}
          upDuration={100}
          downDuration={1000}
          fontFamily="Arial"
        />
      )}
    </>
  );
};

export default Roue;
