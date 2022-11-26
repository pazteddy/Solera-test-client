import React, { useId, useState } from "react";
import { v4 as uuid } from "uuid";
import { useServices } from "../../context";
import { typesServicesArray } from "../../utils";
import Button from "../Button";
import Error from "../Error";
import FormInput from "../FormInput";

import * as S from "./styles";

function Form() {
  const [error, setError] = useState("");

  const { addService, initialForm, form, dispatchForm, updateService } =
    useServices();

  const handleChange = (e) => {
    dispatchForm({ type: "setForm", payload: { [e.name]: e.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name === "" || form.description === "" || form.service === "") {
      setError("Complete todos los campos");
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      if (form.id) {
        // Update Service
        updateService(form);
      } else {
        // Generate unique id Card
        const uniqueId = uuid();

        // Save service
        const { id, ...rest } = form;
        const newForm = { id: uniqueId, ...rest };
        addService(newForm);
      }

      dispatchForm({ type: "setForm", payload: initialForm });
      // console.log(form);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    dispatchForm({ type: "setForm", payload: initialForm });
  };
  return (
    <S.Wrapper>
      <S.Form id="form" onSubmit={handleSubmit}>
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
        <Button
          type="submit"
          form="form"
          label={form.id ? "Editar" : "Grabar"}
          color="blue"
        />
        <Button
          type="button"
          label="Cancelar"
          color="red"
          onClick={handleCancel}
        />
      </S.WrapperButtons>
    </S.Wrapper>
  );
}

export default Form;
