import { BrowserRouter } from "react-router-dom";
import { Wrapper } from "../stylesStories";
import Navbar from "./index";

export default {
  title: "Components/Navbar",
  component: Navbar,
};

const Template = (args) => (
  <BrowserRouter>
    <Wrapper>
      <Navbar {...args} />
    </Wrapper>
  </BrowserRouter>
);

const types = [
  {
    name: "Todos",
    to: "Todos",
  },
  {
    name: "Hogar",
    to: "hogar",
  },
  {
    name: "Salud",
    to: "salud",
  },
  {
    name: "Mascotas",
    to: "mascotas",
  },
  {
    name: "Otros",
    to: "otros",
  },
];

export const Default = Template.bind({});

Default.args = {
  data: types,
};

export const WithLogo = Template.bind({});

WithLogo.args = {
  data: types,
  logo: "https://static.wixstatic.com/media/7579d7_db23779e35a945c9b82bedd6ccb4a3bf~mv2.png/v1/fill/w_161,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-12.png",
  backgroundColor: "#000000",
};
