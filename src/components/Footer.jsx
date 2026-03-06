import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb052] to-[#c99a47] flex items-center justify-center">
                <span className="text-white font-bold text-sm">SL</span>
              </div>
              <span className="font-bold text-lg">SofáLimpo</span>
            </div>
            <p className="text-gray-400 text-sm">Limpeza profissional de sofás, camas e vidros em Portugal.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#deb052] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/empresas" className="text-gray-400 hover:text-[#deb052] transition-colors">
                  Empresas
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-[#deb052] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-[#deb052] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Limpeza de Sofás</li>
              <li>Limpeza de Colchões</li>
              <li>Limpeza de Vidros</li>
              <li>Outros Serviços</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+351935798081" className="hover:text-[#deb052] transition-colors">
                  📞 935 798 081
                </a>
              </li>
              <li>
                <a href="https://wa.me/351935798081" className="hover:text-[#deb052] transition-colors">
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:geral@sofalimpo.pt" className="hover:text-[#deb052] transition-colors">
                  📧 geral@sofalimpo.pt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} SofáLimpo. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#deb052] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-[#deb052] transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
