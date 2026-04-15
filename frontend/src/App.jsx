import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SistemaPersonalizado from "./pages/SistemaPersonalizado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sistema" element={<SistemaPersonalizado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;