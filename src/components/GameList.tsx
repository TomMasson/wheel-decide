import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Games, defaultOptions } from "../assets/DataExport";
import GameCard from "./Cards/GameCard";

interface IGameList {
  nbPlayers: number;
  children?: React.ReactNode;
}

const GameList = ({ nbPlayers }: IGameList) => {
  return (
    <Grid
      h="100%"
      w="100%"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem
        rowSpan={1}
        colSpan={5}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"end"}
      >
        <Heading>GameList - {nbPlayers} joueurs</Heading>
      </GridItem>
      <GridItem rowSpan={3} colSpan={4}>
        <Flex
          flexWrap={"wrap"}
          gap={"5rem"}
          justifyContent={"center"}
          alignItems={"center"}
          h={"100%"}
          p={50}
        >
          {Games.map((game, index) => {
            return (
              <GameCard
                key={index}
                onClick={() => alert(game.name)}
                game={game}
              />
            );
          })}
        </Flex>
      </GridItem>
      <GridItem rowSpan={3} colSpan={1} bg="tomato" />
    </Grid>
  );
};

export default GameList;
