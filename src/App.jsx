import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./assets/pages/Welcome/Welcome";
import Login from "./assets/pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;