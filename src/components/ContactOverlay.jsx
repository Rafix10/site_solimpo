export default function ContactOverlay({ onClose }) {
  return (
    <div className="sl-contact-overlay" onClick={onClose}>
      <div className="sl-contact-card" onClick={(e) => e.stopPropagation()}>
        <button className="sl-close-btn" onClick={onClose}>
          ✕
        </button>
        <div className="sl-icon-circle">💬</div>
        <h2>Precisa de um Orçamento Personalizado?</h2>
        <p className="sl-subtitle">
          Não encontrou o serviço que procura? Contacte-nos diretamente e teremos todo o prazer em ajudá-lo com um orçamento à medida.
        </p>
        <div className="sl-contact-methods">
          <a href="tel:+351935798081" className="sl-contact-method">
            <div className="sl-method-icon phone">📞</div>
            <div className="sl-method-info">
              <div className="sl-method-label">Telefone</div>
              <div className="sl-method-value">935 798 081</div>
            </div>
          </a>
          <a
            href="https://wa.me/351935798081?text=Olá! Gostaria de solicitar um orçamento personalizado."
            target="_blank"
            rel="noopener noreferrer"
            className="sl-contact-method"
          >
            <div className="sl-method-icon whatsapp">💬</div>
            <div className="sl-method-info">
              <div className="sl-method-label">WhatsApp</div>
              <div className="sl-method-value">Enviar mensagem</div>
            </div>
          </a>
          <a href="mailto:geral@sofalimpo.pt?subject=Pedido de Orçamento Personalizado" className="sl-contact-method">
            <div className="sl-method-icon email">📧</div>
            <div className="sl-method-info">
              <div className="sl-method-label">Email</div>
              <div className="sl-method-value">geral@sofalimpo.pt</div>
            </div>
          </a>
        </div>
        <div className="sl-schedule">
          <div className="sl-schedule-title">Horário de Atendimento</div>
          <div className="sl-schedule-times">Seg-Sex: 08:00 - 18:00 &nbsp;|&nbsp; Sáb: 09:00 - 15:00</div>
        </div>
      </div>
    </div>
  )
}
