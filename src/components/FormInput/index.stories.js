import { Wrapper } from "../stylesStories";
import FormInput from "./index";

export default {
  title: "Components/FormInput",
  component: FormInput,
};

const Template = (args) => (
  <Wrapper>
    <FormInput {...args} />
  </Wrapper>
);

export const Default = Template.bind({});

Default.args = {
  label: "Nombre",
  type: "text",
};

export const Textarea = Template.bind({});

Textarea.args = {
  label: "Descripción",
  type: "textarea",
};

export const Select = Template.bind({});
Select.args = {
  label: "Select",
  type: "select",
  options: ["Autos", "Salud", "Hogar", "Mascotas", "Otros"],
};
