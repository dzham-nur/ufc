import "./assets/css/style.css";
import Header from "./Test/Header";
import OnePage from "./Test/OnePage";
import TwoPage from "./pages/TwoPage";
import ThreePage from "./pages/ThreePage";
import MainPage from "./pages/MainPage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
    <Header />
    <main class="phon">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Tournir" element={<OnePage />} />
        <Route path="/P4P" element={<ThreePage />} />
        <Route path="/post/:id" element={<TwoPage />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
