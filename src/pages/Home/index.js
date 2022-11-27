import React from "react";
import Form from "../../components/Form";
import ListCard from "../../components/ListCard";
import Navbar from "../../components/Navbar";
import { types } from "../../utils";
import { Container, Title } from "./styles";

function Home() {
  return (
    <>
      <Title>Services</Title>
      <Navbar data={types} />
      <Container>
        <ListCard />
        <Form />
      </Container>
    </>
  );
}

export default Home;
