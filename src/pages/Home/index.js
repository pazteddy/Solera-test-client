import React from "react";
import Form from "../../components/Form";
import ListCard from "../../components/ListCard";
import Navbar from "../../components/Navbar";
import { types } from "../../utils";
import { Container, Content, Title } from "./styles";
import Logo from "../../assets/images/logo.png";

function Home() {
  return (
    <>
      <Navbar data={types} logo={Logo} backgroundColor="#000" />
      <Container>
        <Title>Servicios</Title>
        <Content>
          <ListCard />
          <Form />
        </Content>
      </Container>
    </>
  );
}

export default Home;
