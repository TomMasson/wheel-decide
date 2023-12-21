import { Flex, ChakraProvider, Heading } from "@chakra-ui/react";
import GameSelection from "./components/GameSelection";
import GameList from "./components/GameList";
import { useState } from "react";
import "./App.css";
import WheelPage from "./Pages/WheelPage";

function App() {
  const [nbPlayers, setNbPlayers] = useState(0);
  let content = <GameList nbPlayers={nbPlayers}>Lourd</GameList>;

  if (nbPlayers === 0) {
    content = (
      <>
        <Heading>Combien de joueurs ?</Heading>
        <GameSelection editNbPlayers={(nb: number) => setNbPlayers(nb)} />
      </>
    );
  }

  return (
    <ChakraProvider>
      <Flex
        width={"100vw"}
        height={"100vh"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"8rem"}
      >
        {content}
      </Flex>
      {/* <WheelPage></WheelPage> */}
    </ChakraProvider>
  );
}

export default App;
