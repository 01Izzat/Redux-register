import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Main, Register, Login, Navbar } from "./Components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
