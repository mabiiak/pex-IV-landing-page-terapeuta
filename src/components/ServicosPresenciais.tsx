const ITENS = [
  {
    titulo: 'Auriculoterapia',
    texto:
      'Estímulo de pontos específicos da orelha para apoiar o alívio de dores, tensão e ansiedade.',
  },
  {
    titulo: 'Geoterapia',
    texto:
      'Uso terapêutico de argilas e elementos da terra para alivio em dores de artrite e artrose, relaxamento muscular e bem-estar geral.',
  },
  {
    titulo: 'Massoterapia',
    texto:
      'Massagem terapêutica focada em aliviar tensão muscular, dores no corpo e sensação de sobrecarga.',
  },
]

export default function ServicosPresenciais() {
  return (
    <section id="presencial" className="presencial">
      <div className="container">
        <div className="presencial__intro">
          <span className="eyebrow">Atendimento presencial, com agendamento</span>
          <h2>Cuidando com as mãos, para o corpo que carrega o estresse</h2>
          <p>
            Sessões marcadas com antecedência, no presencial. Cada técnica pode ser
            usada isoladamente ou combinada, conforme a sua necessidade e o que fizer sentido para você no seu
            momento.
          </p>
        </div>

        <div className="presencial__grid">
          {ITENS.map((item) => (
            <div className="presencial__card" key={item.titulo}>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .presencial {
          padding: 88px 0;
        }
        .presencial__intro {
          max-width: 640px;
          margin-bottom: 48px;
        }
        .presencial__intro p {
          color: var(--ink-soft);
        }
        .presencial__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }
        .presencial__card {
          background: var(--bone);
          padding: 32px 28px;
        }
        .presencial__card h3 {
          font-size: 20px;
          margin-bottom: 8px;
          color: var(--clay-deep);
        }
        .presencial__card p {
          color: var(--ink-soft);
          margin: 0;
        }
        @media (max-width: 900px) {
          .presencial__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
