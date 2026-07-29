import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./assets/pages/Welcome/Welcome";
import Login from "./assets/pages/Login/Login";
import Register from "./assets/pages/Register/Register";
import TermsOfUse from "./assets/pages/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./assets/pages/PrivacyPolicy/PrivacyPolicy";

import Home from "./assets/pages/Home/Home";
import Favorites from "./assets/pages/Favorites/Favorites";
import News from "./assets/pages/News/News";
import CollectionBT21 from "./assets/pages/CollectionBT21/CollectionBT21";
import ProductPage from "./assets/pages/ProductPage/ProductPage";

import Cart from "./assets/pages/Cart/Cart";
import Checkout from "./assets/pages/Checkout/Checkout";
import CheckoutCard from "./assets/pages/CheckoutCard/CheckoutCard";
import Profile from "./assets/pages/Profile/Profile";
import EditProfile from "./assets/pages/EditProfile/EditProfile";

import Settings from "./assets/pages/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/news" element={<News />} />
        <Route path="/bt21" element={<CollectionBT21 />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-card" element={<CheckoutCard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
