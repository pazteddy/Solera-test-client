import { Wrapper } from "../stylesStories";
import InputSelect from "./index";

import { storiesOf } from "@storybook/react";
import useState from "storybook-addon-state";

storiesOf("Components/InputSelect", module)
  .add("Default", () => (
    <Wrapper>
      <InputSelect placeholder="Seleccione una opción" />
    </Wrapper>
  ))
  .add("Options", () => {
    const [value, setValue] = useState("valueInput", "");

    return (
      <Wrapper>
        <InputSelect
          placeholder="Seleccione una opción"
          value={value}
          options={["Opción 1", "Opción 2", "Opción 3"]}
          onChange={(e) => {
            setValue(e.value);
          }}
        />
      </Wrapper>
    );
  });
