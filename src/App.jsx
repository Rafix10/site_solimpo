import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import EmpresasPage from './pages/EmpresasPage'
import SobrePage from './pages/SobrePage'
import ContactoPage from './pages/ContactoPage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/empresas" element={<EmpresasPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
