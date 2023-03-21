import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import Main from "./pages";
import AboutUs from "./pages/about-us/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
