import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/main_components";
import { MainLoading } from "./pages/loadingScreens";
import {Home} from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen w-screen">
      {/* <Header /> */}
      <Home />
    </main>
  );
}

export default App;
