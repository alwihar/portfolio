import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header, Footer } from './components'
import { Home, Portfolio, Art } from './pages'

const App = () => (
  <Router>
    <div className="app bg-primary w-full overflow-hidden">
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route exact path='/portfolio'  element={<Portfolio/>}/>
        <Route exact path='/art'  element={<Art/>}/>
      </Routes>

      <Footer/>
    </div>
  </Router>
)

export default App;