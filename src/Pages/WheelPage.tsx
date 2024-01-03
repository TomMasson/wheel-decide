import { useState } from "react";
import Roue from "../components/Wheel/Roue";
import { Flex } from "@chakra-ui/react";
import OptionsForm from "../components/Wheel/OptionsForm";
import { Options, defaultOptions } from "../assets/DataExport";

const WheelPage = () => {
  const [options, setOptions] = useState(defaultOptions);

  const editOptions = (newOptions: Options[]) => {
    setOptions(newOptions);
  };

  return (
    <Flex width={"100vw"} height={"100vh"} direction={"row"}>
      <Flex w={"50%"} p={10} align={"center"}>
        <Roue options={options} />
      </Flex>
      <Flex w={"50%"} p={10} align={"center"}>
        <OptionsForm options={options} setOptions={editOptions} />
      </Flex>
    </Flex>
  );
};

export default WheelPage;
