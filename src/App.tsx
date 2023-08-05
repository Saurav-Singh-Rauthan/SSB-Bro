import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import NotFound from './pages/404/404'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
