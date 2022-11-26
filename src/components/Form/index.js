import React, { useState } from "react";
import { typesServicesArray } from "../../utils";
import Button from "../Button";
import Error from "../Error";
import FormInput from "../FormInput";

import * as S from "./styles";

function Form() {
  const [error, setError] = useState("");
  const initialForm = {
    name: "",
    description: "",
    service: "",
  };
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.name]: e.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === "" || form.description === "" || form.service === "") {
      setError("Complete todos los campos");
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      console.log(form);
      setForm(initialForm);
    }
  };
  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Form>
        <FormInput
          type="text"
          label="Nombre"
          name="name"
          value={form.name}
          onChange={(e) => {
            e.preventDefault();
            handleChange(e.target);
          }}
        />
        <FormInput
          type="textarea"
          label="Description"
          name="description"
          value={form.description}
          onChange={(e) => {
            e.preventDefault();
            handleChange(e.target);
          }}
        />
        <FormInput
          type="select"
          label="Select service"
          name="service"
          value={form.service}
          onChange={handleChange}
          placeholder="Select one of the following services"
          width="100%"
          options={typesServicesArray}
        />
        {error && <Error>{error}</Error>}
      </S.Form>

      <S.WrapperButtons>
        <Button type="submit" label="Grabar" color="blue" />
        <Button type="button" label="Cancelar" color="red" />
      </S.WrapperButtons>
    </S.Wrapper>
  );
}

export default Form;
