import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header, Footer } from './components'
import { Home, Portfolio, Art, PaintingDetail } from './pages'

const App = () => {


  return (
    <Router>
      <div className="app bg-primary w-full overflow-hidden">
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path='/portfolio' element={<Portfolio/>}/>
          <Route exact path='/art' element={<Art/>}/>
          <Route path="/art/:slug" element={<PaintingDetail/>} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  )
}

export default App