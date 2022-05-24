import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import FinalPage from "./components/FinalPage/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/finalpage" element={<FinalPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
