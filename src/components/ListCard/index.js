import { css } from "@emotion/css";
import { useServices } from "../../context";
import Card from "../Card";
import { Wrapper } from "./styles";

function ListCard() {
  const { dataFilter, removeService, data, dispatchForm } = useServices();

  const handleRemove = (id) => {
    removeService(id);
  };

  const handleEdit = (idCard) => {
    // console.log(id);
    console.log(idCard);
    const { id, name, description, service } = data.find(
      (service) => service.id === idCard
    );

    dispatchForm({
      type: "setForm",
      payload: {
        id: id,
        name: name,
        description: description,
        service: service,
      },
    });
  };
  return (
    <Wrapper>
      {dataFilter.map((service) => {
        return (
          <Card
            key={service.id}
            {...service}
            remove={handleRemove}
            edit={handleEdit}
          />
        );
      })}
    </Wrapper>
  );
}

export default ListCard;
