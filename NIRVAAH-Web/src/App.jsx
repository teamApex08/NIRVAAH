import { Routes, Route, Navigate } from "react-router-dom";
import { BenchmarkingPage, CommandCentrePage, EarlyWarningsPage, LandingPage, ProjectsPage } from "./pages/Index.jsx";
import Layout from "./pages/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/nirvaah" replace />} />

      <Route path="/nirvaah" element={<LandingPage />}></Route>

      <Route path="/nirvaah" element={<Layout />}>
        <Route path="command-centre" element={<CommandCentrePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="early-warnings" element={<EarlyWarningsPage />} />
        <Route path="benchmarking" element={<BenchmarkingPage />} />
      </Route>
    </Routes>
  )
}

export default App;
