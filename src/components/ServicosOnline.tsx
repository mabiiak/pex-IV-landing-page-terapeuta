const ITENS = [
  {
    titulo: 'Escuta humanizada',
    texto:
      'Um encontro por chamada de vídeo ou voz, sem pressa, para você organizar o que sente e ser ouvido sem julgamento.',
  },
  {
    titulo: 'Exercícios terapêuticos',
    texto:
      'Práticas guiadas de respiração, relaxamento e regulação do corpo, voltadas ao alívio de estresse e ansiedade no dia a dia.',
  },
]

export default function ServicosOnline() {
  return (
    <section id="online" className="online">
      <div className="container online__grid">
        <div className="online__intro">
          <span className="eyebrow">Atendimento online</span>
          <h2>De onde você estiver, sem sair de casa</h2>
          <p>
            Sessões por chamada de vídeo, combinadas com você conforme sua rotina.
            Ideal para quem quer começar aos poucos ou não tem um horário fixo disponível
            para deslocamento.
          </p>
        </div>

        <div className="online__lista">
          {ITENS.map((item) => (
            <div className="online__item" key={item.titulo}>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .online {
          padding: 88px 0;
          background: var(--sage-soft);
        }
        .online__grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
        }
        .online__intro p {
          color: var(--ink-soft);
        }
        .online__lista {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .online__item {
          border-left: 2px solid var(--sage);
          padding-left: 20px;
        }
        .online__item h3 {
          font-size: 20px;
          margin-bottom: 6px;
        }
        .online__item p {
          color: var(--ink-soft);
          margin: 0;
        }
        @media (max-width: 900px) {
          .online__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
