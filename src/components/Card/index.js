import * as S from "./styles";
import PropTypes from "prop-types";
import { useState } from "react";

function Card({ name, description, ...props }) {
  const [remove, setRemove] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleRemove = () => {
    setRemove(true);
    setTimeout(() => {
      setRemove(false);
      props.remove(props.id);
    }, 2000);
  };

  const handleEdit = () => {
    setEdit(true);
    setTimeout(() => {
      setEdit(false);
      props.edit(props.id);
    }, 1000);
  };

  const stateRemove = {
    remove: remove,
    edit: edit,
  };
  return (
    <S.Wrapper {...stateRemove}>
      <S.Content>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
      <S.Actions>
        <S.Action onClick={handleEdit}>Editar</S.Action>
        <S.Action onClick={handleRemove}>Eliminar</S.Action>
      </S.Actions>
    </S.Wrapper>
  );
}

Card.prototype = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

Card.defaultProps = {
  remove: () => {},
  edit: () => {},
};

export default Card;
