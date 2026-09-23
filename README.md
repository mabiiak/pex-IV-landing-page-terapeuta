# Landing Page — Terapias Holísticas (React + TypeScript)

Landing page simples para uma terapeuta autônoma, com atendimento **online**
(escuta humanizada e exercícios terapêuticos) e **presencial** com agendamento
(auriculoterapia, geoterapia e massoterapia).

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente http://localhost:5173).

## Como gerar a versão de produção

```bash
npm run build
npm run preview
```

## Estrutura

- `src/App.tsx` — monta as seções da página
- `src/components/Header.tsx` — menu de navegação
- `src/components/Hero.tsx` — seção de abertura
- `src/components/ServicosOnline.tsx` — escuta humanizada e exercícios terapêuticos
- `src/components/ServicosPresenciais.tsx` — auriculoterapia, geoterapia e massoterapia
- `src/components/Sobre.tsx` — explica por que o termo usado é "cliente", não "paciente"
- `src/components/Contato.tsx` — formulário simples que monta uma mensagem de WhatsApp
- `src/components/Footer.tsx` — rodapé
- `src/index.css` — paleta de cores, tipografia e estilos globais
