import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44]">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Sofá Limpo
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Serviços profissionais de limpeza para o seu lar
            </p>
            <a
              href="#nossos-servicos"
              className="inline-block bg-gradient-to-r from-[#deb052] to-[#c9982e] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Ver Serviços
            </a>
          </div>
        </section>

        <section id="nossos-servicos" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#1a1a2e]">
              Nossos Serviços
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Conheça nossa gama completa de serviços profissionais
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🛋️</div>
                <h3 className="text-xl font-semibold mb-2">Sofás</h3>
                <p className="text-gray-600">Limpeza profunda e higienização</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🛏️</div>
                <h3 className="text-xl font-semibold mb-2">Colchões</h3>
                <p className="text-gray-600">Remoção de ácaros e bactérias</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🪑</div>
                <h3 className="text-xl font-semibold mb-2">Cadeiras</h3>
                <p className="text-gray-600">Higienização completa</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🧺</div>
                <h3 className="text-xl font-semibold mb-2">Tapetes</h3>
                <p className="text-gray-600">Lavagem especializada</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🪟</div>
                <h3 className="text-xl font-semibold mb-2">Cortinados</h3>
                <p className="text-gray-600">Tratamento delicado</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🪟</div>
                <h3 className="text-xl font-semibold mb-2">Vidros</h3>
                <p className="text-gray-600">Limpeza cristalina</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#1a1a2e]">
              Entre em Contacto
            </h2>
            <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent outline-none transition-all"
                  placeholder="O seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent outline-none transition-all"
                  placeholder="912 345 678"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#deb052] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#deb052] to-[#c9982e] text-white py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
