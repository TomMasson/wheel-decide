import { Heading } from "@chakra-ui/react";

interface IGameList {
  nbPlayers: number;
  children?: React.ReactNode;
}

const GameList = ({ nbPlayers, children }: IGameList) => {
  return (
    <>
      <Heading>GameList - {nbPlayers} joueurs</Heading>
      {children}
    </>
  );
};

export default GameList;
