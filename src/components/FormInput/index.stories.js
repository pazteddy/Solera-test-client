import { storiesOf } from "@storybook/react";
import useState from "storybook-addon-state";
import { Wrapper } from "../stylesStories";
import FormInput from "./index";

storiesOf("Components/FormInput", module)
  .add("Default", () => {
    return (
      <Wrapper>
        <FormInput label="Nombre" type="text" />
      </Wrapper>
    );
  })
  .add("Textarea", () => {
    return (
      <Wrapper>
        <FormInput label="Descripción" type="textarea" />
      </Wrapper>
    );
  })
  .add("Select", () => {
    const [value, setValue] = useState("valueInput", "");
    return (
      <Wrapper>
        <FormInput
          value={value}
          onChange={(e) => {
            setValue(e.value);
          }}
          type="select"
          label="Select"
          options={["Autos", "Salud", "Hogar", "Mascotas", "Otros"]}
        />
      </Wrapper>
    );
  });
