import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb052] to-[#c99a47] flex items-center justify-center">
              <span className="text-white font-bold text-sm">SL</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">SofáLimpo</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-[#deb052] font-semibold' : 'text-gray-700 hover:text-[#deb052]'
              }`}
            >
              Serviços
            </Link>
            <Link
              to="/empresas"
              className={`transition-colors ${
                isActive('/empresas') ? 'text-[#deb052] font-semibold' : 'text-gray-700 hover:text-[#deb052]'
              }`}
            >
              Empresas
            </Link>
            <Link
              to="/sobre"
              className={`transition-colors ${
                isActive('/sobre') ? 'text-[#deb052] font-semibold' : 'text-gray-700 hover:text-[#deb052]'
              }`}
            >
              Sobre
            </Link>
            <Link
              to="/contacto"
              className={`transition-colors ${
                isActive('/contacto') ? 'text-[#deb052] font-semibold' : 'text-gray-700 hover:text-[#deb052]'
              }`}
            >
              Contacto
            </Link>
            <Link
              to="/admin"
              className={`transition-colors ${
                isActive('/admin') ? 'text-[#deb052] font-semibold' : 'text-gray-700 hover:text-[#deb052]'
              }`}
            >
              Admin
            </Link>
          </div>

          {/* CTA Button */}
          <button className="hidden sm:block px-6 py-2 bg-gradient-to-r from-[#deb052] to-[#c99a47] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
            Orçamento
          </button>
        </div>
      </div>
    </nav>
  )
}
