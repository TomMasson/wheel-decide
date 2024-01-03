import Card from "./Card";

interface IInputCard {
  text: string;
  onClick: () => void;
}

const InputCard = ({ text, onClick }: IInputCard) => {
  return (
    <Card fontSize={"5rem"} onClick={onClick} lineHeight={"205px"}>
      {text}
    </Card>
  );
};

export default InputCard;
