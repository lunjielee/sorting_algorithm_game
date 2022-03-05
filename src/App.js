import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import HomePage from "./levels/HomePage";
import Level1 from "./levels/Level1";
import Level2 from "./levels/Level2";
import Level3 from "./levels/Level3";

import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <Routes>
          {/*LevelMain: home page */}
          <Route path="/" element={<HomePage />} />
          {/*Level1: level 1 */}
          <Route path="/level1" element={<Level1 />} />
          {/*Level2: level 2 */}
          <Route path="/level2" element={<Level2 />} />
          <Route path="/level3" element={<Level3 />} />
          {/*google sign-in page */}
        </Routes>
      </div>
    </div>
  );
}
