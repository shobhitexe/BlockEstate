import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/";
import { Home, About, Main } from "./pages/";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Routes onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
