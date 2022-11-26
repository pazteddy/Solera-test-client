import { css } from "@emotion/css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

import Logo from "./assets/images/logo.png";
import { types } from "./utils";
import { useServices } from "./context";
import Form from "./components/Form";

function App() {
  const { dataFilter, removeService } = useServices();
  const handleRemove = (id) => {
    removeService(id);
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
            return <Card key={service.id} {...service} remove={handleRemove} />;
          })}
        </div>

        {/* Form */}

        <Form />
      </div>
    </>
  );
}

export default App;
