import Header from './components/Header'
import Hero from './components/Hero'
import ServicosOnline from './components/ServicosOnline'
import ServicosPresenciais from './components/ServicosPresenciais'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicosOnline />
        <ServicosPresenciais />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
