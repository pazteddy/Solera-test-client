import { Wrapper } from "../stylesStories";
import InputSelect from "./index";

export default {
  title: "Components/InputSelect",
  component: InputSelect,
};

const Template = (args) => (
  <Wrapper>
    <InputSelect {...args} />
  </Wrapper>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: "Seleccione una opción",
};

export const WithOptions = Template.bind({});

WithOptions.args = {
  placeholder: "Seleccione una opción",
  options: [
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "Opción 4",
    "Opción 5",
    "Opción 6",
    "Opción 7",
    "Opción 8",
  ],
};
