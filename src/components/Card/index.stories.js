import Card from "./index";

import styled from "@emotion/styled";

export default {
  title: "Components/Card",
  component: Card,
};

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
`;

const Template = (args) => (
  <Wrapper>
    <Card {...args} />
  </Wrapper>
);

export const Default = Template.bind({});

Default.args = {
  id: 1,
  title: "Electricidad",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};
