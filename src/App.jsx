import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import Prototype from './components/Prototype.jsx'
import DocViewer from './components/DocViewer.jsx'

export default function App() {
  const businessModel = (
    <DocViewer title="Herond Ads — Business Model" srcDir="/business-model" basePath="/business_model" />
  )
  const actionPlan = (
    <DocViewer title="Herond — Diagnosis & six-month plan" srcDir="/action-plan" basePath="/action_plan" />
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/client_prototype" element={<Prototype />} />
        <Route path="/business_model" element={businessModel} />
        <Route path="/business_model/:lang" element={businessModel} />
        <Route path="/action_plan" element={actionPlan} />
        <Route path="/action_plan/:lang" element={actionPlan} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
