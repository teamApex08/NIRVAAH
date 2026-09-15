import { Routes, Route, Navigate } from "react-router-dom";
import {
  BenchmarkingPage,
  CommandCentrePage,
  EarlyWarningsPage,
  LandingPage,
  ProjectDetailPage,
  ProjectsPage,
  ReportsExportPage,
  RiskIntelligencePage,
  SettingsPage,
} from "./pages/Index.jsx";
import { AiAssistantPage, FloatingAiAssistantWidget } from "@nirvaah/ai";
import Layout from "./pages/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/nirvaah" replace />} />

        <Route path="/nirvaah" element={<LandingPage />}></Route>

        <Route path="/nirvaah" element={<Layout />}>
          <Route path="command-centre" element={<CommandCentrePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="risk-intelligence" element={<RiskIntelligencePage />} />
          <Route path="early-warnings" element={<EarlyWarningsPage />} />
          <Route path="benchmarking" element={<BenchmarkingPage />} />
          <Route path="reports" element={<ReportsExportPage />} />
          <Route path="ai-assistant" element={<AiAssistantPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
      <FloatingAiAssistantWidget />
    </>
  )
}

export default App;
