import { Box } from "@chakra-ui/react";

interface IInputCard {
  text: string;
  onClick: () => void;
}

const InputCard = ({ text, onClick }: IInputCard) => {
  return (
    <Box
      as="button"
      backgroundColor={"#B0B0B0"}
      borderRadius={35}
      border={"solid 1px"}
      w={205}
      h={205}
      textAlign={"center"}
      fontSize={"5rem"}
      lineHeight={"205px"}
      onClick={onClick}
    >
      {text}
    </Box>
  );
};

export default InputCard;
