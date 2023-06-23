import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header/index'

import { GlobalCss } from './styles'
import Rotas from './routs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
