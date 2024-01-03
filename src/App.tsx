import { Flex, ChakraProvider, Heading } from "@chakra-ui/react";
import NbPlayers from "./components/NbPlayers";
import GameList from "./components/GameList";
import { useState } from "react";
import "./App.css";
import WheelPage from "./Pages/WheelPage";

function App() {
  const [nbPlayers, setNbPlayers] = useState(3);
  let content = <GameList nbPlayers={nbPlayers} />;

  if (nbPlayers === 0) {
    content = (
      <>
        <Heading>Combien de joueurs ?</Heading>
        <NbPlayers editNbPlayers={(nb: number) => setNbPlayers(nb)} />
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
        bg={"#1e1e1e"}
      >
        {content}
      </Flex>
      {/* <WheelPage></WheelPage> */}
    </ChakraProvider>
  );
}

export default App;
