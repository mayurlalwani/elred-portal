import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import Main from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
