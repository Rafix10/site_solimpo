export default function EmpresasPage() {
  const benefits = [
    {
      title: 'Limpeza Recorrente',
      description: 'Planos de limpeza periódica adaptados às suas necessidades'
    },
    {
      title: 'Preços Corporativos',
      description: 'Descontos especiais para contratos de maior volume'
    },
    {
      title: 'Agenda Flexível',
      description: 'Serviços fora do horário comercial disponível'
    },
    {
      title: 'Relatórios Detalhados',
      description: 'Documentação completa de todos os serviços prestados'
    }
  ]

  const clientSectors = [
    { icon: '🏢', label: 'Escritórios' },
    { icon: '🏨', label: 'Hotéis' },
    { icon: '🏠', label: 'Residências' },
    { icon: '🏪', label: 'Lojas' },
    { icon: '✈️', label: 'Agências de Viagem' },
    { icon: '📚', label: 'Bibliotecas' }
  ]

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Soluções para Empresas
          </h1>
          <p className="text-xl text-gray-600">
            Mantemos seus espaços corporativos limpos e profissionais
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl text-[#deb052] mb-4">✓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Client Sectors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Setores que Servimos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientSectors.map((sector, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:border-[#deb052] transition-colors"
              >
                <span className="text-4xl mb-2">{sector.icon}</span>
                <span className="text-sm font-medium text-gray-900 text-center">{sector.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-white border-2 border-[#deb052] rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#deb052] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultoria</h3>
              <p className="text-sm text-gray-600">Avaliamos suas necessidades específicas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#deb052] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proposta</h3>
              <p className="text-sm text-gray-600">Recebe uma proposta personalizada</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#deb052] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Contrato</h3>
              <p className="text-sm text-gray-600">Acordo flexível e transparente</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#deb052] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Execução</h3>
              <p className="text-sm text-gray-600">Serviço de qualidade garantida</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pronto para começar?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Solicite uma consultoria sem compromisso
          </p>
          <a
            href="tel:+351935798081"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#deb052] to-[#c99a47] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Ligar Agora
          </a>
        </div>
      </div>
    </div>
  )
}
