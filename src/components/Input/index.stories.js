import Input from "./index";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: "text",
  placeholder: "Placeholder",
};

export const Textarea = Template.bind({});

Textarea.args = {
  type: "textarea",
  placeholder: "Placeholder",
};
