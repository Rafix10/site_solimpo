export default function SobrePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-16 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre o SofáLimpo
          </h1>
          <p className="text-xl text-gray-600">
            Somos especialistas em limpeza profissional desde 2020
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white border-l-4 border-[#deb052] p-8 mb-16 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Oferecer serviços de limpeza profissional de excelente qualidade, com atendimento personalizado
            e preços justos. Queremos ser a escolha número um para limpeza de sofás, colchões e vidros em
            Portugal.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-4xl text-[#deb052] mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Qualidade</h3>
            <p className="text-gray-600">
              Utilizamos os melhores produtos e técnicas para garantir resultados impecáveis
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-4xl text-[#deb052] mb-4">⏱️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pontualidade</h3>
            <p className="text-gray-600">
              Cumprimos sempre os prazos agendados e respeitamos o seu tempo
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-4xl text-[#deb052] mb-4">💡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inovação</h3>
            <p className="text-gray-600">
              Investimos continuamente em novas técnicas e equipamentos
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">A Nossa Equipa</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              A nossa equipa é composta por profissionais experientes e treinados em limpeza especializada.
              Cada membro da equipa passa por rigorosos testes de qualidade e atendimento ao cliente.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Focamo-nos na satisfação do cliente e na entrega de resultados excecionais em cada serviço.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#deb052] mb-2">1000+</div>
            <p className="text-gray-700 font-semibold">Clientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#deb052] mb-2">5000+</div>
            <p className="text-gray-700 font-semibold">Serviços Completados</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#deb052] mb-2">4.9★</div>
            <p className="text-gray-700 font-semibold">Avaliação Média</p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-[#deb052] to-[#c99a47] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Tem alguma pergunta?</h2>
          <p className="mb-6 text-lg">
            Não hesite em contactar-nos. A nossa equipa está pronta para ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+351935798081"
              className="px-6 py-3 bg-white text-[#deb052] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 935 798 081
            </a>
            <a
              href="mailto:geral@sofalimpo.pt"
              className="px-6 py-3 bg-white text-[#deb052] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📧 geral@sofalimpo.pt
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
