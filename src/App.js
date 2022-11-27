import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/todos" />} />
      </Routes>
      <Home />
    </>
  );
}

export default App;
