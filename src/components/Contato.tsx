import { useState } from 'react'

export default function Contato() {
  const [nome, setNome] = useState('')
  const [modalidade, setModalidade] = useState('online')
  const [mensagem, setMensagem] = useState('')

  const linkWhats = () => {
    const texto = `Olá! Meu nome é ${nome || '___'}. Tenho interesse no atendimento ${
      modalidade === 'online' ? 'online' : 'presencial'
    }. ${mensagem}`
    return `https://wa.me/5541984550609?text=${encodeURIComponent(texto)}`
  }

  return (
    <section id="contato" className="contato">
      <div className="container contato__grid">
        <div>
          <span className="eyebrow">Vamos conversar</span>
          <h2>Escolha o formato e me conte o que está sentindo</h2>
          <p>
            Não existe pergunta pequena demais. Preencha os campos abaixo e envie
            uma mensagem direto pelo WhatsApp — respondo para combinarmos o
            primeiro horário.
          </p>
          <p>
            Não existe sentimento irrelevante tudo o que você sente é importante e merece ser ouvido e compreendido.
          </p>
        </div>

        <div className="contato__form">
          <label>
            Nome
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Como posso te chamar?"
            />
          </label>

          <fieldset>
            <legend>Modalidade</legend>
            <label className="contato__radio">
              <input
                type="radio"
                name="modalidade"
                value="online"
                checked={modalidade === 'online'}
                onChange={() => setModalidade('online')}
              />
              Online
            </label>
            <label className="contato__radio">
              <input
                type="radio"
                name="modalidade"
                value="presencial"
                checked={modalidade === 'presencial'}
                onChange={() => setModalidade('presencial')}
              />
              Presencial
            </label>
          </fieldset>

          <label>
            Mensagem
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              rows={4}
              placeholder="O que você gostaria de tratar nas sessões?"
            />
          </label>

          <a className="btn-primary" href={linkWhats()} target="_blank" rel="noreferrer">
            Enviar pelo WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        .contato {
          padding: 88px 0;
          background: var(--ink);
          color: var(--bone);
        }
        .contato h2 {
          color: var(--bone);
        }
        .contato p {
          color: var(--bone-deep);
        }
        .contato__grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: start;
        }
        .contato__form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          background: rgba(241, 237, 227, 0.06);
          border: 1px solid rgba(241, 237, 227, 0.2);
          padding: 28px;
          border-radius: 6px;
        }
        .contato__form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 14px;
        }
        .contato__form input[type='text'],
        .contato__form textarea {
          background: var(--bone);
          border: none;
          border-radius: 4px;
          padding: 10px 12px;
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--ink);
        }
        .contato__form fieldset {
          border: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .contato__form legend {
          font-size: 14px;
          margin-bottom: 8px;
        }
        .contato__radio {
          flex-direction: row !important;
          align-items: center;
          gap: 6px !important;
        }
        @media (max-width: 900px) {
          .contato__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
