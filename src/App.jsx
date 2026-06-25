import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import Prototype from './components/Prototype.jsx'
import BusinessModel from './components/BusinessModel.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/client_prototype" element={<Prototype />} />
        <Route path="/business_model" element={<BusinessModel />} />
        <Route path="/business_model/:lang" element={<BusinessModel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
