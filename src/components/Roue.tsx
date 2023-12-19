import { Box } from "@chakra-ui/react";
import { Options, defaultOptions } from "../App";
import WheelComponent from "./../assets/WheelComponent";

interface IRoue {
  options: Options[];
}

const Roue = ({ options }: IRoue) => {
  let activeOptions = options.filter((input) => input.checked);

  if (activeOptions.length === 0) {
    activeOptions = defaultOptions;
  }

  const segments = activeOptions.map((input) => input.name);

  const segColors = [
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];

  const onFinished = (winner: string) => {
    console.log(winner);
  };

  return (
    <>
      <Box border={"1px solid black"}>
        <WheelComponent
          key={segments.toString()}
          segments={segments}
          segColors={segColors}
          onFinished={(winner: string) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={290}
          upDuration={100}
          downDuration={1000}
          fontFamily="Arial"
        />
      </Box>
    </>
  );
};

export default Roue;
