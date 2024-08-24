import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/login";

import NotFound from "./screens/NotFount";
import Registrarse from "./screens/register";
import Tienda from "./screens/Tienda";
import Productos from "./screens/Productos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
