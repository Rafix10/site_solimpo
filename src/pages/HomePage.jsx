import { useState } from 'react'
import PricingCalculator from '../components/PricingCalculator'
import ContactOverlay from '../components/ContactOverlay'

export default function HomePage() {
  const [selectedService, setSelectedService] = useState(null)
  const [showContactOverlay, setShowContactOverlay] = useState(false)

  const services = [
    {
      id: 'sofa',
      name: 'Limpeza de Sofás',
      description: 'Limpeza profissional de sofás com tratamento especializado',
      icon: '🛋️',
      basePrice: '71,00 €'
    },
    {
      id: 'colchao',
      name: 'Limpeza de Colchões',
      description: 'Higienização completa de colchões e camas',
      icon: '🛏️',
      basePrice: 'A partir de 50,00 €'
    },
    {
      id: 'vidros',
      name: 'Limpeza de Vidros',
      description: 'Limpeza de vidros e janelas com brilho profissional',
      icon: '🪟',
      basePrice: '15,00 € / m²'
    },
    {
      id: 'outros',
      name: 'Outros Serviços',
      description: 'Solicite um orçamento personalizado para outros serviços',
      icon: '⭐',
      basePrice: 'Consulte-nos'
    }
  ]

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Limpeza Profissional
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sofás, Colchões, Vidros e muito mais com qualidade garantida
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => {
                if (service.id === 'outros') {
                  setShowContactOverlay(true)
                } else {
                  setSelectedService(service.id)
                }
              }}
              className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
                selectedService === service.id
                  ? 'border-[#deb052] bg-[#deb052]/5'
                  : 'border-gray-200 hover:border-[#deb052] bg-white hover:bg-[#deb052]/5'
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <p className="text-[#deb052] font-bold">{service.basePrice}</p>
            </div>
          ))}
        </div>

        {/* Calculator Section */}
        {selectedService && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <PricingCalculator service={selectedService} />
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 h-fit">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Próximos Passos</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-[#deb052] font-bold flex-shrink-0">1</span>
                  <span className="text-gray-700">Configure o seu serviço</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#deb052] font-bold flex-shrink-0">2</span>
                  <span className="text-gray-700">Receba um orçamento personalizado</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#deb052] font-bold flex-shrink-0">3</span>
                  <span className="text-gray-700">Agende a sua limpeza</span>
                </li>
              </ol>
              <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-[#deb052] to-[#c99a47] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Profissionalismo</h3>
            <p className="text-gray-600">Equipa treinada com experiência comprovada</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapidez</h3>
            <p className="text-gray-600">Serviços rápidos sem comprometer a qualidade</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Melhor Preço</h3>
            <p className="text-gray-600">Orçamentos competitivos e transparentes</p>
          </div>
        </div>
      </div>

      {showContactOverlay && <ContactOverlay onClose={() => setShowContactOverlay(false)} />}
    </div>
  )
}
