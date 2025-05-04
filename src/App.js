import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PropertyProvider } from "./context/PropertyContext";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <PropertyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </PropertyProvider>
  );
}
