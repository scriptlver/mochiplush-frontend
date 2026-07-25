import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./assets/pages/Welcome/Welcome";
import Login from "./assets/pages/Login/Login";
import Register from "./assets/pages/Register/Register";
import TermsOfUse from "./assets/pages/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./assets/pages/PrivacyPolicy/PrivacyPolicy";

import Home from "./assets/pages/Home/Home";
import Favorites from "./assets/pages/Favorites/Favorites";
import News from "./assets/pages/News/News";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/home" element={<Home /> } />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
