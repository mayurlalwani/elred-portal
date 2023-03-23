import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./pages";
import AboutUs from "./pages/about-us/AboutUs";
import { appReducers, AppStateProvider, initialState } from "../src/store";

function App() {
  return (
    <BrowserRouter>
      <AppStateProvider reducer={appReducers} initialState={initialState}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </AppStateProvider>
    </BrowserRouter>
  );
}
export default App;
