import { Box } from "@chakra-ui/react";

interface ICard {
  children: React.ReactNode;
  fontSize: string;
  lineHeight?: string;
  onClick: () => void;
}

const Card = ({ children, fontSize, lineHeight, onClick }: ICard) => {
  return (
    <Box
      as="button"
      backgroundColor={"#B0B0B0"}
      borderRadius={35}
      // border={"solid 1px"}
      w={205}
      h={205}
      textAlign={"center"}
      fontSize={fontSize}
      onClick={onClick}
      lineHeight={lineHeight}
    >
      {children}
    </Box>
  );
};

export default Card;
