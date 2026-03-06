import { useState, useEffect } from 'react';

const Footer = () => {
  const [services, setServices] = useState([]);
  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/services?active=eq.true&order=display_order.asc`, {
          headers: {
            'apikey': ANON_KEY,
            'Authorization': `Bearer ${ANON_KEY}`
          }
        });
        const data = await response.json();
        setServices(data || []);
      } catch (error) {
        console.error('Error loading services:', error);
      }
    };

    fetchServices();
  }, [SUPABASE_URL, ANON_KEY]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('nossos-servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#1a1a2e] via-[#2d2d44] to-[#1a1a2e] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#deb052] to-[#c9982e] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold">Sofá Limpo</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Serviços profissionais de limpeza para o seu lar. Qualidade, confiança e resultados garantidos.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-white/10 hover:bg-[#deb052] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">f</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-white/10 hover:bg-[#deb052] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">📷</span>
              </a>
              <a href="https://wa.me/351935798081" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-white/10 hover:bg-[#deb052] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">💬</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#deb052]">Nossos Serviços</h4>
            <p className="text-gray-300 text-sm mb-4">
              Conheça nossa gama completa de serviços profissionais
            </p>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={scrollToServices}
                    className="text-gray-300 hover:text-[#deb052] transition-colors duration-200 flex items-center gap-2 text-sm group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#deb052] rounded-full group-hover:scale-150 transition-transform"></span>
                    <span>{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#deb052]">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-[#deb052] transition-colors duration-200 flex items-center gap-2 text-sm group">
                  <span className="w-1.5 h-1.5 bg-[#deb052] rounded-full group-hover:scale-150 transition-transform"></span>
                  <span>Sobre Nós</span>
                </a>
              </li>
              <li>
                <button onClick={scrollToServices} className="text-gray-300 hover:text-[#deb052] transition-colors duration-200 flex items-center gap-2 text-sm group">
                  <span className="w-1.5 h-1.5 bg-[#deb052] rounded-full group-hover:scale-150 transition-transform"></span>
                  <span>Serviços</span>
                </button>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-[#deb052] transition-colors duration-200 flex items-center gap-2 text-sm group">
                  <span className="w-1.5 h-1.5 bg-[#deb052] rounded-full group-hover:scale-150 transition-transform"></span>
                  <span>Contacto</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-[#deb052] transition-colors duration-200 flex items-center gap-2 text-sm group">
                  <span className="w-1.5 h-1.5 bg-[#deb052] rounded-full group-hover:scale-150 transition-transform"></span>
                  <span>Perguntas Frequentes</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#deb052]">Contactos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm">📞</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Telefone</p>
                  <a href="tel:+351935798081" className="text-white hover:text-[#deb052] transition-colors text-sm font-medium">
                    935 798 081
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm">📧</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <a href="mailto:geral@sofalimpo.pt" className="text-white hover:text-[#deb052] transition-colors text-sm font-medium break-all">
                    geral@sofalimpo.pt
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm">⏰</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Horário</p>
                  <p className="text-white text-sm leading-relaxed">
                    Seg-Sex: 08:00 - 18:00<br />
                    Sáb: 09:00 - 15:00
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {new Date().getFullYear()} Sofá Limpo. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#privacidade" className="hover:text-[#deb052] transition-colors">
                Política de Privacidade
              </a>
              <a href="#termos" className="hover:text-[#deb052] transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
