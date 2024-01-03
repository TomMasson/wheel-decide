import { Input, Checkbox, Flex, Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Options } from "../../App";

interface IOptionsForm {
  options: Options[];
  setOptions: (newOptions: Options[]) => void;
}

const OptionsForm = ({ options, setOptions }: IOptionsForm) => {
  const [newOption, setNewOption] = useState({
    id: options[options.length - 1].id + 1,
    name: "",
    checked: true,
  });

  const editOption = (inputId: number, newData: Options) => {
    setOptions(
      options.map((option) => (option.id === inputId ? newData : option))
    );
  };

  const addOption = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOptions([newOption, ...options]);
    setNewOption({
      id: newOption.id + 1,
      name: "",
      checked: true,
    });
  };

  return (
    <Box
      borderRadius={"3xl"}
      p={10}
      height={"60%"}
      width={"60%"}
      border="1px"
      borderColor="black"
    >
      <Heading mb={5}>Options</Heading>
      <form
        onSubmit={(event) => {
          addOption(event);
        }}
      >
        <Flex mb={3}>
          <Input
            name={"optionName" + newOption.id}
            value={newOption.name}
            placeholder="Nouvelle option"
            onChange={(event) =>
              setNewOption({ ...newOption, name: event.target.value })
            }
          />
          <Checkbox
            id={"optionCheck" + newOption.id}
            name={"optionCheck" + newOption.id}
            isChecked={newOption.checked}
            onChange={() => {
              setNewOption({ ...newOption, checked: !newOption.checked });
            }}
          />
        </Flex>
      </form>

      {options.map((input, index) => {
        return (
          <Flex mb={1} key={index}>
            <Input
              name={"option" + index}
              value={input.name}
              onChange={(event) => {
                editOption(input.id, { ...input, name: event.target.value });
              }}
            />
            <Checkbox
              id={"optionCheck" + input.id}
              name={"optionCheck" + input.id}
              isChecked={input.checked}
              onChange={(event) => {
                editOption(input.id, {
                  ...input,
                  checked: event.target.checked,
                });
              }}
            />
          </Flex>
        );
      })}
    </Box>
  );
};

export default OptionsForm;
