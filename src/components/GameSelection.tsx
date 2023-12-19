import { Flex } from "@chakra-ui/react";
import InputCard from "./InputCard";

interface IGameSelection {
  editNbPlayers: (nb: number) => void;
}
const GameSelection = ({ editNbPlayers }: IGameSelection) => {
  const nbPlayers = [2, 3, 4, 5, 6];
  return (
    <Flex gap={"5rem"}>
      {nbPlayers.map((text) => {
        return (
          <InputCard
            onClick={() => editNbPlayers(text)}
            text={text.toString()}
          />
        );
      })}
    </Flex>
  );
};

export default GameSelection;
