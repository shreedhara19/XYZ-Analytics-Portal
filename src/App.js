import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Quality from "./pages/Quality";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
