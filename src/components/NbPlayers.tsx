import { Flex } from "@chakra-ui/react";
import InputCard from "./Cards/InputCard";

interface INbPlayers {
  editNbPlayers: (nb: number) => void;
}
const NbPlayers = ({ editNbPlayers }: INbPlayers) => {
  const nbPlayers = [2, 3, 4, 5, 6];
  return (
    <Flex gap={"5rem"}>
      {nbPlayers.map((text, index) => {
        return (
          <InputCard
            key={index}
            onClick={() => editNbPlayers(text)}
            text={text.toString()}
          />
        );
      })}
    </Flex>
  );
};

export default NbPlayers;
