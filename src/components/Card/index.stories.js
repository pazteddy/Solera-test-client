import Card from "./index";

import styled from "@emotion/styled";
import { fonts } from "../../assets/typography";
import { colors } from "../../assets/colors";

export default {
  title: "Components/Card",
  component: Card,
};

const Wrapper = styled.div`
  font-family: ${fonts.primary};
  color: ${colors.primary};
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
