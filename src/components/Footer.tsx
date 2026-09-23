export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <span>Elaine Coimbra | Terapeuta Integrativa — atendimento online e presencial</span>
        <span>Trabalho complementar e terapêutico, não substitui acompanhamento médico.</span>
      </div>

      <style>{`
        .footer {
          padding: 28px 0;
          border-top: 1px solid var(--line);
        }
        .footer__row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 13px;
          color: var(--ink-soft);
        }
      `}</style>
    </footer>
  )
}
