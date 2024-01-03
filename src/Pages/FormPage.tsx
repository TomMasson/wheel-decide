import { useState } from "react";
import GameList from "../components/Form/GameList";
import { Flex, Heading } from "@chakra-ui/layout";
import NbPlayers from "../components/Form/NbPlayers";
import { ChakraProvider } from "@chakra-ui/provider";

const FormPage = () => {
  const [nbPlayers, setNbPlayers] = useState(0);
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
    </ChakraProvider>
  );
};

export default FormPage;
