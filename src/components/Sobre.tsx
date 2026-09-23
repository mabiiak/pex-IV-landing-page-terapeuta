export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="container sobre__grid">
        <div>
          <span className="eyebrow">Sobre o atendimento</span>
          <h2>Um trabalho terapêutico, não uma consulta médica</h2>
          <p>
            Não existe sentimento irrelevante tudo o que você sente é importante e merece ser ouvido e compreendido.
          </p>
          <p>
            Aqui, quem procura o atendimento é chamado de <strong>cliente</strong>, não de
            paciente. A palavra paciente é usada em consultórios médicos, para quem está
            sob cuidado clínico. Meu trabalho é complementar e terapêutico: apoia o
            alívio de estresse, ansiedade e dores do dia a dia, mas não substitui
            consulta, diagnóstico ou tratamento médico.
          </p>
          <p>
            Se você já acompanha um problema de saúde com um médico, as sessões podem
            caminhar lado a lado com esse cuidado — nunca no lugar dele.
          </p>
        </div>

        <div className="sobre__lista" aria-label="O que este trabalho é e não é">
          <div className="sobre__coluna">
            <h3>O que é</h3>
            <ul>
              <li>Escuta e técnicas de relaxamento</li>
              <li>Apoio para lidar com estresse e ansiedade</li>
              <li>Cuidado complementar, feito com você</li>
            </ul>
          </div>
          <div className="sobre__coluna">
            <h3>O que não é</h3>
            <ul>
              <li>Consulta médica ou psicológica</li>
              <li>Diagnóstico de doenças</li>
              <li>Substituição de tratamento em curso</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .sobre {
          padding: 88px 0;
          border-top: 1px solid var(--line);
        }
        .sobre__grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
        }
        .sobre__lista {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .sobre__coluna h3 {
          font-size: 17px;
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 10px;
        }
        .sobre__coluna ul {
          margin: 0;
          padding-left: 18px;
          color: var(--ink-soft);
        }
        .sobre__coluna li {
          margin-bottom: 8px;
        }
        @media (max-width: 900px) {
          .sobre__grid {
            grid-template-columns: 1fr;
          }
          .sobre__lista {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
