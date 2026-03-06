import { useState, useEffect } from 'react'
import { DEFAULT_PRICING_RULES, updatePricingInSupabase } from '../config/supabase'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('pricing')
  const [pricingRules, setPricingRules] = useState(DEFAULT_PRICING_RULES)
  const [seatPrices, setSeatPrices] = useState(DEFAULT_PRICING_RULES.sofa.seats)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  // Load pricing on mount
  useEffect(() => {
    setPricingRules(DEFAULT_PRICING_RULES)
    setSeatPrices(DEFAULT_PRICING_RULES.sofa.seats)
  }, [])

  const handleSeatPriceChange = (seats, value) => {
    setSeatPrices(prev => ({
      ...prev,
      [seats]: parseFloat(value) || 0
    }))
  }

  const handleSaveSeatPrices = async () => {
    setLoading(true)
    try {
      const result = await updatePricingInSupabase(seatPrices)
      if (result.success) {
        setMessage({ type: 'success', text: 'Preços atualizados com sucesso!' })
        setTimeout(() => setMessage(null), 3000)
      } else {
        setMessage({ type: 'error', text: 'Erro: ' + result.error })
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Erro ao salvar: ' + err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Gerencie as configurações do SofáLimpo</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'pricing'
                ? 'text-[#deb052] border-b-2 border-[#deb052]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Preços
          </button>
          <button
            onClick={() => setActiveTab('extras')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'extras'
                ? 'text-[#deb052] border-b-2 border-[#deb052]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Extras
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'settings'
                ? 'text-[#deb052] border-b-2 border-[#deb052]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Configurações
          </button>
        </div>

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Editar Preços</h2>

            {/* Sofa Pricing */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sofás - Preço por Número de Lugares</h3>
              <div className="sl-seats-editor">
                <div className="sl-seats-grid">
                  {[2, 3, 4, 5, 6].map(n => (
                    <div key={n} className="sl-seat-item">
                      <label>{n} Lugares</label>
                      <input
                        type="number"
                        step="0.01"
                        value={seatPrices[n] || ''}
                        onChange={(e) => handleSeatPriceChange(n, e.target.value)}
                        className="sl-seat-price-input"
                        placeholder="€"
                        data-seats={n}
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleSaveSeatPrices}
                  disabled={loading}
                  className="sl-seats-save-btn"
                >
                  {loading ? '⏳ A guardar...' : '💾 Guardar Preços por Lugares'}
                </button>
                {message && (
                  <div className={`sl-seats-status ${message.type}`}>
                    {message.type === 'success' ? '✅' : '❌'} {message.text}
                  </div>
                )}
              </div>
            </div>

            {/* Colchao Pricing */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Colchões</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Solteiro (€)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue={pricingRules.colchao.solteiro}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Casal (€)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue={pricingRules.colchao.casal}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent"
                  />
                </div>
              </div>
              <button className="mt-4 w-full px-6 py-2 bg-[#deb052] text-white rounded-lg font-semibold hover:bg-[#c99a47] transition-colors">
                Guardar
              </button>
            </div>
          </div>
        )}

        {/* Extras Tab */}
        {activeTab === 'extras' && (
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerir Extras</h2>

            <div className="space-y-4">
              {['Almofadas', 'Puffs', 'Bancos', 'Protetor de Tecido'].map((extra, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{extra}</h4>
                    <p className="text-sm text-gray-600">Serviço adicional para sofás</p>
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Preço"
                      className="w-24 px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors">
                      Editar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-[#deb052] to-[#c99a47] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Guardar Alterações
            </button>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Configurações</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações da Empresa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      defaultValue="935 798 081"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="geral@sofalimpo.pt"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Horário de Atendimento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Seg-Sex
                    </label>
                    <input
                      type="text"
                      defaultValue="08:00 - 18:00"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sábado
                    </label>
                    <input
                      type="text"
                      defaultValue="09:00 - 15:00"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#deb052] to-[#c99a47] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
                Guardar Configurações
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
