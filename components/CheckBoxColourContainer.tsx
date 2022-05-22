import { Heading } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import ChakraColourCheckbox from "./ChakraCheckbox";

interface CheckBoxContainerProps {
  heading: string;
  uniqueColouredItems: string[];
  setSelectedColours: Dispatch<
    SetStateAction<{
      selectedColours: string[];
    }>
  >;
  disabled?: boolean;
  setDisableButton?: Dispatch<SetStateAction<boolean>>;
  selectedColours: string[];
  data: any;
  setState: any;
}

const CheckBoxColourContainer: FC<CheckBoxContainerProps> = ({
  heading,
  uniqueColouredItems,
  setSelectedColours,
  disabled,
  setDisableButton,
  selectedColours,
  data,
  setState,
}) => {
  return (
    <>
      <Heading size="sm" my="1rem" fontFamily="primary.heading">
        {heading}
      </Heading>
      {uniqueColouredItems.map((item: string, index: number) => (
        <ChakraColourCheckbox
          item={item}
          key={index}
          setSelectedColours={setSelectedColours}
          disabled={disabled ?? false}
          selectedColours={selectedColours}
          data={data}
          setState={setState}
        />
      ))}
    </>
  );
};
export default CheckBoxColourContainer;
