import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/main_components";
import { MainLoading } from "./pages/loadingScreens";
import { Customizer, Home } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="h-screen w-screen">
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/customizer" element={<Customizer />} />
        {/* <Header /> */}
      </Routes>
    </main>
  );
}

export default App;
