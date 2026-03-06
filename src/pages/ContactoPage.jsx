import { useState } from 'react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-16 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contacte-nos
          </h1>
          <p className="text-xl text-gray-600">
            Estamos aqui para responder a todas as suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Enviar Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent"
                  placeholder="935 798 081"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de Interesse
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="sofa">Limpeza de Sofás</option>
                  <option value="colchao">Limpeza de Colchões</option>
                  <option value="vidros">Limpeza de Vidros</option>
                  <option value="outros">Outro Serviço</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent"
                  placeholder="Descreva sua solicitação..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#deb052] to-[#c99a47] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Enviar Mensagem
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  ✓ Obrigado! Sua mensagem foi enviada com sucesso.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contacto</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📞 Telefone</h3>
                  <a
                    href="tel:+351935798081"
                    className="text-[#deb052] hover:text-[#c99a47] font-semibold"
                  >
                    935 798 081
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📧 Email</h3>
                  <a
                    href="mailto:geral@sofalimpo.pt"
                    className="text-[#deb052] hover:text-[#c99a47] font-semibold"
                  >
                    geral@sofalimpo.pt
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">💬 WhatsApp</h3>
                  <a
                    href="https://wa.me/351935798081"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#deb052] hover:text-[#c99a47] font-semibold"
                  >
                    Enviar Mensagem
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">⏰ Horário</h3>
                  <p className="text-gray-700">
                    Segunda a Sexta: 08:00 - 18:00<br />
                    Sábado: 09:00 - 15:00<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Área de Serviço</h3>
              <p className="text-gray-700 mb-4">
                Operamos em toda a região de Lisboa e arredores, com possibilidade de deslocações
                a outras zonas do país.
              </p>
              <p className="text-gray-600 text-sm">
                Contacte-nos para confirmar se a sua localização está dentro da nossa área de serviço.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
