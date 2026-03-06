import { useState, useEffect } from 'react'
import { DEFAULT_PRICING_RULES, QUANTITY_EXTRAS } from '../config/supabase'

export default function PricingCalculator({ service, onPriceChange }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(null)
  const [seats, setSeats] = useState(2)
  const [selectedExtras, setSelectedExtras] = useState({})
  const [extraQuantities, setExtraQuantities] = useState({})
  const [totalPrice, setTotalPrice] = useState(0)
  const [widthHeight, setWidthHeight] = useState({ width: '', height: '' })

  const pricingRules = DEFAULT_PRICING_RULES

  // Calculate total price
  useEffect(() => {
    let basePrice = 0
    let extrasTotal = 0

    // Handle different service types
    if (service === 'sofa') {
      basePrice = pricingRules.sofa.seats[seats] || pricingRules.sofa.base
    } else if (service === 'colchao') {
      if (selectedSize) {
        basePrice = pricingRules.colchao[selectedSize] || 0
      }
    } else if (service === 'vidros') {
      // Per square meter calculation
      if (widthHeight.width && widthHeight.height) {
        const sqm = (parseFloat(widthHeight.width) * parseFloat(widthHeight.height)) / 10000
        basePrice = sqm * 15 // Assuming 15€ per sqm
      }
    }

    // Calculate extras
    Object.entries(selectedExtras).forEach(([extraName, isSelected]) => {
      if (isSelected) {
        const priceMatch = document.querySelector(`[data-extra="${extraName}"]`)?.textContent.match(/\+(\d+(?:[.,]\d+)?)\s*€/)
        if (priceMatch) {
          const extraPrice = parseFloat(priceMatch[1].replace(',', '.'))
          const qty = extraQuantities[extraName] || 1
          extrasTotal += extraPrice * qty
        }
      }
    })

    const total = (basePrice + extrasTotal) * quantity
    setTotalPrice(total)
    if (onPriceChange) {
      onPriceChange(total)
    }
  }, [quantity, selectedSize, seats, selectedExtras, extraQuantities, widthHeight, service])

  // Render based on service type
  if (service === 'sofa') {
    return (
      <div className="space-y-6 bg-white p-6 rounded-lg border border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Configurar Serviço</h3>
        </div>

        {/* Seats Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Número de Lugares</label>
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setSeats(Math.max(2, seats - 1))}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              −
            </button>
            <span id="custom-seats-value" className="text-2xl font-bold text-gray-900 min-w-[3rem] text-center">
              {seats}
            </span>
            <button
              onClick={() => setSeats(Math.min(6, seats + 1))}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Quantity Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Quantidade de Sofás</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent"
          />
        </div>

        {/* Price Display */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Preço Total</p>
          <p className="text-3xl font-bold text-[#deb052]">
            {totalPrice.toFixed(2).replace('.', ',')} €
          </p>
        </div>
      </div>
    )
  }

  if (service === 'colchao') {
    return (
      <div className="space-y-6 bg-white p-6 rounded-lg border border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Configurar Serviço</h3>
        </div>

        {/* Size Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Tamanho do Colchão</label>
          <div className="space-y-2">
            {['solteiro', 'casal'].map((size) => (
              <label key={size} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => setSelectedSize(size)}
                  className="w-4 h-4"
                />
                <span className="ml-3 text-gray-700 font-medium capitalize">{size}</span>
                <span className="ml-auto font-semibold text-[#deb052]">
                  {pricingRules.colchao[size].toFixed(2).replace('.', ',')} €
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Quantidade</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent"
          />
        </div>

        {/* Price Display */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Preço Total</p>
          <p className="text-3xl font-bold text-[#deb052]">
            {totalPrice.toFixed(2).replace('.', ',')} €
          </p>
        </div>
      </div>
    )
  }

  if (service === 'vidros') {
    return (
      <div className="space-y-6 bg-white p-6 rounded-lg border border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Configurar Serviço</h3>
        </div>

        {/* Dimensions */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Largura (cm)</label>
            <input
              type="number"
              name="width"
              placeholder="Ex: 120"
              value={widthHeight.width}
              onChange={(e) => setWidthHeight({ ...widthHeight, width: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Altura (cm)</label>
            <input
              type="number"
              name="height"
              placeholder="Ex: 180"
              value={widthHeight.height}
              onChange={(e) => setWidthHeight({ ...widthHeight, height: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent"
            />
          </div>
        </div>

        {/* Price Display */}
        {widthHeight.width && widthHeight.height && (
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Preço Total</p>
            <p className="text-3xl font-bold text-[#deb052]">
              {totalPrice.toFixed(2).replace('.', ',')} €
            </p>
          </div>
        )}
      </div>
    )
  }

  return null
}
