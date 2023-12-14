import "./App.css";
import { useState } from "react";
import Roue from "./components/Roue";
import { Flex } from "@chakra-ui/react";
import OptionsForm from "./components/OptionsForm";
import { ChakraProvider } from "@chakra-ui/react";

export interface Options {
  id: number;
  name: string;
  checked: boolean;
}

function App() {
  const [options, setOptions] = useState([
    { id: 1, name: "Rocket League", checked: true },
  ]);
  const editOptions = (newOptions: Options[]) => {
    setOptions(newOptions);
  };

  return (
    <ChakraProvider>
      <Flex width={"100vw"} height={"100vh"} direction={"row"}>
        <Flex w={"50%"} p={10} align={"center"}>
          <Roue options={options} />
        </Flex>
        <Flex w={"50%"} p={10} align={"center"}>
          <OptionsForm options={options} updateOptions={editOptions} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
