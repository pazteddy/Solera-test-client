import { css } from "@emotion/css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

import Logo from "./assets/images/logo.png";
import { types } from "./utils";
import { useServices } from "./context";
import Form from "./components/Form";

function App() {
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
    <>
      <h1
        className={css`
          text-align: center;
        `}
      >
        Services
      </h1>
      <Navbar data={types} backgroundColor="black" logo={Logo} />
      <div
        className={css`
          padding: 20px;
          display: grid;
          grid-template-columns: 2fr 1fr;
        `}
      >
        <div
          className={css`
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          `}
        >
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
        </div>

        {/* Form */}

        <Form />
      </div>
    </>
  );
}

export default App;
