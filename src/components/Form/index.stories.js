import Form from "./index";
import { Wrapper } from "../stylesStories";

export default {
  title: "Components/Form",
  component: Form,
};

const Template = (args) => (
  <Wrapper>
    <Form {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
