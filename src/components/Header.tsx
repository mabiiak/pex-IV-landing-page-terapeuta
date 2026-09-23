import { useState } from 'react'

const LINKS = [
  { href: '#online', label: 'Atendimento online' },
  { href: '#presencial', label: 'Atendimento presencial' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__row">
        <a href="#topo" className="header__brand">
          Elaine Coimbra | Terapeuta Integrativa
        </a>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="header__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(241, 237, 227, 0.92);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid var(--line);
        }
        .header__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }
        .header__brand {
          font-family: var(--font-display);
          font-size: 22px;
          text-decoration: none;
          color: var(--ink);
        }
        .header__nav {
          display: flex;
          gap: 32px;
        }
        .header__nav a {
          text-decoration: none;
          font-size: 15px;
          color: var(--ink-soft);
        }
        .header__nav a:hover {
          color: var(--clay-deep);
        }
        .header__toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .header__toggle span {
          width: 22px;
          height: 2px;
          background: var(--ink);
          display: block;
        }
        @media (max-width: 780px) {
          .header__nav {
            position: absolute;
            top: 76px;
            left: 0;
            right: 0;
            background: var(--bone);
            border-bottom: 1px solid var(--line);
            flex-direction: column;
            gap: 0;
            display: none;
          }
          .header__nav.is-open {
            display: flex;
          }
          .header__nav a {
            padding: 16px 20px;
            border-top: 1px solid var(--line);
          }
          .header__toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}
