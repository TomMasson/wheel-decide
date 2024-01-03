import { Grid, GridItem, Image } from "@chakra-ui/react";
import Card from "./Card";
import { Game } from "../../../assets/DataExport";
interface IGameCard {
  game: Game;
  onClick: () => void;
}

const GameCard = ({ game, onClick }: IGameCard) => {
  return (
    <Card fontSize={"1rem"} onClick={onClick}>
      <Grid h={"100%"} w={"100%"} templateRows="repeat(3, 1fr)">
        <GridItem rowSpan={2}>
          <Image h={"100%"} src={game.image} borderRadius={"35px 35px 0 0"} />
        </GridItem>
        <GridItem
          p={"10px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontSize={"1rem"}
          wordBreak={"normal"}
        >
          {game.name}
        </GridItem>
      </Grid>
    </Card>
  );
};

export default GameCard;
