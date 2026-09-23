export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="eyebrow">Terapias complementares para estresse e ansiedade</span>
          <h1>
            Um espaço para respirar,<br />
            antes que o corpo peça a conta.
          </h1>
          <p>
            Atendimento online, com escuta humanizada e exercícios terapêuticos, e com
            atendimento presencial para sessões de auriculoterapia, geoterapia e
            massoterapia. O objetivo é simples: aliviar dores, estresse e ansiedade,
            no seu ritmo.
          </p>
          <div className="hero__actions">
            <a className="btn-primary" href="#contato">Agendar uma conversa</a>
            <a className="btn-secondary" href="#online">Ver como funciona</a>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M210 30c88 0 150 74 158 152 7 70-38 130-108 158-66 26-142 8-182-46
                 C34 244 24 172 62 112 100 52 150 30 210 30Z"
              fill="var(--sage-soft)"
            />
            <circle cx="176" cy="196" r="86" fill="var(--bone-deep)" stroke="var(--clay)" strokeWidth="2" />
            <path
              d="M120 250c30 34 90 44 138 16"
              fill="none"
              stroke="var(--clay)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="150" cy="176" r="5" fill="var(--ink)" />
            <circle cx="214" cy="176" r="5" fill="var(--ink)" />
          </svg>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 72px 0 40px;
        }
        .hero__grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
        }
        .hero__text h1 {
          font-size: 44px;
          line-height: 1.15;
        }
        .hero__actions {
          display: flex;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .hero__art svg {
          width: 100%;
          max-width: 420px;
          height: auto;
          display: block;
          margin: 0 auto;
        }
        @media (max-width: 900px) {
          .hero__grid {
            grid-template-columns: 1fr;
          }
          .hero__art {
            order: -1;
            max-width: 280px;
            margin: 0 auto;
          }
          .hero__text h1 {
            font-size: 34px;
          }
        }
      `}</style>
    </section>
  )
}
