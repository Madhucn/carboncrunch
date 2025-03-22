import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Stats from "./pages/StatsPage";

function App() {
  return (
    <Router>
      <div>
        {/* Routes Section */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* Stats Component */}
        <Stats />
      </div>
    </Router>
  );
}

export default App;
