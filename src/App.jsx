import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Assistant from "./pages/Assistant";
import KnowledgeHub from "./pages/KnowledgeHub";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/knowledge" element={<KnowledgeHub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;